import { useState, useRef, useEffect } from 'react';

const useScript = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const [nextButtonText, setNextButtonText] = useState('Next');

  const sliderRef = useRef(null);
  const nextButtonRef = useRef(null);
  const backButtonRef = useRef(null);
  const stepsRef = useRef([]);
  const containerPageRef = useRef(null);
  const focusedInputRef = useRef([]);

  useEffect(() => {
    const slide = sliderRef.current.querySelectorAll('.slide');
    setTotalSlides(slide.length);

    if (backButtonRef.current) {
      backButtonRef.current.disabled = true;
    }
    
  }, []);

  const getRefs = () => ({
    containerElement: containerPageRef.current,
    slider: sliderRef.current,
    circles: stepsRef.current,
    nextButton: nextButtonRef.current,
    backButton: backButtonRef.current,
  });

  const handleNextButton = () => {
    const { containerElement, slider, circles, backButton } = getRefs();
   
   /*enable this after setup for required
   const currentSlideInput = Array.from(slider.children[currentIndex].querySelectorAll('input'));
  const isCurrentSlideValid = currentSlideInput.every(input => input.value.trim() !== '');
  /////
  if (!isCurrentSlideValid) {
    alert("Please fill the Details Carefully!");
    return;
  }*/
  
  
    if (currentIndex === 0) {
      containerElement.classList.add('gradient-move');
    }
    if (currentIndex === 1) {
      containerElement.classList.add('gradient-move-2');
    }
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        slider.style.transform = `translateX(-${newIndex * 100}%)`;
        circles[prevIndex].classList.add('finished-step', "fa-solid", "fa-check");
        circles[prevIndex].innerText = '';
        if (backButton) backButton.disabled = false;
        return newIndex;
      });
    }
    if (currentIndex === totalSlides - 2) {
      setNextButtonText('Submit');
    }
  };

  const handleBackButton = () => {
    const { containerElement, slider, circles, backButton } = getRefs();

    if (currentIndex >= 0 && currentIndex < 2) {
      containerElement.classList.remove('gradient-move');
    }
    if (currentIndex >= 1 && currentIndex < 3) {
      containerElement.classList.remove('gradient-move-2');
    }

    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex - 1;
        slider.style.transform = `translateX(-${newIndex * 100}%)`;
       // circles[newIndex].classList.remove('finished-step');
        if (newIndex === 0 && backButton) backButton.disabled = true;
        return newIndex;
      });

      setNextButtonText('Next');
    }
  };
  
  const getWhiteLabelInputs = () => {
    return focusedInputRef.current.filter(input => 
      input.previousElementSibling.classList.contains('show-white-label')
    );
  };
  
  const moveLabelOnFocus = () => {
    const { containerElement } = getRefs();
    const whiteLabels = getWhiteLabelInputs();
    
    focusedInputRef.current.forEach((input) => {
      input.addEventListener('focus', () => {
        input.previousElementSibling.classList.add('move');
        
        whiteLabels.forEach(label => {
          
          label.previousElementSibling.style.color = 'black';
          
          label.addEventListener('blur', ()=>{
            label.previousElementSibling.style.color = 'white';
            if(label.previousElementSibling.classList.contains("show-login-email-black")) {
              label.previousElementSibling.style.color = 'black';
            }
          });
        });
        
        if (input.previousElementSibling.classList.contains('show-white-label')) {
            
          input.previousElementSibling.style.color = 'white';
          }

        containerElement.classList.add('gradient-move-by-input');
      });

      input.addEventListener('blur', () => {
        input.previousElementSibling.classList.remove('move');
        containerElement.classList.remove('gradient-move-by-input');
       
        whiteLabels.forEach(label => {
          label.previousElementSibling.style.color = 'white';
          if(label.previousElementSibling.classList.contains("show-login-email-black")) {
              label.previousElementSibling.style.color = 'black';
            }
        });
        
      });
    });
  };

  useEffect(() => {
    moveLabelOnFocus();
  }, []);

  return {
    currentIndex,
    totalSlides,
    nextButtonText,
    sliderRef,
    nextButtonRef,
    backButtonRef,
    stepsRef,
    focusedInputRef,
    containerPageRef,
    handleNextButton,
    handleBackButton,
  };
};

export default useScript;
