const Feature = ({ icon, title, description }) => {
  return (
    <div className="flex md:flex-col md:px-5 md:py-4 rounded-xl md:border md:border-solid md:border-light-gray w-full md:w-[282px] gap-4 md:gap-0">
      {icon}
      <div>
        <h3 className="md:mt-10 mb-1 text-dark-gray font-semibold">{title}</h3>
        <p className="text-primary-gray text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};
export default Feature;
