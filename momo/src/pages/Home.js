import React, { Component } from 'react';
import SearchBar from 'components/SearchBar';
import { IoPaw } from 'react-icons/io5';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_query: null
    };
  }

  setSearchQuery = (data) => {
    this.setState({ search_query: data })
  }

  render() {
    return (
      <div>
        <div style={{fontSize:'1.5rem', fontWeight:'bold', margin:'1rem'}}><IoPaw style={{marginLeft:'0.5rem'}}/> Momo's Food Journey</div>
        <SearchBar
          onCreate = {this.setSearchQuery}
        ></SearchBar>
      </div>
    );
  }
}

export default Home;