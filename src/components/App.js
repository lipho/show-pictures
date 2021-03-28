import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import unsplash from '../api/unsplash'

class App extends React.Component {
  state = {
    images: [],
  }

  async onSearchSubmit(term) {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term,
      },
    })

    this.setState({images: response.data.results});
  }

  render() {
    return (
      <div className='ui container' style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit.bind(this)}/>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}


export default App;
