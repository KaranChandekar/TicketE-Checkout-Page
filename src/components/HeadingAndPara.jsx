const HeadingAndPara = ({ title, para, className = "" }) => {
  return (
    <div className={className}>
      <h2 className="text-dark-gray text-lg md:text-2xl font-semibold mb-2">
        {title}
      </h2>
      <p className="text-primary-gray text-sm md:text-base">{para}</p>
    </div>
  );
};
export default HeadingAndPara;
