import FontIcon from '../Icons-Set/FontIcon.jsx'; 
import FontIconName from '../Icons-Set/FontIconName.jsx';
import ShowOptions from './ShowDropDownOptions.jsx';
import { datas } from '../Datas/HomeData.js';
import { useState, useEffect, useRef } from 'react';

export default function DropItems({ dropFor = "", dropIcon = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref for dropdown container
  const AnyLists = dropFor === "Account" ? datas.Account_icon_lists : datas.Dots_icon_lists;

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Close the dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div 
        className="dropdown-toggle d-flex align-items-center" 
        onClick={toggleDropdown} 
        aria-expanded={isOpen} 
        style={{ cursor: "pointer" }}
      >
        <i className={dropIcon}></i> 
        {dropFor}
      </div>

      <div className={`dropdown-menu ${isOpen ? "show" : ""}`}>
        {Object.entries(AnyLists).map(([key, value], index) => (

            <ShowOptions key={index} Icon={value} Name={key} path={key} />
      
        ))}
      </div>
    </div>
  );
}
