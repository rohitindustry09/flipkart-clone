const slider = document.getElementById('slider');
  const nextButton = document.getElementById('nextButton');
  const backButton = document.getElementById('backButton');
  const totalSlides = document.querySelectorAll('.slide').length;
  let circles = document.querySelectorAll(".circle");

  let currentIndex = 0;

  nextButton.addEventListener('click', () => {
    
    if (currentIndex == 0) {
     document.querySelector('.page-login').classList.add('gradient-move');
    } 
    if (currentIndex == 1) {
     document.querySelector('.page-login').classList.add('gradient-move-2');
    } 
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
      gsap.to(slider, { x: `-${currentIndex * 100}%`, duration: 0.5 });
    circles[currentIndex-1].classList.add('finished-step');
      backButton.disabled = false;
    }
    if (currentIndex === totalSlides - 1) {
      nextButton.innerText = 'Submit';
    }
    
  });

  backButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      gsap.to(slider, { x: `-${currentIndex * 100}%`, duration: 0.5 });
     circles[currentIndex].classList.remove('finished-step');
      nextButton.innerText = 'Next';
    }
    if (currentIndex === 0) {
      backButton.disabled = true;
    }
    if (currentIndex == 0) {
     document.querySelector('.page-login').classList.remove('gradient-move');
    } 
    if (currentIndex == 1) {
     document.querySelector('.page-login').classList.remove('gradient-move-2');
    } 
    
  });

  // Initially disable the back button
  backButton.disabled = true;
  
  function moveLabelOnFocus() {
    const inputs = document.querySelectorAll('input');

    inputs.forEach((input) => {
      input.addEventListener('focus', () => {
        input.previousElementSibling.classList.add('move');
        
document.querySelectorAll('.show-white-label').forEach(label => {
    label.style.color = 'black';
  });
       if (input.previousElementSibling.classList.contains('show-white-label')) {
     input.previousElementSibling.style.color = 'white';
      }
        document.querySelector('.page-login').classList.add('gradient-move-by-input');
        
        document.querySelectorAll('.show-white-label').classList.add('show-black');
      });

      input.addEventListener('blur', () => {
        input.previousElementSibling.classList.remove('move');
        document.querySelector('.page-login').classList.remove('gradient-move-by-input');
        document.querySelectorAll('.show-white-label').forEach(label => {
      label.style.color = 'white';
    });
      });
    });
  }

  // Run the function to enable the behavior
  moveLabelOnFocus();
  