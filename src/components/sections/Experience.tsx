const workExperience = [
    {
      company: "GWION Solutions Inc",
      position: "Intern",
      duration: "March 2020 - June 2020",
      responsibilities: [
        "Participated in team collaborations to understand customer needs to design a customized website tailored to meet specific customer needs",
        "Gained experience on skills to improve digital brand visibility and customer engagement."
      ]
    },
    {
      company: "TaskUS",
      position: "Customer Service Representative",
      duration: "August 2021 - March 2022",
      responsibilities: [
        "Identified customer needs, learned, and applied techniques to boost customer satisfaction",
        "Troubleshot complex customer use issues and resolved application bugs.",
        "Shared knowledge and helped lead team members into being one of the top performing teams"
      ]
    },
    {
      company: "Old St. Labs",
      position: "Intern",
      duration: "July 2023 - September 2023",
      responsibilities: [
        "Learned and improved skills in technologies such as NX Workspace, NextJS, TailwindCSS, and Amazon DynamoDB",
        "Developed proficiency in developing maintainable and readable code"
      ]
    }
  ];
  

const Experience = () => {
  return (
    <div id='Experience' className='lg:w-[60%] float-right text-left pt-40'>

      <div className='border-black border-l-2'>
        {workExperience.map((exp, index) => (
            <div key={index} className='transition ease-in-out hover:blur-effect grid grid-cols-4 py-4 pl-6 container-card bg-box'>
                <span className='col-span-1 text-sm'> {exp.duration} </span>

                <div className='col-span-3 ml-8'>
                  <span className='font-bold card-title'> {exp.company} · {exp.position}</span>                

                  <div className=''>
                    {exp.responsibilities.map((res, index2) => (
                        <p className="card-description" key={index2}> {res} </p>
                    ))}  
                  </div>
                </div>
                
            </div>            
        ))}
      </div>     
    </div>
  )
}

export default Experience