webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(2);
	var ReactDom = __webpack_require__(3);
	var ReactRouter = __webpack_require__(4);
	var CommentBox_1 = __webpack_require__(5);
	var FilterableProductTable_1 = __webpack_require__(19);
	ReactDom.render((React.createElement(ReactRouter.Router, {history: ReactRouter.browserHistory}, React.createElement(ReactRouter.Route, {path: "/", component: FilterableProductTable_1.FilterableProductTable}), React.createElement(ReactRouter.Route, {path: "search", component: FilterableProductTable_1.FilterableProductTable}), React.createElement(ReactRouter.Route, {path: "comments", component: CommentBox_1.CommentBox}))), document.getElementById('content'));


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = ReactRouter;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(2);
	var CommentList_1 = __webpack_require__(6);
	var CommentForm_1 = __webpack_require__(8);
	var CommentsStore_1 = __webpack_require__(9);
	var CommentActions_1 = __webpack_require__(18);
	var CommentBox = (function (_super) {
	    __extends(CommentBox, _super);
	    function CommentBox(props, state) {
	        _super.call(this, props, state);
	        this.handleCommentSubmit = function (comment) {
	            CommentActions_1.default.addComment(comment);
	        };
	        this.state = CommentsStore_1.default.state;
	    }
	    CommentBox.prototype.componentDidMount = function () {
	        CommentsStore_1.default.addChangeListener(this.onChange.bind(this));
	        CommentActions_1.default.getAll();
	    };
	    CommentBox.prototype.onChange = function () {
	        this.setState(CommentsStore_1.default.state);
	    };
	    CommentBox.prototype.render = function () {
	        return (React.createElement("div", {className: "commentBox"}, React.createElement("h1", null, "Comments"), React.createElement(CommentList_1.CommentList, {comments: this.state.comments}), React.createElement("br", null), React.createElement("br", null), React.createElement(CommentForm_1.CommentForm, {onCommentSubmit: this.handleCommentSubmit}), React.createElement("br", null), React.createElement("br", null), React.createElement("br", null), React.createElement("div", null, React.createElement("a", {href: "/search"}, React.createElement("b", null, "Go to Search page")))));
	    };
	    return CommentBox;
	}(React.Component));
	exports.CommentBox = CommentBox;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(2);
	var Comment_1 = __webpack_require__(7);
	var CommentList = (function (_super) {
	    __extends(CommentList, _super);
	    function CommentList() {
	        _super.apply(this, arguments);
	    }
	    CommentList.prototype.render = function () {
	        var commentNodes = this.props.comments.map(function (comment) {
	            return (React.createElement(Comment_1.Comment, {author: comment.author}, comment.text));
	        });
	        return (React.createElement("div", {className: "commentList"}, commentNodes));
	    };
	    return CommentList;
	}(React.Component));
	exports.CommentList = CommentList;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(2);
	var Comment = (function (_super) {
	    __extends(Comment, _super);
	    function Comment() {
	        _super.apply(this, arguments);
	    }
	    Comment.prototype.render = function () {
	        return (React.createElement("div", {className: "comment"}, React.createElement("h2", {className: "commentAuthor"}, this.props.author), this.props.children));
	    };
	    return Comment;
	}(React.Component));
	exports.Comment = Comment;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(2);
	;
	var CommentForm = (function (_super) {
	    __extends(CommentForm, _super);
	    function CommentForm(props, state) {
	        var _this = this;
	        _super.call(this, props, state);
	        this.handleAuthorChange = function (e) {
	            _this.setState({ author: e.target.value, text: _this.state.text });
	        };
	        this.handleTextChange = function (e) {
	            _this.setState({ text: e.target.value, author: _this.state.author });
	        };
	        this.handleSubmit = function (e) {
	            e.preventDefault();
	            var author = _this.state.author.trim();
	            var text = _this.state.text.trim();
	            _this.props.onCommentSubmit({ author: author, text: text });
	            _this.setState({ author: '', text: '' });
	        };
	        this.state = { author: "", text: "" };
	    }
	    CommentForm.prototype.render = function () {
	        return (React.createElement("form", {className: "commentForm", onSubmit: this.handleSubmit}, React.createElement("input", {type: "text", placeholder: "Your name", value: this.state.author, onChange: this.handleAuthorChange}), "  ", React.createElement("input", {type: "text", placeholder: "Say something...", value: this.state.text, onChange: this.handleTextChange}), "  ", React.createElement("input", {type: "submit", value: "Post"})));
	    };
	    return CommentForm;
	}(React.Component));
	exports.CommentForm = CommentForm;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var AppDispatcher_1 = __webpack_require__(10);
	var BaseStore_1 = __webpack_require__(15);
	var CommentAction_1 = __webpack_require__(17);
	var CommentsStore = (function (_super) {
	    __extends(CommentsStore, _super);
	    function CommentsStore() {
	        _super.call(this);
	        this.registerActionHandlers();
	        this.setDefaultState();
	    }
	    Object.defineProperty(CommentsStore.prototype, "state", {
	        get: function () {
	            return {
	                comments: this._comments
	            };
	        },
	        enumerable: true,
	        configurable: true
	    });
	    CommentsStore.prototype._initializeComments = function (comments) {
	        this._comments = comments;
	    };
	    CommentsStore.prototype._addComment = function (comment) {
	        this._comments.push(comment);
	    };
	    CommentsStore.prototype.setDefaultState = function () {
	        this._comments = new Array();
	    };
	    CommentsStore.prototype.registerActionHandlers = function () {
	        var _this = this;
	        AppDispatcher_1.default.register(function (action) {
	            switch (action.actionType) {
	                case CommentAction_1.CommentAction.GET_ALL:
	                    _this._initializeComments(action.comments);
	                    _this.emitChange();
	                    break;
	                case CommentAction_1.CommentAction.ADD_COMMENT:
	                    _this._addComment(action.comment);
	                    _this.emitChange();
	                    break;
	            }
	        });
	    };
	    return CommentsStore;
	}(BaseStore_1.BaseStore));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = new CommentsStore();


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var flux_1 = __webpack_require__(11);
	var AppDispatcher = new flux_1.Dispatcher();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = AppDispatcher;


