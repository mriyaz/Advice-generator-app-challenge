import React, { useState, useEffect } from 'react';
import dividerMobile from './images/pattern-divider-mobile.svg';
import dividerDesktop from './images/pattern-divider-desktop.svg';
import iconDice from './images/icon-dice.svg';
import axios from 'axios';
import './App.css';

interface Advice {
  id: number,
  advice: string
}

function App() {
  const [advice, setAdvice] = useState<Advice | null>(null)

  const fetchAdvice = async () => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      setAdvice(response.data.slip);
    }
    catch (error) {
      console.error();
    }
  }

  useEffect(() => {
    fetchAdvice();
  }, [])


  return (

    <div className='container mx-auto h-screen px-4 flex flex-col justify-center items-center bg-black'>
      <div className="mx-5 bg-custom-dark-blue py-24 md:w-[90%] md:h-[90%] flex flex-col justify-center items-center">
        <div className="mx-5 bg-custom-dark-grayish-blue text-center flex flex-col justify-center items-center gap-5 p-5
         md:w-[40%] rounded-xl md:px-10 md:pt-10 ">

          {advice ? (
            <>

              <p className='text-custom-neon-green text-xs uppercase tracking-widest'>ADVICE #{advice?.id}</p>

              <h2 className='text-xl md:text-2xl md:font-semibold text-custom-light-cyan'>"{advice?.advice}"</h2>

              <picture>
                <source media='{max-width:767px}' srcSet={dividerMobile} />
                <source media='{min-width:768px}' srcSet={dividerDesktop} />
                <img src={dividerMobile} alt="mobile divider" />
              </picture>
            </>
          ) : (
            <p className="text-lg text-white">Loading advice...</p>
          )}

          <div className='bg-custom-neon-green rounded-full -mb-12 hover:cursor-pointer shadow-none  hover:shadow-custom-neon-green
          hover:shadow-2xl hover:shadow-inset' onClick={fetchAdvice} >
            <img src={iconDice} alt="Device Icon" className='p-4 ' />
          </div>

        </div>
      </div>

    </div>

  );


}

export default App;
