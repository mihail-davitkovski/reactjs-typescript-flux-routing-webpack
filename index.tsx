import * as React from "react";

import * as ReactDom from "react-dom";

import  * as ReactRouter  from "react-router";

import {CommentBox} from "./src/Components/CommentComponents/CommentBox";
 
import {FilterableProductTable} from "./src/Components/SearchComponents/FilterableProductTable";

ReactDom.render((
  <ReactRouter.Router history={ReactRouter.browserHistory}>
    <ReactRouter.Route path="/" component={FilterableProductTable}/>
    <ReactRouter.Route path="search" component={FilterableProductTable}/>
    <ReactRouter.Route path="comments" component={CommentBox}/>
  </ReactRouter.Router>
), document.getElementById('content'))
