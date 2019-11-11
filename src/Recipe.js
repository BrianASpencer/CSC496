import React from 'react';
import './Recipe.css';

const Recipe = ({title, imageURL, ingredients}) => {
    //console.log("imageURL"+imageURL);
    //console.log(imageURL);
    return (
        <div>
            <h1>{title}</h1>
            <p>{ingredients}</p>
            <img src={"http://gtest.dev.wwbtc.com/"+imageURL} alt=""/>
        </div>
    );
}

export default Recipe;
