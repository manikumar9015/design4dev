import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import study from '../../assets/study.png' // Replace with your plant image path
import Card from '../ui/Card';

const Intro = () => {
  return (
    <Card >
      <div className="flex flex-col items-center w-full lg:flex-row lg:justify-center lg:items-center py-16"> {/* Added py-16 to create some padding */}
      {/* Plant Image Section */}
      <img
        src={study}
        className="w-40 h-40 sm:w-60 sm:h-60 lg:w-96 lg:h-96 xl:w-[30rem] xl:h-[30rem] cursor-pointer mb-6 lg:mb-0 lg:mr-10 rounded-lg" // Added rounded-lg class
        alt="Virtual Plant"
      />
      {/* Text and Buttons Section */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2">
        <h1 className="text-white text-3xl sm:text-4xl font-bold"><span className='font-sans' style={{ background: 'linear-gradient(to bottom right, rgb(236, 72, 153), rgb(251, 146, 60))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',}}>S</span>tudy<span style={{ background: 'linear-gradient(to bottom right, rgb(236, 72, 153), rgb(251, 146, 60))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>T</span>gether</h1>
        <br />
        <TypeAnimation
          sequence={[
            'Focus, Grow, and Succeed',
            1000,
            'Connect with Study Partners',
            1000,
            'Stay Productive, Stay Happy',
            1000,
            'Track Your Progress!',
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '1.5em', display: 'inline-block', background: 'linear-gradient(to bottom right, rgb(236, 72, 153), rgb(251, 146, 60))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',color: 'transparent'}}
          repeat={Infinity}
        />
        <p className="text-gray-400 text-sm sm:text-lg my-2 lg:text-lg">
          Your virtual study buddy for focused sessions!
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col items-center lg:flex-row">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-teal-200 font-medium rounded-full text-sm sm:text-lg px-4 py-2 sm:px-5 sm:py-2.5 mb-4 lg:mb-0 lg:mr-4 "
          >
            Start Study Session
          </button>
          
          <button
            type="button"
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-teal-200 font-medium rounded-full text-sm sm:text-lg px-4 py-2 sm:px-5 sm:py-2.5 mb-4 lg:mb-0 lg:mr-4"
          >
            Resources
          </button>
        </div>
      </div>
    </div>
    </Card>
  );
};

export default Intro;
