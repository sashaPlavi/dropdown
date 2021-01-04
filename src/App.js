import react, { useState } from 'react';

import { ReactComponent as MailIcon } from './icons/mail.svg';
import { ReactComponent as MainIcon } from './icons/main.svg';
import { ReactComponent as RunIcon } from './icons/run.svg';

function App() {
  return (
    <Navbar>
      <NavItem icon={<MailIcon />} />
      <NavItem icon={<MainIcon />} />
      <NavItem icon={<RunIcon />} />

      <NavItem icon=":)">
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
}

function DropdownMenu(props) {
  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div class="dropdown">
      <DropdownItem>My Profil</DropdownItem>
      <DropdownItem
        leftIcon={<MainIcon />}
        rightIcon={<RunIcon />}
      ></DropdownItem>
    </div>
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
  const [open, setOpen] = useState(false);
  return (
    <li className="navbar-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}

export default App;
