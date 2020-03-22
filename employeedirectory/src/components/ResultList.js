import React from "react";

function ResultList(props) {
    const users = props.results;
    console.log(users);
    Object.keys(users).map(function(keyName,keyIndex){
        console.log(keyName);
        console.log(keyIndex);
    });
    let firstName = [];
    for(var i = 0; i < 11;){
        firstName.push(users[i].names.first)
        i++;
    }
    console.log(firstName);
    return (
        <ul className="list-group search-results">
           {

           }
        </ul>
    );
}

export default ResultList;
