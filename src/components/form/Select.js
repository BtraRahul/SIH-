import React, { useState, useEffect, useRef } from "react";
import downArrow from "../../assets/images/down-arrow.svg";
import { useField } from "formik";
import "./Select.css";

const Select = React.memo(({ name, label, options }) => {
  const [field, , helpers] = useField(name);
  const [show, setShow] = useState(false);
  const selectRef = useRef();

  const handleShow = () => {
    setShow((prev) => !prev);
  };
  const handleClick = (value) => {
    helpers.setValue(value);
    setShow(false);
  };
  const handleClickOff = (e) => {
    if (!selectRef.current?.contains(e.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    if (show) {
      window.addEventListener("click", handleClickOff);
    } else {
      window.removeEventListener("click", handleClickOff);
    }

    return () => {
      window.removeEventListener("click", handleClickOff);
    };
  }, [show]);

  return (
    <div className="selection-field-wrapper">
      <label htmlFor={name}>{label}</label>
      <div className="select-input-wrapper">
        <input
          className="select-payment-term"
          ref={selectRef}
          readOnly
          onClick={handleShow}
          {...field}
        />
        <img className="select-down-arrow" width="11" height="7" src={downArrow} alt="V" />
      </div>
      {show && (
        <ul className="select-payment-wrapper">
          {options.map((option) => {
            return (
              <li
                key={option}
                className="select-payment-option"
                onClick={() => handleClick(option)}
                value={option}
              >
                {option}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
});

export default Select;
