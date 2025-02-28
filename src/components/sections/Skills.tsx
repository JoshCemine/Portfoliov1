import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../../App.css'; // Import the CSS for keyframes and additional styles

const skills = [
  { name: 'Python', percentage: 80 },
  { name: 'JS', percentage: 80 },
  { name: 'Lua', percentage: 60 },
  { name: 'C++', percentage: 60 },
  { name: 'PHP', percentage: 70 }
];

const words = ["HTML", "CSS", "JavaScript", "SSG", "webdev", "animation"];

const Skills = () => {
  return (
    <div className='p-8'>
      <div className='flex flex-col items-center mb-8'>
        <div className='grid grid-cols-5 gap-6 w-full'>
          {skills.map((skill, index) => (
            <div key={index} className='flex flex-col items-center text-center'>
                <CircularProgressbarWithChildren
                    value={skill.percentage}
                    circleRatio={0.75}
                    styles={buildStyles({
                        rotation: 1 / 2 + 1 / 8,
                        trailColor: "#eee"
                    })}
                >
                    <strong>{skill.name}</strong> {skill.percentage}%
                </CircularProgressbarWithChildren>
            </div>
          ))}
        </div>
      </div>

      <div className='lg:text-sm w-full max-w-[600px] inline-flex flex-nowrap overflow-x-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
            <ul className='flex items-center justify-center md:justify-start animate-infinite-scroll'>
                {words.map((word) =>(
                    <div className='bg-orange-700 rounded-2xl bg-opacity-10 mx-2' >
                        <li className='px-4 py-1 whitespace-nowrap'>{word}</li>
                    </div>
                    
                ))}
            </ul>
            <ul className='flex items-center justify-center md:justify-start animate-infinite-scroll' aria-hidden="true">
                {words.map((word) =>(
                    <div className='bg-orange-700 rounded-2xl bg-opacity-10 mx-2' >
                        <li className='px-4 py-1 whitespace-nowrap'>{word}</li>
                    </div>
                    
                ))}
            </ul>
        </div>
    </div>
  );
};

export default Skills;
