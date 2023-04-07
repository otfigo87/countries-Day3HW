const React = require('react');

const List = ({countries}) => {
    return (
      <div>
        <h1>List of countries</h1>
        <button>
          <a href="/list/add">Add a New Country</a>
        </button>
        <button>
          <a href="/">Menu</a>
        </button>
        {countries.map((country, i) => (
          <div key={i}>
            <h2>{country.name}</h2>
            <a href={`/list/${i}`}>Details</a> <br />
          </div>
        ))}
      </div>
    );
}

module.exports = List;