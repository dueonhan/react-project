import React, { Component } from 'react';
import MovieInfo from "./MovieInfo";
import "./Container.css";

class Container extends Component {
    state = {
        Movie : [
            {
                num : 1,
                title: '케로로',
                imageURL : 'http://i78.photobucket.com/albums/j96/madeleine_kuan/keroro_fry.jpg',
                makeCompany : 'lotte',
                openDate : '2018-07-13'
            },
            {   
                num : 2,
                title: '쿠루루',
                imageURL : 'https://file.namu.moe/file/421c0ae5d8850c124225518c0451b89c653c7c955d80d6ec9f70742d9c83b42b',
                makeCompany : 'lotte',
                openDate : '2018-04-13'
            },
            {
                num : 3,
                title: '기로로',
                imageURL : 'https://file.namu.moe/file/e207839b34f428eab797649e9cecfd06921a0d5847a35dfa25d038eb1694a744',
                makeCompany : 'lotte',
                openDate : '2018-12-13'
            },
            {
                num : 4,
                title: '타마마',
                imageURL : 'https://file.namu.moe/file/4cf2e89ae2973caae90bfe6f6b79d6d3c4a483ec070beed934a1e87ca3dbb0f7d42764b8ca5559cc9fa11c8c3b9db5a5',
                makeCompany : 'lotte',
                openDate : '2018-03-13'
            },
        ]

    }


    render() {

        const data  = this.state.Movie;
        const list = data.map(
            info => (<MovieInfo key={info.num} title={info.title} imgURL={info.imageURL} openDate={info.openDate}/>)
        )

        return (
            <div className="Container_main" >
                {list}
            </div>
        );
    }
}

export default Container;