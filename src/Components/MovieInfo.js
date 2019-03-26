import React, { Component } from 'react';
import "./MovieInfo.css";

class MovieInfo extends Component {
    render() {
        return (
            <div className="Movie_Container" >
                <p class="Movie_img"><img src={this.props.imgURL} width="250" height="290" /></p>
                <p class="Movie_title">{this.props.title}</p>
                <p class="Movie_year">{this.props.openDate}</p>
            </div>
        );
    }
}

export default MovieInfo;