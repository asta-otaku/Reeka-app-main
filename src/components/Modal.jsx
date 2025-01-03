import React, { useState, useEffect } from "react";
import Success from "./Success";
import "../css/Modal.css";

const Modal = ({ isOpen, close }) => {
  const modalClass = isOpen ? "modal open" : "modal";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [portfolioSize, setPortfolioSize] = useState("1-10");
  const [checkboxInputs1, setCheckboxInputs1] = useState([
    { id: 1, label: "Spreadsheet", checked: false },
    { id: 2, label: "Whatsapp", checked: false },
    { id: 3, label: "Airbnb", checked: false },
    { id: 4, label: "Guesty", checked: false },
    { id: 5, label: "Booking.com", checked: false },
  ]);

  const [checkboxInputs2, setCheckboxInputs2] = useState([
    { id: 1, label: "Communicating quickly with customers", checked: false },
    {
      id: 2,
      label: "Manage Service Provider(Cleaners, other staff)",
      checked: false,
    },
    { id: 3, label: "Furnishing / Interior Design", checked: false },
    { id: 4, label: "Fraud Prevention", checked: false },
    {
      id: 5,
      label: "Advertising(Getting more customers or guests)",
      checked: false,
    },
  ]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    //This stops the background from scrolling when the modal is open
    //If modal is open, css class exists, if not, the css class is removed from list.
    if (isOpen) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }
    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, [isOpen]);

  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    const apiUrl = "https://api.apispreadsheets.com/data/eZ30fBVzLiPh36jk/";

    const formData = {
      name,
      email,
      location,
      phoneNumber,
      portfolioSize,
      tools: checkboxInputs1
      .filter((input) => input.checked)
      .map((input) => input.label)
      .join(", "),
      priorities: checkboxInputs2
      .filter((input) => input.checked)
      .map((input) => input.label)
      .join(", "),
    };

    try {
      const response = await fetch(apiUrl, {
        mode: "no-cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            Name: formData.name,
            Email: formData.email,
            Tools: formData.tools,
            Location: formData.location,
            Priorities: formData.priorities,
            "Phone Number": formData.phoneNumber,
            "Portfolio Size": formData.portfolioSize,
          },
        }),
      });

      const result = await response.json();
      if (response.ok) {
        setFormSubmitted(true);
      } else {
        throw new Error(result.error || "Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleCheckboxChange1 = (id) => {
    setCheckboxInputs1((prevState) =>
      prevState.map((input) =>
        input.id === id ? { ...input, checked: !input.checked } : input
      )
    );
  };

  const handleCheckboxChange2 = (id) => {
    setCheckboxInputs2((prevState) =>
      prevState.map((input) =>
        input.id === id ? { ...input, checked: !input.checked } : input
      )
    );
  };

  const Checkbox = ({ title, subtitle, inputs, onChange }) => {
    return (
      <div className="form-group checkbox-group">
        <label>{title}</label>
        <p className="checkbox-subtitle">{subtitle}</p>
        {inputs.map((input) => (
          <label key={input.id} className="custom-checkbox">
            <input
              type="checkbox"
              checked={input.checked}
              onChange={() => onChange(input.id)}
            />
            <span
              style={{
                color: input.checked ? "#e36b37" : "#667085",
                display: "block",
                width: "100%",
              }}
            >
              {input.label}
            </span>
          </label>
        ))}
      </div>
    );
  };

  return (
    <div className={modalClass} onClick={close}>
      {formSubmitted ? (
        <Success />
      ) : (
        <div className="form-container" onClick={handleModalContentClick}>
          <div className="form-header">
            <div className="form-header-text">
              <h2>Book Demo</h2>
              <p>Please provide your correct details</p>
            </div>
            <button onClick={close}>x</button>
          </div>
          <form onSubmit={handleSubmit} className="form-content">
            <div className="form-group">
              <label htmlFor="name">Name*</label>
              <input
                type="text"
                id="name"
                placeholder="What is your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="location">Location*</label>
              <input
                type="text"
                id="location"
                placeholder="Search for your city"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone number*</label>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="portfolioSize">Portfolio size*</label>
              <select
                id="portfolioSize"
                value={portfolioSize}
                placeholder="1-10"
                onChange={(e) => setPortfolioSize(e.target.value)}
                required
              >
                {[...Array(10).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
            </div>

            <Checkbox
              title="What tool do you use to manage your shortlets?*"
              subtitle="Please check all that apply"
              inputs={checkboxInputs1}
              onChange={handleCheckboxChange1}
            />

            <Checkbox
              title="What is most important to you as you mange your shortlet business?*"
              subtitle="Please check all that apply"
              inputs={checkboxInputs2}
              onChange={handleCheckboxChange2}
            />
            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Modal;
