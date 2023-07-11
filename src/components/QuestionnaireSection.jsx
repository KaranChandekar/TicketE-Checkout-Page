import Help from "./Help";
import Questionnaire from "./Questionnaire";
import { questionnaireData } from "../../data";

const QuestionnaireSection = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between mb-10 md:mb-16 border-b border-solid border-light-gray gap-10 md:gap-0 pb-6 md:pb-0">
      <div className="md:w-[714px]">
        <h2 className="text-dark-gray text-lg md:text-2xl font-semibold mb-6 md:mb-8">
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
