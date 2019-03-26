import React from 'react';
import GoogleMap from "../Components/GoogleMap";

const ConcatUs = () => {

    const style={
        width: "1280px",
        margin: "0 auto"
    }

    return (
        <div className="Map" >
            <GoogleMap style={style}/>
        </div>
    );
};

export default ConcatUs;