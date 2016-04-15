import * as React from "react";

import {ProductCategoryRow} from "./ProductCategoryRow";

import {ProductRow} from "./ProductRow";


import {ISearchState} from "../../stores/SearchStore";


var tableStyle = {
    display:"inline"
}
export class ProductTable extends React.Component<ISearchState,{}>{
    render()
    {
      let rows:any[] = [];
      let lastCategory:string = null;
	  let props = this.props;
        
      this.props.products.forEach(function(product) {
	 
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
    return (
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
    
}