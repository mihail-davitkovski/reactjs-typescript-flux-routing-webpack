import AppDispatcher from "../dispatcher/AppDispatcher";

import  {BaseStore} from "./BaseStore";

import {Action} from "../enums/SearchAction";

export interface IProduct{
    category: string;
    price: string;
    stocked: boolean;
    name: string;
}

export interface ISearchState{
    filterText: string;
    inStockOnly: boolean;
    products: Array<IProduct>;
}


class SearchStore extends BaseStore
{
    private _filterText: string;
    
    private _inStockOnly: boolean;
    
    private _products: Array<IProduct>;
    
    private _cachedProducts: Array<IProduct>;
    
    get filterText(): string
    {
        return this._filterText;
    }
    
    get inStockOnly(): boolean
    {
        return this._inStockOnly;
    }
    
    constructor() {
        super();
        this.registerActionHandlers();
        this.setInitialState();
    }
    
    get state(): ISearchState
    {
        let state: ISearchState = 
        {
            filterText: this._filterText,
            inStockOnly: this._inStockOnly,
            products: this._products
        };
        
        return state;
    }
    
    private setInitialState()
    {
        this._filterText = "";
        this._inStockOnly = false;
        this._products = [];
        this._cachedProducts = [];
    }
  
    private filterProducts(searchValue: string, inStockOnly: boolean)
    {
        this._filterText = searchValue;
        this._inStockOnly = inStockOnly;
        this._products = [];
        this._cachedProducts.forEach((product)=> {
            if (product.name.indexOf(searchValue) === -1 || (!product.stocked && inStockOnly)) {
                return;
            }
            else
            {
                this._products.push(product);
            }
        });
        
    }
    
    private setProducts(products:Array<IProduct>)
    {
        this._cachedProducts = products;
        this._products = products;
    }
   
   
    private registerActionHandlers() {
        AppDispatcher.register((action: any) => {
            switch(action.actionType)
            {
                case Action.GetAll:
                    this.setProducts(action.products);
                    this.emitChange();
                    break;
                case Action.FilterChange:
                    this.filterProducts(action.searchValue, action.inStockOnly);
                    this.emitChange();
                    break;
            }
        });
	}
}

export default new SearchStore();





