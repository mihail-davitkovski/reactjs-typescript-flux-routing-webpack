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
	var react_router_1 = __webpack_require__(4);
	var CommentBox_1 = __webpack_require__(5);
	var FilterableProductTable_1 = __webpack_require__(19);
	ReactDom.render((React.createElement(react_router_1.Router, {history: react_router_1.browserHistory}, React.createElement(react_router_1.Route, {path: "/", component: FilterableProductTable_1.FilterableProductTable}), React.createElement(react_router_1.Route, {path: "search", component: FilterableProductTable_1.FilterableProductTable}), React.createElement(react_router_1.Route, {path: "comments", component: CommentBox_1.CommentBox}))), document.getElementById('content'));


/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	module.exports.Dispatcher = __webpack_require__(12);


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Dispatcher
	 * 
	 * @preventMunge
	 */

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var invariant = __webpack_require__(14);

	var _prefix = 'ID_';

	/**
	 * Dispatcher is used to broadcast payloads to registered callbacks. This is
	 * different from generic pub-sub systems in two ways:
	 *
	 *   1) Callbacks are not subscribed to particular events. Every payload is
	 *      dispatched to every registered callback.
	 *   2) Callbacks can be deferred in whole or part until other callbacks have
	 *      been executed.
	 *
	 * For example, consider this hypothetical flight destination form, which
	 * selects a default city when a country is selected:
	 *
	 *   var flightDispatcher = new Dispatcher();
	 *
	 *   // Keeps track of which country is selected
	 *   var CountryStore = {country: null};
	 *
	 *   // Keeps track of which city is selected
	 *   var CityStore = {city: null};
	 *
	 *   // Keeps track of the base flight price of the selected city
	 *   var FlightPriceStore = {price: null}
	 *
	 * When a user changes the selected city, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'city-update',
	 *     selectedCity: 'paris'
	 *   });
	 *
	 * This payload is digested by `CityStore`:
	 *
	 *   flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'city-update') {
	 *       CityStore.city = payload.selectedCity;
	 *     }
	 *   });
	 *
	 * When the user selects a country, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'country-update',
	 *     selectedCountry: 'australia'
	 *   });
	 *
	 * This payload is digested by both stores:
	 *
	 *   CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       CountryStore.country = payload.selectedCountry;
	 *     }
	 *   });
	 *
	 * When the callback to update `CountryStore` is registered, we save a reference
	 * to the returned token. Using this token with `waitFor()`, we can guarantee
	 * that `CountryStore` is updated before the callback that updates `CityStore`
	 * needs to query its data.
	 *
	 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       // `CountryStore.country` may not be updated.
	 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
	 *       // `CountryStore.country` is now guaranteed to be updated.
	 *
	 *       // Select the default city for the new country
	 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
	 *     }
	 *   });
	 *
	 * The usage of `waitFor()` can be chained, for example:
	 *
	 *   FlightPriceStore.dispatchToken =
	 *     flightDispatcher.register(function(payload) {
	 *       switch (payload.actionType) {
	 *         case 'country-update':
	 *         case 'city-update':
	 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
	 *           FlightPriceStore.price =
	 *             getFlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *     }
	 *   });
	 *
	 * The `country-update` payload will be guaranteed to invoke the stores'
	 * registered callbacks in order: `CountryStore`, `CityStore`, then
	 * `FlightPriceStore`.
	 */

	var Dispatcher = (function () {
	  function Dispatcher() {
	    _classCallCheck(this, Dispatcher);

	    this._callbacks = {};
	    this._isDispatching = false;
	    this._isHandled = {};
	    this._isPending = {};
	    this._lastID = 1;
	  }

	  /**
	   * Registers a callback to be invoked with every dispatched payload. Returns
	   * a token that can be used with `waitFor()`.
	   */

	  Dispatcher.prototype.register = function register(callback) {
	    var id = _prefix + this._lastID++;
	    this._callbacks[id] = callback;
	    return id;
	  };

	  /**
	   * Removes a callback based on its token.
	   */

	  Dispatcher.prototype.unregister = function unregister(id) {
	    !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	    delete this._callbacks[id];
	  };

	  /**
	   * Waits for the callbacks specified to be invoked before continuing execution
	   * of the current callback. This method should only be used by a callback in
	   * response to a dispatched payload.
	   */

	  Dispatcher.prototype.waitFor = function waitFor(ids) {
	    !this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Must be invoked while dispatching.') : invariant(false) : undefined;
	    for (var ii = 0; ii < ids.length; ii++) {
	      var id = ids[ii];
	      if (this._isPending[id]) {
	        !this._isHandled[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id) : invariant(false) : undefined;
	        continue;
	      }
	      !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	      this._invokeCallback(id);
	    }
	  };

	  /**
	   * Dispatches a payload to all registered callbacks.
	   */

	  Dispatcher.prototype.dispatch = function dispatch(payload) {
	    !!this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.') : invariant(false) : undefined;
	    this._startDispatching(payload);
	    try {
	      for (var id in this._callbacks) {
	        if (this._isPending[id]) {
	          continue;
	        }
	        this._invokeCallback(id);
	      }
	    } finally {
	      this._stopDispatching();
	    }
	  };

	  /**
	   * Is this Dispatcher currently dispatching.
	   */

	  Dispatcher.prototype.isDispatching = function isDispatching() {
	    return this._isDispatching;
	  };

	  /**
	   * Call the callback stored with the given id. Also do some internal
	   * bookkeeping.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._invokeCallback = function _invokeCallback(id) {
	    this._isPending[id] = true;
	    this._callbacks[id](this._pendingPayload);
	    this._isHandled[id] = true;
	  };

	  /**
	   * Set up bookkeeping needed when dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._startDispatching = function _startDispatching(payload) {
	    for (var id in this._callbacks) {
	      this._isPending[id] = false;
	      this._isHandled[id] = false;
	    }
	    this._pendingPayload = payload;
	    this._isDispatching = true;
	  };

	  /**
	   * Clear bookkeeping used for dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._stopDispatching = function _stopDispatching() {
	    delete this._pendingPayload;
	    this._isDispatching = false;
	  };

	  return Dispatcher;
	})();

	module.exports = Dispatcher;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },
/* 13 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */

	"use strict";

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function (condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var has = Object.prototype.hasOwnProperty;

	//
	// We store our EE objects in a plain object whose properties are event names.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// `~` to make sure that the built-in object properties are not overridden or
	// used as an attack vector.
	// We also assume that `Object.create(null)` is available when the event name
	// is an ES6 Symbol.
	//
	var prefix = typeof Object.create !== 'function' ? '~' : false;

	/**
	 * Representation of a single EventEmitter function.
	 *
	 * @param {Function} fn Event handler to be called.
	 * @param {Mixed} context Context for function execution.
	 * @param {Boolean} [once=false] Only emit once
	 * @api private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}

	/**
	 * Minimal EventEmitter interface that is molded against the Node.js
	 * EventEmitter interface.
	 *
	 * @constructor
	 * @api public
	 */
	function EventEmitter() { /* Nothing to set */ }

	/**
	 * Hold the assigned EventEmitters by name.
	 *
	 * @type {Object}
	 * @private
	 */
	EventEmitter.prototype._events = undefined;

	/**
	 * Return an array listing the events for which the emitter has registered
	 * listeners.
	 *
	 * @returns {Array}
	 * @api public
	 */
	EventEmitter.prototype.eventNames = function eventNames() {
	  var events = this._events
	    , names = []
	    , name;

	  if (!events) return names;

	  for (name in events) {
	    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
	  }

	  if (Object.getOwnPropertySymbols) {
	    return names.concat(Object.getOwnPropertySymbols(events));
	  }

	  return names;
	};

	/**
	 * Return a list of assigned event listeners.
	 *
	 * @param {String} event The events that should be listed.
	 * @param {Boolean} exists We only need to know if there are listeners.
	 * @returns {Array|Boolean}
	 * @api public
	 */
	EventEmitter.prototype.listeners = function listeners(event, exists) {
	  var evt = prefix ? prefix + event : event
	    , available = this._events && this._events[evt];

	  if (exists) return !!available;
	  if (!available) return [];
	  if (available.fn) return [available.fn];

	  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
	    ee[i] = available[i].fn;
	  }

	  return ee;
	};

	/**
	 * Emit an event to all registered event listeners.
	 *
	 * @param {String} event The name of the event.
	 * @returns {Boolean} Indication if we've emitted an event.
	 * @api public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events || !this._events[evt]) return false;

	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;

	  if ('function' === typeof listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }

	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }

	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;

	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }

	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }

	  return true;
	};

	/**
	 * Register a new EventListener for the given event.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} [context=this] The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  var listener = new EE(fn, context || this)
	    , evt = prefix ? prefix + event : event;

	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }

	  return this;
	};

	/**
	 * Add an EventListener that's only called once.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} [context=this] The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  var listener = new EE(fn, context || this, true)
	    , evt = prefix ? prefix + event : event;

	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }

	  return this;
	};

	/**
	 * Remove event listeners.
	 *
	 * @param {String} event The event we want to remove.
	 * @param {Function} fn The listener that we need to find.
	 * @param {Mixed} context Only remove listeners matching this context.
	 * @param {Boolean} once Only remove once listeners.
	 * @api public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events || !this._events[evt]) return this;

	  var listeners = this._events[evt]
	    , events = [];

	  if (fn) {
	    if (listeners.fn) {
	      if (
	           listeners.fn !== fn
	        || (once && !listeners.once)
	        || (context && listeners.context !== context)
	      ) {
	        events.push(listeners);
	      }
	    } else {
	      for (var i = 0, length = listeners.length; i < length; i++) {
	        if (
	             listeners[i].fn !== fn
	          || (once && !listeners[i].once)
	          || (context && listeners[i].context !== context)
	        ) {
	          events.push(listeners[i]);
	        }
	      }
	    }
	  }

	  //
	  // Reset the array, or remove it completely if we have no more listeners.
	  //
	  if (events.length) {
	    this._events[evt] = events.length === 1 ? events[0] : events;
	  } else {
	    delete this._events[evt];
	  }

	  return this;
	};

	/**
	 * Remove all listeners or only the listeners for the specified event.
	 *
	 * @param {String} event The event want to remove all listeners for.
	 * @api public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  if (!this._events) return this;

	  if (event) delete this._events[prefix ? prefix + event : event];
	  else this._events = prefix ? {} : Object.create(null);

	  return this;
	};

	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	//
	// This function doesn't apply anymore.
	//
	EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	  return this;
	};

	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;

	//
	// Expose the module.
	//
	if (true) {
	  module.exports = EventEmitter;
	}


/***/ },
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