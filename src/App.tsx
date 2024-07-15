import './App.css'
import Navbar from './components/Navbar'
import About from './components/sections/About'
// import Landing from './components/sections/Landing'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'



function App() {

  return (
    
        <div className='w-[100%] h-[100%] app-container'>     
          <div className='w-[1080px] fixed color-div'></div>
          <div className='w-[1080px] fixed color-div'></div>
          <Navbar />
          <About />
          <Experience />
          <Projects />
    
        
        </div>   
    
     
  )
}

export default App
