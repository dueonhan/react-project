import React , { Component } from 'react';
import Container from "../Components/Container"
import Movie from "../Components/Movie";

class Work extends Component {


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

    render(){
        return (
            <div>
                {this.state.movies ? this._renderMovies() : 'loading'}
                
            </div>
        );
    }
    
};

export default Work;