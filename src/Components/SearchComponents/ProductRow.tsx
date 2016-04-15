import * as React from "react";

import {IProduct} from "../../stores/SearchStore";

interface ProductProps
{
    product: IProduct
}
export class ProductRow extends React.Component<ProductProps,{}>
{
    render()
    {
        var name = this.props.product.stocked ?
        this.props.product.name:
        <span style={{color: 'red'}}>
            {this.props.product.name}
        </span>;
        return (
        <tr>
            <td>{name}</td>
            <td>{this.props.product.price}</td>
        </tr>
        );
    }
}