/***/ },
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var EventEmitter = __webpack_require__(16);
	var BaseStore = (function (_super) {
	    __extends(BaseStore, _super);
	    function BaseStore() {
	        _super.apply(this, arguments);
	        this.CHANGE_EVENT = "stateChanged";
	    }
	    BaseStore.prototype.addChangeListener = function (callback) {
	        this.on(this.CHANGE_EVENT.toString(), callback);
	    };
	    BaseStore.prototype.removeChangeListener = function (callback) {
	        this.removeListener(this.CHANGE_EVENT, callback);
	    };
	    BaseStore.prototype.emitChange = function () {
	        this.emit(this.CHANGE_EVENT);
	    };
	    return BaseStore;
	}(EventEmitter));
	exports.BaseStore = BaseStore;


/***/ },
/* 16 */,
/* 17 */
/***/ function(module, exports) {

	"use strict";
	(function (CommentAction) {
	    CommentAction[CommentAction["GET_ALL"] = 0] = "GET_ALL";
	    CommentAction[CommentAction["ADD_COMMENT"] = 1] = "ADD_COMMENT";
	})(exports.CommentAction || (exports.CommentAction = {}));
	var CommentAction = exports.CommentAction;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var CommentAction_1 = __webpack_require__(17);
	var AppDispatcher_1 = __webpack_require__(10);
	var CommentActions = (function () {
	    function CommentActions() {
	    }
	    //API call should be implemented here
	    CommentActions.getAll = function () {
	        //API call should be implemented here
	        var comments = [{ author: "Pete Hunt", text: "This is one comment" },
	            { author: "Jordan Walke", text: "This is *another* comment" }];
	        AppDispatcher_1.default.dispatch({
	            actionType: CommentAction_1.CommentAction.GET_ALL,
	            comments: comments
	        });
	    };
	    CommentActions.addComment = function (comment) {
	        AppDispatcher_1.default.dispatch({
	            actionType: CommentAction_1.CommentAction.ADD_COMMENT,
	            comment: comment
	        });
	    };
	    return CommentActions;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = CommentActions;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(2);
	var SearchBar_1 = __webpack_require__(20);
	var ProductTable_1 = __webpack_require__(21);
	var SearchActions_1 = __webpack_require__(24);
	var SearchStore_1 = __webpack_require__(26);
	var FilterableProductTable = (function (_super) {
	    __extends(FilterableProductTable, _super);
	    function FilterableProductTable(props, state) {
	        _super.call(this, props, state);
	        this.state = SearchStore_1.default.state;
	    }
	    FilterableProductTable.prototype.componentDidMount = function () {
	        SearchStore_1.default.addChangeListener(this.onStateChange.bind(this));
	        SearchActions_1.default.getAll();
	    };
	    FilterableProductTable.prototype.componentWillUnmount = function () {
	        SearchStore_1.default.removeChangeListener(this.onStateChange);
	    };
	    FilterableProductTable.prototype.onStateChange = function () {
	        this.setState(SearchStore_1.default.state);
	    };
	    FilterableProductTable.prototype.onFilterChange = function (searchValue, inStockOnly) {
	        SearchActions_1.default.filterChange(searchValue, inStockOnly);
	    };
	    FilterableProductTable.prototype.render = function () {
	        return (React.createElement("div", null, React.createElement(SearchBar_1.SearchBar, {filterText: this.state.filterText, inStockOnly: this.state.inStockOnly, onUserInput: this.onFilterChange}), React.createElement(ProductTable_1.ProductTable, {products: this.state.products, filterText: this.state.filterText, inStockOnly: this.state.inStockOnly}), React.createElement("br", null), React.createElement("br", null), React.createElement("br", null), React.createElement("div", null, React.createElement("a", {href: "/comments"}, React.createElement("b", null, "View Comments")))));
	    };
	    return FilterableProductTable;
	}(React.Component));
	exports.FilterableProductTable = FilterableProductTable;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(2);
	var SearchBar = (function (_super) {
	    __extends(SearchBar, _super);
	    function SearchBar() {
	        var _this = this;
	        _super.apply(this, arguments);
	        this._handleChange = function (e) {
	            _this.props.onUserInput(_this.refs.filterTextInput.value, _this.refs.filterStockInput.checked);
	        };
	    }
	    SearchBar.prototype.render = function () {
	        return (React.createElement("form", null, React.createElement("input", {type: "text", placeholder: "Search...", value: this.props.filterText, onChange: this._handleChange, ref: "filterTextInput"}), React.createElement("p", null, React.createElement("input", {type: "checkbox", checked: this.props.inStockOnly, onChange: this._handleChange, ref: "filterStockInput"}), ' ', "Only show products in stock")));
	    };
	    return SearchBar;
	}(React.Component));
	exports.SearchBar = SearchBar;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(2);
	var ProductCategoryRow_1 = __webpack_require__(22);
	var ProductRow_1 = __webpack_require__(23);
	var tableStyle = {
	    display: "inline"
	};
	var ProductTable = (function (_super) {
	    __extends(ProductTable, _super);
	    function ProductTable() {
	        _super.apply(this, arguments);
	    }
	    ProductTable.prototype.render = function () {
	        var rows = [];
	        var lastCategory = null;
	        var props = this.props;
	        this.props.products.forEach(function (product) {
	            if (product.category !== lastCategory) {
	                rows.push(React.createElement(ProductCategoryRow_1.ProductCategoryRow, {category: product.category, key: product.category}));
	            }
	            rows.push(React.createElement(ProductRow_1.ProductRow, {product: product, key: product.name}));
	            lastCategory = product.category;
	        });
	        return (React.createElement("table", {style: tableStyle}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Name"), React.createElement("th", null, "Price"))), React.createElement("tbody", null, rows)));
	    };
	    return ProductTable;
	}(React.Component));
	exports.ProductTable = ProductTable;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(2);
	var ProductCategoryRow = (function (_super) {
	    __extends(ProductCategoryRow, _super);
	    function ProductCategoryRow() {
	        _super.apply(this, arguments);
	    }
	    ProductCategoryRow.prototype.render = function () {
	        return (React.createElement("tr", null, React.createElement("th", {colSpan: "2"}, this.props.category)));
	    };
	    return ProductCategoryRow;
	}(React.Component));
	exports.ProductCategoryRow = ProductCategoryRow;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(2);
	var ProductRow = (function (_super) {
	    __extends(ProductRow, _super);
	    function ProductRow() {
	        _super.apply(this, arguments);
	    }
	    ProductRow.prototype.render = function () {
	        var name = this.props.product.stocked ?
	            this.props.product.name :
	            React.createElement("span", {style: { color: 'red' }}, this.props.product.name);
	        return (React.createElement("tr", null, React.createElement("td", null, name), React.createElement("td", null, this.props.product.price)));
	    };
	    return ProductRow;
	}(React.Component));
	exports.ProductRow = ProductRow;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var SearchAction_1 = __webpack_require__(25);
	var AppDispatcher_1 = __webpack_require__(10);
	var SearchActions = (function () {
	    function SearchActions() {
	    }
	    //API call should be implemented here
	    SearchActions.getAll = function () {
	        var products = [
	            { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
	            { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
	            { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
	            { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
	            { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
	            { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
	        ];
	        AppDispatcher_1.default.dispatch({
	            actionType: SearchAction_1.Action.GetAll,
	            products: products
	        });
	    };
	    SearchActions.filterChange = function (searchValue, inStockOnly) {
	        AppDispatcher_1.default.dispatch({
	            actionType: SearchAction_1.Action.FilterChange,
	            searchValue: searchValue,
	            inStockOnly: inStockOnly
	        });
	    };
	    return SearchActions;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = SearchActions;


/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";
	(function (Action) {
	    Action[Action["FilterChange"] = 0] = "FilterChange";
	    Action[Action["GetAll"] = 1] = "GetAll";
	})(exports.Action || (exports.Action = {}));
	var Action = exports.Action;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var AppDispatcher_1 = __webpack_require__(10);
	var BaseStore_1 = __webpack_require__(15);
	var SearchAction_1 = __webpack_require__(25);
	var SearchStore = (function (_super) {
	    __extends(SearchStore, _super);
	    function SearchStore() {
	        _super.call(this);
	        this.registerActionHandlers();
	        this.setInitialState();
	    }
	    Object.defineProperty(SearchStore.prototype, "filterText", {
	        get: function () {
	            return this._filterText;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SearchStore.prototype, "inStockOnly", {
	        get: function () {
	            return this._inStockOnly;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SearchStore.prototype, "state", {
	        get: function () {
	            var state = {
	                filterText: this._filterText,
	                inStockOnly: this._inStockOnly,
	                products: this._products
	            };
	            return state;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SearchStore.prototype.setInitialState = function () {
	        this._filterText = "";
	        this._inStockOnly = false;
	        this._products = [];
	        this._cachedProducts = [];
	    };
	    SearchStore.prototype.filterProducts = function (searchValue, inStockOnly) {
	        var _this = this;
	        this._filterText = searchValue;
	        this._inStockOnly = inStockOnly;
	        this._products = [];
	        this._cachedProducts.forEach(function (product) {
	            if (product.name.indexOf(searchValue) === -1 || (!product.stocked && inStockOnly)) {
	                return;
	            }
	            else {
	                _this._products.push(product);
	            }
	        });
	    };
	    SearchStore.prototype.setProducts = function (products) {
	        this._cachedProducts = products;
	        this._products = products;
	    };
	    SearchStore.prototype.registerActionHandlers = function () {
	        var _this = this;
	        AppDispatcher_1.default.register(function (action) {
	            switch (action.actionType) {
	                case SearchAction_1.Action.GetAll:
	                    _this.setProducts(action.products);
	                    _this.emitChange();
	                    break;
	                case SearchAction_1.Action.FilterChange:
	                    _this.filterProducts(action.searchValue, action.inStockOnly);
	                    _this.emitChange();
	                    break;
	            }
	        });
	    };
	    return SearchStore;
	}(BaseStore_1.BaseStore));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = new SearchStore();


/***/ }
]);