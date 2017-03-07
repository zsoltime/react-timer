const React = require('react');
const Nav = require('Nav');

const Main = props => (
  <div>
    <div>
      <div>
        <Nav />
        {props.children}
      </div>
    </div>
  </div>
);

Main.propTypes = {
  children: React.PropTypes.node.isRequired,
};

module.exports = Main;
