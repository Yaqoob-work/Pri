import "./WordSlider.css";
import React from "react";
import { Typewriter } from 'react-simple-typewriter'


function WordSlider() {
  
  function handleType  (count)  {
    // access word count number
    console.log(count)
  }

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }
  return (
    <div className="whatwe">
      <p className="p">What we offer</p>
      <div className="animated-text">
        We find unique designs from authentic cultures & artisans, crafted with
        true
        {' '}
        <span>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Skill', 'Love', 'Care']}
            loop={500}
            cursor
            cursorStyle='|'
cursorBlinking={false} 
            typeSpeed={150}
            deleteSpeed={150}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />.
        </span>
      </div>
    </div>
  );
}

export default WordSlider;
