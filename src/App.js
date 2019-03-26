import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Home, About , Work, ConcatUs } from './pages'
import Movie from "./Components/Movie";

class App extends Component {

  state = {
       
  }

  componentDidMount(){
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map( (movie ) => {
      
      return <Movie 
        title={movie.title_english} 
        poster={movie.medium_cover_image} 
        key={movie.id} 
        genres={movie.genres} 
        synopsis={movie.synopsis}
        date_uploaded={movie.date_uploaded}
        />  ;
    })
    return movies;
  }

   _getMovies = async () =>{
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating%27')
    .then( response => response.json())
    .then(json =>   json.data.movies)
    .catch(err => console.log(err));
    
  }


  render() {
    return (
      <>
      <Header/>
      
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
      <Route path="/Concatus" component={ConcatUs} />
      <Footer/>
      </>
    );
  }
}

export default App;
