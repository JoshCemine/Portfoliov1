import React from 'react'

const projects = [
    {
      title: "Project Ceboom",
      duration: "November 2022 - January 2023",
      role: "Backend/DevOps Developer",
      description: [
        "Demonstrated collaborative skills by working with the entire batch.",
        "Contributed in integrating a shortest path algorithm."
      ]
    },
    {
      title: "College of Science Automatic Request System",
      duration: "February 2023 - December 2024",
      description: [
        "Collaborated with a team of five to design and implement a web application for students to request their student forms from the college secretary",
        "Utilized a tech stack consisting of React, Express, SQL, and PHP"
      ]
    },
    {
      title: "College of Science Automatic Request System",
      duration: "February 2023 - December 2024",
      description: [
        "Collaborated with a team of five to design and implement a web application for students to request their student forms from the college secretary",
        "Utilized a tech stack consisting of React, Express, SQL, and PHP"
      ]
    }
  ];  

const Projects = () => {
  return (
    <div id='Projects' className='w-[60%] float-right text-left pt-40 mb-40'>
        {projects.map((project, index) => (
            <div className='grid grid-cols-5 [&:not(:last-child)]:border-b-2 [&:not(:last-child)]:pb-8 [&:not(:last-child)]:mb-8 border-sky-500' key={index}>
              <div className='col-span-2 bg-slate-700'>
                Img
              </div>
              <div className='col-span-3 ml-10'>
                <h3 className='font-bold'> {project.title} </h3>
                <h4 className='font-semibold'> {project.role} </h4>

                <span> { project.duration } </span>
                <p> {project.description} </p>
                <button className='mt-6'>Link</button>
              </div>
            </div>
        ))}
    </div>
  )
}

export default Projects