import React from 'react';

const About = () => {

    const About_style ={
        width: '1280px',
        heigth: '100%',
        margin: '0 auto',
        float: 'center'
    }

    const margin = {
        marginLeft:'30%' ,
        color: 'grey'
    }

    const margin2 = {
        marginLeft:'38%' ,
        color: 'grey'
    }
    return (
        <div className="About_Main" style={About_style} >
            
            <img src="https://cdn.pixabay.com/photo/2016/11/25/19/03/ciack-1859048__340.jpg" style={margin} />
            <br/>
            <br/>
            <h2 style={margin2}>
                나만의 영화를 담다<br/>
                내가 좋아하는 영화를 담아 간직하세요.
            </h2> 
            
           
        </div>
    );
};

export default About;