import * as React from "react";

import * as ReactDom from "react-dom";

import { Router, Route, Link, browserHistory  } from "react-router";

import {CommentBox} from "./src/Components/CommentComponents/CommentBox";
 
import {FilterableProductTable} from "./src/Components/SearchComponents/FilterableProductTable";

ReactDom.render((
  <Router history={browserHistory}>
    <Route path="/" component={FilterableProductTable}/>
    <Route path="search" component={FilterableProductTable}/>
    <Route path="comments" component={CommentBox}/>
  </Router>
), document.getElementById('content'))
