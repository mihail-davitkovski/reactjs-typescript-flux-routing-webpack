import * as React from "react"; 

export interface SearchBarProps{
    onUserInput(value: string, checked: boolean):void;
    filterText:string;
    inStockOnly:boolean;
}


export class SearchBar extends React.Component<SearchBarProps, {}>
{
    
    refs: {
       [key: string]: (Element);
       filterStockInput: (HTMLInputElement),
       filterTextInput: (HTMLInputElement)
     }
     
    _handleChange = (e:any) => {
        this.props.onUserInput(this.refs.filterTextInput.value, this.refs.filterStockInput.checked)
    }
    
    render()
    {
        return (
            <form>
                <input type="text" 
                    placeholder="Search..." 
                    value={this.props.filterText}
                    onChange={this._handleChange}
                    ref="filterTextInput"
                />
                <p>
                <input type="checkbox" 
                        checked={this.props.inStockOnly}
                        onChange={this._handleChange}
                        ref="filterStockInput"
                />
                {' '}
                Only show products in stock
                </p>
            </form>
        );
    }
}
