const Feature = ({ icon, title, description }) => {
  return (
    <div className="px-5 py-4 rounded-xl border border-solid border-light-gray w-[282px]">
      {icon}
      <h3 className="mt-10 mb-1 text-dark-gray font-semibold">{title}</h3>
      <p className="text-primary-gray">{description}</p>
    </div>
  );
};
export default Feature;
