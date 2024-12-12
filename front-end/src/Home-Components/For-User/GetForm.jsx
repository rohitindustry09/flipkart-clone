import GetInputsSlide from './GetInputsSlide.jsx';
import GetFormButtons from './GetFormButtons.jsx';
import { useHandleForm } from './useHandleForm.js';

export default function GetForm({ 
  currentIndex, 
  sliderRef, 
  focusedInputRef, 
  backButtonRef, 
  handleBackButton, 
  nextButtonRef, 
  handleNextButton, 
  nextButtonText, 
  NumberOfInputTypes,
  pageFor
}) {

  const { formData, handleInput, handleSubmit } = useHandleForm({ pageFor });

  return (
    <form
      className="formtag"
      id="form"
      onSubmit={handleSubmit}
    >
      <div className="slider" id="slider" ref={sliderRef}>
        <GetInputsSlide
          focusedInputRef={focusedInputRef}
          NumberOfInputTypes={NumberOfInputTypes}
          onInputChange={handleInput}
        />
      </div>
      <GetFormButtons
        currentIndex={currentIndex}
        nextButtonText={nextButtonText}
        nextButtonRef={nextButtonRef}
        handleNextButton={handleNextButton}
        backButtonRef={backButtonRef}
        handleBackButton={handleBackButton}
      />
    </form>
  );
}
