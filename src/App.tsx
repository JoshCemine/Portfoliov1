import './App.css'
import Navbar from './components/Navbar'
import About from './components/sections/About'
import Landing from './components/sections/Landing'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'

function App() {

  return (
    <div className='text-[#295356] bg-[#f7f8f9]'> 
  
      {/* <Landing></Landing> */}
      <Navbar></Navbar>      

      <About></About>
      <Experience></Experience>
 
      <Projects></Projects>

    </div>   
  )
}

export default App
