import './SignLog.css';
import useScript from './Script.js'
import GetForm from './GetForm.jsx';

export default function LogIn() {
  const {
    sliderRef,
    nextButtonRef,
    containerPageRef,
    focusedInputRef,
    handleNextButton,
  } = useScript();
  
  return (
<>
  <div className="page-login" ref={containerPageRef}>
        <h4>LOG IN</h4>
        <GetForm 
         sliderRef={sliderRef}
         focusedInputRef={focusedInputRef}
         nextButtonRef={nextButtonRef}
         handleNextButton={handleNextButton}
         NumberOfInputTypes={[
         { 'Mobile': 'number', 'Password': 'password' }
        ]}
         pageFor="login"
        />
  </div>
</>
  );
}