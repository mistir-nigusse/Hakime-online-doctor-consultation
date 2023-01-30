import React from 'react';
import about from '../../../assets/about.svg'
const About = () => {
    return ( 
        <div className='flex flex-col justify-center bg-green h-[70vh] mt-10 mb:flex md:flex-row md:justify-around '>
            <img src={about} alt="about-us-image" className='w-[270px] mx-auto md:mx-0 md:w-[350px]'/>
            <div className='flex flex-col justify-center items-center mt-6 text-slate'>
                <h1 className='mb-3 text-3xl'>About us</h1>
                <p className='max-w-sm text-justify md:max-w-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Rerum, quia facere. Quibusdam nobis, quisquam earum perferendis
                      aliquam autem voluptas ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, eum?
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
                <button className='mt-4 w-[100px] p-2 bg-lightgreen rounded-r text-slate hover:bg-lime hover:text-black cursor-pointer text-white md:mt-6'>Join us </button>
            </div>
        </div>
     );
}
 
export default About;

