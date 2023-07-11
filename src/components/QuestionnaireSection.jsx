import Help from "./Help";
import Questionnaire from "./Questionnaire";
import { questionnaireData } from "../../data";

const QuestionnaireSection = () => {
  return (
    <div className="flex sm:flex-row flex-col justify-between mb-10 sm:mb-16 border-b border-solid border-light-gray gap-10 sm:gap-0 pb-6 sm:pb-0">
      <div className="md:w-[714px]">
        <h2 className="text-dark-gray text-lg sm:text-2xl font-semibold mb-6 sm:mb-8">
          Frequently asked questions
        </h2>
        {questionnaireData.map(({ question, answer }, index) => (
          <Questionnaire
            key={index}
            question={question}
            answer={answer}
            isLast={index === questionnaireData.length - 1}
          />
        ))}
      </div>
      <div>
        <Help />
      </div>
    </div>
  );
};

export default QuestionnaireSection;
