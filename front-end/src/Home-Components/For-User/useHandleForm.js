// useHandleForm.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export function useHandleForm({ pageFor }) {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Mobile: '',
    Address: '',
    Address2: '',
    City: '',
    ZipCode: '',
    Password: ''
  });
  let navigate = useNavigate();
  function handleInput(e, key) {
    setFormData((prevData) => ({
      ...prevData,
      [key]: e.target.value
    }));
    console.log(formData);
  }
  
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted data:", formData);
    try {
  //  pageFor = { pageFor==='signup' ? 'signup' : 'login' };
      let result = await fetch(`http://localhost:5000/${pageFor}/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
    result = await result.json();
    if (result && result.success) { 
     let { success, ...restUserData } = result;
     localStorage.setItem('user', JSON.stringify(restUserData));
      window.location.reload();
      navigate('/');
     } else {
       alert(`${pageFor!='signup' ? 
          'Please enter valide details!' : 
          'User Mobile and Email already in Database!'}`)
       navigate(`/${pageFor}`);
     }
    }
    catch (error) {
      console.error("Error submitting form:", error);
    }
    
  }

  return { formData, handleInput, handleSubmit };
}
