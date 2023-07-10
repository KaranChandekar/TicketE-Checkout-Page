const HeadingAndPara = ({ title, para, className = "" }) => {
  return (
    <div className={className}>
      <h2 className="text-dark-gray text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-primary-gray">{para}</p>
    </div>
  );
};
export default HeadingAndPara;
