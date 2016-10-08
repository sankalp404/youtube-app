import React, { Component } from 'react';
// The curly braces on top just mean that
// const Component = React.Component
// i.e. its saying pull out property component from react and
// assign it to Component. Syntacting sugar..ES6.

class SearchBar extends Component{
  constructor(props){
    super(props);
    // functional components dont have state
    this.state = { term: ''};
  }

/*  ES5, this would be render: function(){}
  Always define the render method for a class and return some JSX
  render(){
    return <input onChange={this.onInputChange} />;
  }
  onInputChange(event) {
    console.log(event.target.value);
  }
*/
  render(){
    // return <input onChange={event => console.log(event.target.value)} />
    // Could yes this: Value of the input: { this.state.term } to show input

    return (
      <div className="search-bar">
        <input
          value = { this.state.term }
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term){
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
