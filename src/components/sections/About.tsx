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
              Hi there! I'm <span className='font-bold'>Josh Cemine</span>, a graduate of the University of the Philippines - Cebu. I've been coding for about 5 years now and I have to say I can't get enough of it. As cliche as it sounds, it's a <span className='font-bold'>passion</span> for me.
            </p>
            <p>
              I've had the chance work with some amazing people, and going forward, I hope to work with even more amazing people. As someone new to the industry, I'm looking forward to the chance to grow even more. So go on and <span className='font-bold'>scroll down</span> to come and know me better!
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
