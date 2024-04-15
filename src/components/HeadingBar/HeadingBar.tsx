import {   Nav, Navbar } from 'react-bootstrap'
import Logo from '../../assets/images/logo.png'
import "react-toastify/dist/ReactToastify.css";
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { MouseEventHandler } from 'react';
import { NAV_LIVKS } from '../../constants';
import { BiLogIn, BiUser } from 'react-icons/bi';
import { ToastContainer, toast } from 'react-toastify';

type ThmesTypes = {
  currentTheme: string;
  changeThemes: MouseEventHandler;
  LogIn: MouseEventHandler;
};

const HaedingBar = ({ currentTheme, changeThemes , LogIn }: ThmesTypes) => {
  const notify2 = () => toast.success("You Have A accout ");

  const user = false;
  return (
    <Navbar sticky="top" className="headingContainer">
      <Navbar.Brand>
        <img src={Logo} alt="logo" width={200} />
      </Navbar.Brand>
      <Navbar.Collapse className="headingList">
        <Nav>
          {NAV_LIVKS.map((nav) => (
            <Nav.Link className="headingLink" href={nav.href}>
              {nav.title}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
      <div className="icons">
        <div className="theme">
          {currentTheme === "light" ? (
            <BsMoonFill onClick={changeThemes} />
          ) : (
            <BsSunFill onClick={changeThemes} />
          )}
        </div>
        <div className="theme">
          {user ? <BiUser onClick={notify2} /> : <BiLogIn onClick={LogIn} />}
        </div>
      </div>
      <ToastContainer position="top-left" />
    </Navbar>
  );
};

export default HaedingBar;
