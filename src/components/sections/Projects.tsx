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
        "Demonstrated collaborative skills by working with the entire batch.",
        "Contributed in integrating a shortest path algorithm."
      ]
    },
    {
      title: "College of Science Automatic Request System",
      duration: "December 2023",
      role: "Backend/DevOps Developer",
      link: "https://github.com/johnochea/croma",
      pic: ars,
      description: [
        "Collaborated with a team of five to design and implement a web application for students to request their student forms from the college secretary",
        "Utilized a tech stack consisting of React, Express, SQL, and PHP"
      ]
    },
    {
      title: "CROC vs PNG",
      duration: "November 2023",
      role: "Backend Developer",
      link: "https://github.com/naixsu/crocpng",
      pic: croc,
      description: [
        "In the game, the players battle and defend themselves from waves of Phantom Naz Ghouls (PNGs) and prevent them from killing the players and reaching their goal. The enemy's goal is to destroy the Central Resistance against Otherworldly Creatures (CROC) facility. The game ends either when the facility is destroyed by the enemy, or the CROCs emerge victorious and successfully fend off the waves of PNGs."
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