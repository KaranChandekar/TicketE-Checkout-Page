const Feature = ({ icon, title, description }) => {
  return (
    <div className="flex sm:flex-col sm:px-5 sm:py-4 rounded-xl sm:border sm:border-solid sm:border-light-gray w-full sm:w-[282px] gap-4 sm:gap-0">
      {icon}
      <div>
        <h3 className="sm:mt-10 mb-1 text-dark-gray font-semibold">{title}</h3>
        <p className="text-primary-gray text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
};
export default Feature;
