const React = require('react');

const Show = ({id, countries}) => {
    if(countries[id]){
    return (
      <div>
        <h1>{countries[id].name}</h1>
        <h3>Capital: {countries[id].capital}</h3>
        <h3>Continent: {countries[id].continent}</h3>
        <a href="/list">Back to the list</a>
      </div>
    )} else {
        return (
          <div>
            <h1>Error No Country in our Data with that ID</h1>
            <a href="/">Home Page</a>
          </div>
        );
    }
}

module.exports = Show