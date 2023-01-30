import React from 'react';
import hero from '../../../assets/hero.svg'
const Hero = () => {
    return ( 
       <div className=' width-full h-[90vh] bg-green flex-col flex-col-reverse  lg:flex lg:flex-row-reverse lg:justify-center lg:align-center'>

         <img src={hero} alt="home picture" className='w-[250px] mx-auto lg:w-[400px]' />
          <div className=' flex flex-col text-slate mt-10 lg:flex lg:justify-center lg:w-1/2'>
              <h1 className='max-w-lg text-3xl font-bold mx-auto mb-2'>Find a Doctor and book online</h1>
              <p className='max-w-lg mx-auto text-center mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam adipisci corrupti illum minima?</p>
              <label class="relative block mx-5">
             <input
                class=" w-full bg-white placeholder:font-italitc border border-green-400 drop-shadow-md rounded-md py-2 pl-3 pr-10 focus:outline-none text-green "
                placeholder="search here" type="text" />

            <span class="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg class="h-5 w-5 fill-green" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30"
                    height="30" viewBox="0 0 30 30">
                    <path
                        d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
                    </path>
                </svg>
            </span>
        </label>
          </div>
      
       </div>
     );
}
 
export default Hero;