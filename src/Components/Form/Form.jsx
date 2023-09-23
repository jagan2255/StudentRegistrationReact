import React, { useState } from 'react';
import './Form.css';
import axios from 'axios';


var apiurl = "http://localhost:3001";

function Form({sendDataBack}) {


  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [className, setClassName] = useState('');
  const [division, setDivision] = useState('');
  const [gender, setGender] = useState('');
  const [nameError, setNameError] = useState('');
  const [dobError, setDobError] = useState('');
  const [classError, setClassError] = useState('');
  const [divisionError, setDivisionError] = useState('');
  const [genderError, setGenderError] = useState('');


  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError('');
  };

  const handleDobChange = (e) => {
    setDob(e.target.value);
    setDobError('');
  };

  const handleClassChange = (e) => {
    setClassName(e.target.value);
    setClassError('');
  };

  const handleDivisionChange = (e) => {
    setDivision(e.target.value);
    setDivisionError('');
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
    setGenderError('');
  };

  const handleSubmit =async (e) => {
    e.preventDefault();

    // Validate name
    if (!(name.trim())) {
      setNameError('Please enter your name.');
      return;
    }

    if (!dob) {
      setDobError('Please enter your Date of Birth.');
      return;
    }

    // Validate class
    if (!className) {
      setClassError('Please select a class.');
      return;
    }

    // Validate division
    if (!division) {
      setDivisionError('Please select a division.');
      return;
    }

    if (!gender) {
      setGenderError('Please select a gender.');
      return;
    }

    // Submit logic
    console.log('Form submitted:', { name, dob, className, division, gender });

    var data = {
      name: name,
      dob: dob,
      className: className,
      division: division,
      gender: gender

    }

    await axios.post(`${apiurl}/api/v1/studentdata/savestudent`, data).then((res) => {
      console.log(res) 
      if (res?.data?.message === "Success") {
        setName('');
        setDob('');
        setClassName('');
        setDivision('');
        setGender('');
        sendDataBack(1);
        
      }else{
        alert("Error Saving Data")
      }
    }).catch((err)=>{
      alert(err.message)
    })


  };

  return (
    <div className="formclass">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-control"

            value={name}
            onChange={handleNameChange}
          />
          {nameError && <div className="text-danger">{nameError}</div>}
          {name && !/^[a-zA-Z ]+$/.test(name) && (
            <div className="text-danger">Please enter only letters.</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          <label className="form-label">Date of Birth</label>
          <input
            type="date"
            className="form-control"
            value={dob}
            onChange={handleDobChange}
          />
          {dobError && <div className="text-danger">{dobError}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Class</label>
          <select
            className="form-select"
            value={className}
            onChange={handleClassChange}
          >
            <option value="">Choose...</option>
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
            <option value="IV">IV</option>
            <option value="V">V</option>
            <option value="VI">VI</option>
            <option value="VII">VII</option>
            <option value="VIII">VIII</option>
            <option value="IX">IX</option>
            <option value="X">X</option>
            <option value="XI">XI</option>
            <option value="XII">XII</option>

          </select>
          {classError && <div className="text-danger">{classError}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Division</label>
          <select
            className="form-select"
            value={division}
            onChange={handleDivisionChange}
          >
            <option value="">Select Division...</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
          {divisionError && <div className="text-danger">{divisionError}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Gender</label>
          <div className='d-flex'>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value="Male"
                checked={gender === 'Male'}
                onChange={handleGenderChange}
              />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check mx-4">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value="Female"
                checked={gender === 'Female'}
                onChange={handleGenderChange}
              />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
          </div>
          {genderError && <div className="text-danger">{genderError}</div>}

        </div>

        <div className="d-grid gap-2 mt-4">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
