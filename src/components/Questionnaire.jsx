"use client";

import { useState } from "react";
import Minus from "./svg/Minus";
import Plus from "./svg/Plus";

const Questionnaire = ({ question, answer, isLast }) => {
  const containerClasses = `pb-6 ${
    isLast ? "" : "mb-6 border-b border-solid border-light-gray"
  }`;

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className={containerClasses}>
      <div className="flex justify-between">
        <h3 className="text-dark-gray text-sm md:text-lg font-semibold">
          {question}
        </h3>
        {show ? (
          <Minus onClick={handleClick} className="cursor-pointer" />
        ) : (
          <Plus onClick={handleClick} className="cursor-pointer" />
        )}
      </div>
      <p
        className={`${
          show
            ? "text-primary-gray text-xs mt-3 md:text-base max-w-[666px]"
            : "hidden"
        }`}
      >
        {answer}
      </p>
    </div>
  );
};

export default Questionnaire;
