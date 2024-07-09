import Skills from './Skills'
import Photo from '../../assets/Photo.jpg'

const About = () => {
  return (
    // <div className='md:px-[10%] lg:px-0 lg:pl-[40%] '>
    <div id="About" className='md:px-[10%] lg:px-0 lg:w-[60%] lg:pt-16 float-right'>
      <div className='inline-flex flex-col-reverse lg:flex-row items-center lg:items-start mb-8 lg:mb-5'>
        <div className='text-left'>
          <p>
            Etiam turpis est, sollicitudin ultricies quam ac, fringilla blandit  massa. Nunc nunc felis, ultrices eget mi non, viverra suscipit nisi.  Phasellus eget lacinia est, vel tempor augue. Mauris id ante a massa  hendrerit euismod non in metus. 
          </p>
          <br></br>
          <p>
            Integer varius sem ut ex hendrerit, quis  accumsan massa pellentesque. Nam at sagittis lectus, vitae egestas  lacus. Nunc molestie ut erat semper rutrum. Cras congue est in ante  iaculis, a tincidunt elit varius. Aenean volutpat sem non ex facilisis,  non sagittis justo porta. Nullam nec tincidunt tellus. Duis in efficitur  massa. Aenean rhoncus
          </p>
        </div>

        <img src={Photo} alt="" className='max-w-[18%] lg:max-w-[25%] mb-4 lg:ml-6 ' />
      </div>

      <Skills></Skills>
    </div>
  )
}

export default About