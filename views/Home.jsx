const React = require('react');

const Home = () => {
    return (
      <div>
        <h1>Welcome</h1>
        <ul>
          <li>
            <a href="./list">List of countries</a>
          </li>
          <li>
            <a href="./services">Services</a>
          </li>
          <li>
            <a href="./about">About</a>
          </li>
          <li>
            <a href="./career">Careers</a>
          </li>
          <li>
            <a href="./contact">Contact</a>
          </li>
        </ul>
      </div>
    );
}

module.exports = Home;