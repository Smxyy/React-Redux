import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectValue } from '../../redux/features/counter/counterSlice';
import { Button, Navbar } from "flowbite-react";
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa6";
import { selectTotalItems } from '../../redux/features/cart/cartSlice';

export default function NavbarComponent() {
  const countValue = useSelector(selectValue);
  const location = useLocation();
  const pathname = location?.pathname;
  const totalItems = useSelector(selectTotalItems);
console.log("totalItems", totalItems)
  const [navbarList, setNavbarList] = useState([
  { title: "Home", path: "/"},
  { title: "Count", path: "/count"}
]);
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <img src="https://flowbite-react.com/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <div className="flex items-center gap-5 md:order-2">
        <Link to="/cart" className='relative'>
        <FaCartPlus />
        <p className='absolute -top-5 -right-2 text-cyan-500 font-semibold'>{totalItems}</p>
        </Link>
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/count">Count</Navbar.Link>
        <Navbar.Link as={Link} to="/products">Product</Navbar.Link>
        <Navbar.Link as={Link} to="/about-us">About Us</Navbar.Link>
        <Navbar.Link as={Link} to="/contact-us">Contact Us</Navbar.Link>
        <Navbar.Link>{countValue}</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
