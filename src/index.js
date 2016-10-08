// Go get react and give me access.
// React is divulging into two different libraries.
// This react is able to render the component.
// The functionality to actually put it on the DOM is a different library

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
// used npm install --save youtube-api-search

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = 'AIzaSyCnACqkQA9hcOdbBfmPbwqCjpVMNsSOdPU';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
     };
     this.videoSearch('Snoop Dogg');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term:term}, (videos) =>{
      this.setState({
        videos:videos, // Instead of videos:videos
        selectedVideo:videos[0]
      });
    });
  }

  render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={ videoSearch }/>
        <VideoDetail video={ this.state.selectedVideo }/>
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({ selectedVideo })}
          videos={ this.state.videos }/>
      </div>
    );
  }
}

// Create a new component. This component should produce some HTML
// This is a functional component

// const App =  () => {    // Using new ES6 syntac instead of function(){}
//     return (
//       <div>
//         <SearchBar />
//       </div>
//     );
// };

// Take this component(generated HTML) and put it in the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));
