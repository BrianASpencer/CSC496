import React from 'react';

const Recipe = ({title, imageURL, ingredients}) => {
    //console.log("imageURL"+imageURL);
    console.log(ingredients);
    return (
        <div>
            <h1>{title}</h1>
            <p>{ingredients}</p>
            <img src="http://gtest.dev.wwbtc.com/sites/" alt=""/>
        </div>
    );
}

export default Recipe;