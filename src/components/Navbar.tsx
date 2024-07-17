import { Link } from 'react-scroll';
import '../App.css'
import './Navbar.css'

function Navbar() {
  return (
    <div>
      <div className='lg:fixed lg:float-start lg:top-16 lg:w-[30%] lg:max-w-[450px] text-start px-4 py-2  '>
        <div className='lg:text-start text-center'>
          <h1 className='text_fade'>Josh Cemine</h1>
          <h2 className='text_fade'>Fullstack Web Developer</h2>
        </div>

        <div className='mt-16 space-y-4 w-[100%]'>
          <nav className='flex lg:flex-col lg:items-start justify-center'>
            <Link 
              to='About' 
              smooth={true} 
              spy={true}
              offset={-200}
              duration={200} 
              isDynamic={true}
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
              offset={-200}
              duration={200} 
              isDynamic={true}
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
              duration={200} 
              isDynamic={true}
              spy={true} 
              offset={-200}
              className='cursor-pointer' 
              activeClass='active'
              style={{ padding: '10px', color: 'black', transition: 'color 0.3s' }}
              activeStyle={{ color: 'violet', fontWeight: 'bold', padding: '0 0 0 4rem' }}
            >
              Projects
            </Link>     
          </nav>
        </div>

        <div className='lg:fixed lg:float-start lg:bottom-16 lg:w-[30%] lg:max-w-[450px]'>
          <ul className="flex flex-wrap lg:justify-start justify-center">
              <li className='socials-list-item'>
                  <a className="facebook lg:ml-[10px] ml-[30px]" href="#">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="100%" height="80%">
                          <path d="M279.14 288l14.22-92.66h-88.91V117.34c0-25.35 12.42-50.06 52.24-50.06h40.42V3.47S260.43 0 225.36 0c-73.22 0-121.36 44.38-121.36 125.22V195.3H22.89V288h81.11v224h100.17V288z"/>
                      </svg>
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
              </li>
              <li className='socials-list-item'>
                  <a className="twitter" href="#">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="100%" height="80%">
                          <path d="M100.28 448H7.4V149.72h92.88zm-46.44-344a53.56 53.56 0 1 1 53.56-53.56 53.55 53.55 0 0 1-53.56 53.56zm394.15 344h-92.88V302.4c0-34.76-12.5-58.52-43.65-58.52-23.8 0-38 16-44.3 31.4-2.28 5.57-2.85 13.32-2.85 21V448H174.31s1.24-258.73 0-285.28h92.88v40.45c12.33-19 34.4-46.22 83.55-46.22 61 0 106.6 39.85 106.6 125.44V448z"/>
                      </svg>
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
              </li>
              <li className='socials-list-item'>
                  <a className="github" href="#">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <svg width="200px" height="200px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                          <path fill="#24292f" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
                      </svg>
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
              </li>
          </ul>
      </div>

        
      </div>
    </div>
  );
}

export default Navbar;
