import { features } from "../../data";
import Feature from "./Feature";

const FeatureSection = () => {
  return (
    <div className="mb-16">
      <h2 className="text-lg md:text-2xl font-semibold text-dark-gray mb-6 md:mb-8">
        The Tickete promise
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-6">
        {features.map(({ icon, title, description }, index) => (
          <Feature
            key={index}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};
export default FeatureSection;
