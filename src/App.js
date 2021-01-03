import react from 'react';

function App() {
  return (
    <Navbar>
      <NavItem icon=":)" />
      <NavItem icon=":)" />
      <NavItem icon=":)" />
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  return (
    <li className="navbar-item">
      <a href="#" className="navbar-button">
        {props.icon}
      </a>
    </li>
  );
}

export default App;
