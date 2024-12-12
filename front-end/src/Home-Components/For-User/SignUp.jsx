import './SignLog.css';
import { useState, useEffect, useRef } from 'react';
import useScript from './Script.js'
import GetCheckCircles from './GetCheckCircles.jsx';
import GetForm from './GetForm.jsx';

export default function SignUp() {
  
  const {
    currentIndex,
    totalSlides,
    nextButtonText,
    sliderRef,
    nextButtonRef,
    backButtonRef,
    stepsRef,
    containerPageRef,
    focusedInputRef,
    handleNextButton,
    handleBackButton,
  } = useScript();

  return (
    <>
      <div className="page-login" ref={containerPageRef}>
        <h4>SIGN UP</h4>
        <GetCheckCircles stepsRef={stepsRef} />

        <GetForm 
         currentIndex={currentIndex}
         sliderRef={sliderRef}
         focusedInputRef={focusedInputRef}
         backButtonRef={backButtonRef}
         handleBackButton={handleBackButton}
         nextButtonRef={nextButtonRef}
         handleNextButton={handleNextButton}
         nextButtonText={nextButtonText}
         NumberOfInputTypes={[
          { Name: 'text', Email: 'email', Mobile: 'number' },
          { Address: 'text', Address2: 'text', City: 'text' },
          { ZipCode: 'number', Password: 'password' },
          'Congratulations'
         ]}
         pageFor="signup"
        />
      </div>
    </>
  );
}
