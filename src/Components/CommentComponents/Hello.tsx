//NOTE: this file is not used in th application 
//I just added the reaact component life cycle methods


/*import * as React from 'react';

var SetIntervalMixin = {
  componentWillMount: function() {
    this.intervals = [];
  },
  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount: function() {
    this.intervals.forEach(clearInterval);
  }
};



module.exports = React.createClass({
    propTypes: {},
    mixins : [SetIntervalMixin], // Use the mixin


	################Mounting methods#############################
	//invoked before a component is mounted(Mounting: A component is being inserted into the DOM). 
	//Stateful components should implement 
	//this and return the initial state data.
    getInitialState: function() {
		return {
			seconds: 0
		};
	},
    getDefaultProps: function() {},

	//is invoked immediately before mounting occurs.
    componentWillMount : function() {},

	//componentDidMount is a method called automatically by React after a component is rendered for the first time
	//Initialization that requires DOM nodes should go here.
	componentDidMount:function(){
	} 
	################Mounting methods#############################
	
	
	################Updating methods#############################
	//is invoked when a mounted component receives new props
    componentWillReceiveProps: function(object nextProps) {},
	################Updating methods#############################
    componentWillUnmount : function() {},

	 //Custom methods usually go with underscores to make it different from 
	 //life cycle methods
    _parseData : function() {
	    //setState is used for state update
		this.setState({seconds: this.state.seconds + 1});
	},
    _onSelect : function() {},

    displayName: 'HelloReact',
    render: function(){
        return <div>Hello Reac1</div>    
    }
})*/