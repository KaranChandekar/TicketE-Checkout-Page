import Logo from "./svg/Logo";
import Question from "./svg/Question";

const Navbar = () => {
  return (
    <header className="py-6 flex items-center justify-between">
      <Logo />

      <div className="flex items-center justify-center gap-1">
        <Question />
        <span className="text-dark-gray hidden md:inline-block">Help</span>
      </div>
    </header>
  );
};
export default Navbar;
