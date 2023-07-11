import Help from "./Help";
import Questionnaire from "./Questionnaire";
import questionnaireData from "../../questionnaire-data";

const QuestionnaireSection = () => {
  return (
    <div className="flex justify-between mb-16 border-b border-solid border-light-gray">
      <div className="pr-6">
        <h2 className="text-dark-gray text-2xl font-semibold mb-8">
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
