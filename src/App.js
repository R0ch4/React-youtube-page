import _ from 'lodash';
import React, { Component } from 'react';
import './css/bootstrap.min.css';
import './css/style.css';
import './fonts/glyphicons-halflings-regular.svg';
import YTSearch from 'youtube-api-search';
import SearchBar from './component/SearchBar';
import VideoDetail from './component/VideoDetail';
import VideoList from './component/VideoList';
const API_KEY= 'AIzaSyCWgRDkQqS9wcc8SReAI24_yNyxgKch5ZE';


class App extends Component {

constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo:null
    };
  
  this.videoSearch('mindigitall');    
}

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos)=>{
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }


  render() {
    
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div id="layout">
      <div className="container">
        <div>
          <SearchBar onSearchTermChange={videoSearch}/>
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos}/>
        </div>
      </div>
      </div>
    );

  }
}

export default App;
