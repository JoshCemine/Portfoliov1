import croc from '../../assets/croc.png';
import ars from '../../assets/ars.png';
import ceboom from '../../assets/ceboom.png';

const projects = [
    {
      title: "Project Ceboom",
      duration: "January 2023",
      role: "Backend/DevOps Developer",
      link: "https://github.com/sansqed/project-ceboom",
      pic: ceboom,
      description: [
        "A class project made with over 30 people to find the shortest path to get to your destination within the city. My contributions were in the backend development and the deployment through DevOps operations."
      ]
    },
    {
      title: "College of Science Automatic Request System",
      duration: "December 2023",
      role: "Backend/DevOps Developer",
      link: "https://github.com/johnochea/croma",
      pic: ars,
      description: [
        "A project requested by the College Secretary to implement an all-in-one method for the admin, signatories, students and the college secretary to process form requests. My contributions were in the development of the backend APIs, and the implementation of the CI/CD, tests and deployment of the application."
      ]
    },
    {
      title: "CROC vs PNG",
      duration: "November 2023",
      role: "Backend Developer",
      link: "https://github.com/naixsu/crocpng",
      pic: croc,
      description: [
        "In the game, the players battle and defend themselves from waves of Phantom Naz Ghouls (PNGs) and prevent them from killing the players and reaching their goal. My contributions where in the synchronization of the players and the various weapon features."
      ]
    },
    {
      title: "Portfolio Website v1",
      duration: "July 2024",
      role: "Fullstack Developer",
      link: "https://github.com/JoshCemine/Portfoliov1",
      pic: "",
      description: [
        "My very first portfolio website. The website you're looking at right now!"
      ]
    }
  ];  

const Projects = () => {
  return (
    <div id='Projects' className='lg:w-[60%] float-right text-left pt-40 mb-40'>
        {projects.map((project, index) => (
          <a href={project.link}>
            <div className='transition ease-in-out hover:blur-effect grid grid-cols-5 p-6' key={index}>
              <div className='col-span-2 flex items-center'>
                <img className='' src={project.pic} alt="" /> 
              </div>         
              
              <div className='col-span-3 ml-10'>
                <h3> {project.title} </h3>
                <h4> {project.role} </h4>

                <span> { project.duration } </span>
                <p> {project.description} </p>
              </div>
            </div>
          </a>
        ))}
    </div>
  )
}

export default Projects