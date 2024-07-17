import Skills from './Skills';
import Photo from '../../assets/Photo.jpg';

const About = () => {
  return (
    <div id="About" className='transition ease-in-out md:px-[10%] lg:px-0 lg:w-[60%] lg:mt-12 lg:pt-4 float-right hover:blur-effect'>
      <div className='p-8 rounded-md'>
        <div className='flex flex-col-reverse lg:flex-row items-center lg:items-start mb-8 lg:mb-5'>
          <div className='text-left lg:w-3/5'>
            {/* <h2 className='text-2xl font-bold mb-4'>About Me</h2> */}
            <p className='mb-4'>
              Etiam turpis est, sollicitudin ultricies quam ac, fringilla blandit massa. Nunc nunc felis, ultrices eget mi non, viverra suscipit nisi. Phasellus eget lacinia est, vel tempor augue. Mauris id ante a massa hendrerit euismod non in metus.
            </p>
            <p>
              Integer varius sem ut ex hendrerit, quis accumsan massa pellentesque. Nam at sagittis lectus, vitae egestas lacus. Nunc molestie ut erat semper rutrum. Cras congue est in ante iaculis, a tincidunt elit varius. Aenean volutpat sem non ex facilisis, non sagittis justo porta. Nullam nec tincidunt tellus. Duis in efficitur massa. Aenean rhoncus.
            </p>
          </div>
          <img src={Photo} alt="Profile" className='max-w-[30%] lg:max-w-[25%] mb-4 lg:mb-0 lg:ml-6 shadow-lg' />
        </div>

        <Skills />
      </div>
    </div>
  );
};

export default About;
