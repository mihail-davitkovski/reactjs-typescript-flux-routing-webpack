import * as React from "react";

interface ProductCategoryRowProps{
    category:string;
    
}
export class ProductCategoryRow extends React.Component<ProductCategoryRowProps,{}>
{
    render(){
        return (<tr><th colSpan="2">{this.props.category}</th></tr>);
    }
}  