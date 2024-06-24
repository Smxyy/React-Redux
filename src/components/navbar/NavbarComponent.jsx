import React from 'react';
import { useSelector } from 'react-redux';
import { selectValue } from '../../redux/features/counterSlice';
import { Button, Navbar } from "flowbite-react";
import { Link } from 'react-router-dom';


export default function NavbarComponent() {
    const countValue = useSelector(selectValue);
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <img src="https://flowbite-react.com/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/about-us">About Us</Navbar.Link>
        <Navbar.Link as={Link} to="/products">Product</Navbar.Link>
        <Navbar.Link as={Link} to="/contact-us">Contact</Navbar.Link>
        <Navbar.Link>{countValue}</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
