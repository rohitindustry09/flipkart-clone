import { useRef, useState } from 'react';
export default function GetInputsSlide({ focusedInputRef, NumberOfInputTypes, onInputChange }) {
  const indexRef = useRef(0);
  
  function getIndex() {
    const currentIndex = indexRef.current;
    indexRef.current += 1; 
    return currentIndex;
  };
  const formatLabel = (label) => {
  return label
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/(\d)/g, ' $1')
    .trim();
  };
  
  return (
    <>
      {NumberOfInputTypes.map((item, itemIndex) => (
        <div className="slide" id="slide" key={itemIndex}> {/* Use itemIndex as key */}
          <div className="form-center">
            {item !== "Congratulations" ? (
              Object.entries(item).map(([key, value]) => (
                <div className="wid" key={key}>
                  <label htmlFor={key} className={ 
                    ["Name", "Email", "Mobile"].includes(key) ? "show-white-label" : ""
                  }>
                    {formatLabel(key)}
                  </label>
                  <input
                    className="inputFromUser"
                    type={value}
                    id={key}
                    placeholder="..."
                    ref={(el) => {
                      const index = getIndex();
                      if (focusedInputRef.current) {
                        focusedInputRef.current[index] = el; 
                      }
                    }}
                    onChange={(e)=> 
                    onInputChange(e, key)}
                  />
                </div>
              ))
            ) : (
              <div className="wid congratulations">
                {item} 🎉
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
