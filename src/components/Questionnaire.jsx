import Minus from "./svg/Minus";

const Questionnaire = ({ question, answer, isLast }) => {
  const containerClasses = `flex justify-between pb-6 ${
    isLast ? "" : "mb-6 border-b border-solid border-light-gray"
  }`;

  return (
    <div className={containerClasses}>
      <div className="max-w-[666px]">
        <h3 className="text-dark-gray text-sm sm:text-lg font-semibold mb-3">
          {question}
        </h3>
        <p className="text-primary-gray text-xs sm:text-base">{answer}</p>
      </div>
      <Minus />
    </div>
  );
};

export default Questionnaire;
