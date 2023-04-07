const React = require('react');

const Add = () => {
    return (
      <form action="/list/add" method="POST">
        <label htmlFor="country">Country</label>
        <input type="text" id="country" name="name" /> <br />
        <label htmlFor="country">Capital</label>
        <input type="text" id="capital" name="capital" /> <br />
        <label htmlFor="country">Continent</label>
        <input type="text" id="continent" name="continent" /> <br />
        <input type="submit" /> <br />
        <a href="/list">Back</a>
      </form>
    );
}

module.exports = Add;