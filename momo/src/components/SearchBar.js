import React, { Component } from 'react';
import axios from 'axios';
import Product from '../components/Product'
import 'bootstrap/dist/css/bootstrap.min.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foodCount: 0,
      products: [],
      search: null,
      isZero: true
    };
  }

  searchSpace = (e) => {
    let keyword = e.target.value;
    this.setState({ search: keyword })
    this.props.onCreate(this.state);
  }
  
  searchFoods = async (search, page) => {
    try {
      const response = await axios.get(
        `http://rp-fe.momoproject.co:3464/api/food?query=${search}&page=${page}`
      );
      
      this.setState({ products: [] })
      this.setState({ foodCount: response.data.length })

      if (response.data.length === 0) this.setState({ isZero: true })
      else this.setState({ isZero: false })

      for (let i=0; i<this.state.foodCount; i++) {
        this.setState({ products: this.state.products.concat(response.data[i]) })
      }
    } 
    
    catch (e) {
      console.log(e);
    }
  }

  onChanged = (e, search, page) => {
    this.searchSpace(e);
    this.searchFoods(search, page);
  }

  render() {

    if (this.state.isZero !== false) {
      return (  
      <div> 
        <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
          <div class="input-group">
            <div class="input-group-prepend">
              <button id="button-addon2" type="submit" class="btn btn-link text-warning"><i class="fa fa-search"></i></button>
            </div>
            <input id="searchBar" type="search" placeholder="What're you searching for?" aria-describedby="button-addon2" class="form-control border-0 bg-light" onChange={(e) => this.onChanged(e, this.state.search, 1)}/>
          </div>
        </div>
        <div 
          style={{  width: '100vw', height: '70vh',
                    display: 'table-cell',
                    textAlign: 'center', verticalAlign: 'middle',
                    fontWeight: 'bold', fontSize: '1.2rem'}}
          >No Result</div>
      </div> 
      );
    }
    
    else {
      const items = this.state.products.map( data => {

        return (
          <div className="searchBar">
            <ul style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
              <li style={{ listStyleType: "none" }}>
                <Product
                  img = {`http://rp-fe.momoproject.co:3464${data.imageUrl}`}
                  brand = {data.brand}
                  name = {data.name}
                  id = {data.id}
                />
              </li>
            </ul>
          </div>
        );
      })

      return (
        <div>
            <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
              <div class="input-group">
                <div class="input-group-prepend">
                  <button id="button-addon2" type="submit" class="btn btn-link text-warning"><i class="fa fa-search"></i></button>
                </div>
                <input id="searchBar" type="search" placeholder="What're you searching for?" aria-describedby="button-addon2" class="form-control border-0 bg-light" onChange={(e) => this.onChanged(e, this.state.search, 1)}/>
              </div>
            </div>
          {items}
        </div>
      );
    }
  }
}

export default SearchBar;