import React from 'react';
import { Link } from 'react-scroll';
import '../App.css'

function Navbar() {
  return (
    <div>
      <div className='lg:fixed lg:float-start lg:top-16 text-start px-4 py-2 w-[30%] max-w-[450px]'>
        <div>
          <h1>Josh Cemine</h1>
          <h2>Fullstack Web Developer</h2>
          <p>
            I like making things, and if you're here, you want someone to make stuff for you. Looks like we have something in common so let's set up a date to get to know each other lmao
          </p>
        </div>

        <div className='mt-4 space-y-4'>
          <nav className='flex flex-col'>
            <Link 
              to='About' 
              smooth={true} 
              spy={true}
              duration={500} 
              className='cursor-pointer' 
              activeClass='active'
              style={{ padding: '10px', color: 'black', transition: 'color 0.3s' }}
              activeStyle={{ color: 'violet', fontWeight: 'bold', padding: '0 0 0 4rem' }}
            >
              About
            </Link>
            <Link 
              to='Experience' 
              smooth={true} 
              spy={true}
              duration={500} 
              className='cursor-pointer' 
              activeClass='active'
              style={{ padding: '10px', color: 'black', transition: 'color 0.3s' }}
              activeStyle={{ color: 'violet', fontWeight: 'bold', padding: '0 0 0 4rem' }}
            >
              Experience
            </Link>
            <Link 
              to='Projects' 
              smooth={true} 
              duration={500} 
              spy={true} 
              className='cursor-pointer' 
              activeClass='active'
              style={{ padding: '10px', color: 'black', transition: 'color 0.3s' }}
              activeStyle={{ color: 'violet', fontWeight: 'bold', padding: '0 0 0 4rem' }}
            >
              Projects
            </Link>     
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
