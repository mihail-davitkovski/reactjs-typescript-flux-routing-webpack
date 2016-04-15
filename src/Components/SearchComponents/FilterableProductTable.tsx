import * as React from "react";

import {SearchBar} from "./SearchBar";

import {ProductTable} from "./ProductTable";

import SearchActions from "../../actions/SearchActions";

import  SearchStore, {IProduct, ISearchState} from "../../stores/SearchStore";


export class FilterableProductTable extends React.Component<{}, ISearchState>
{
    constructor(props: {}, state: ISearchState){
         super(props, state);
       this.state = SearchStore.state;
    }
   
    componentDidMount() {
        SearchStore.addChangeListener(this.onStateChange.bind(this));
        SearchActions.getAll();
    }
    
    componentWillUnmount() {
        SearchStore.removeChangeListener(this.onStateChange);
    }
    
    private onStateChange()
    {
        this.setState(SearchStore.state);  
    }
    
    private onFilterChange(searchValue: string, inStockOnly:boolean)
    {
        SearchActions.filterChange(searchValue, inStockOnly);
    }

    render()
    {
        return (
            <div>
                <SearchBar 
                            filterText={this.state.filterText} 
                            inStockOnly={this.state.inStockOnly}
                            onUserInput={this.onFilterChange}/>
                <ProductTable products = {this.state.products}
                            filterText={this.state.filterText} 
                            inStockOnly={this.state.inStockOnly}/>
                            
                <br/><br/><br/>
                <div>
                    <a href="/comments"><b>View Comments</b></a>
                </div>
            </div>
           
        );
    }
}
