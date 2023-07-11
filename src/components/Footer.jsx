import Link from "next/link";
import FooterLogo from "./svg/FooterLogo";
import InstagramLogo from "./svg/InstagramLogo";
import FacebookLogo from "./svg/FacebookLogo";
import TwitterLogo from "./svg/TwitterLogo";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a]">
      <div className="max-w-7xl pt-10 md:pt-16 mx-auto px-6 md:px-10">
        <FooterLogo />

        <div className="md:border-b md:border-solid md:border-[#999999] mt-10 md:mt-20 flex flex-col-reverse md:flex-row md:items-center justify-between md:py-10 pb-10 gap-10 md:gap-0">
          <div className="flex flex-row items-center gap-4 text-xs md:text-base text-[#ebebeb]">
            <Link className="underline underline-offset-4" href="/">
              &copy; Tickete Inc.
            </Link>
            <Link className="underline underline-offset-4" href="/">
              Privacy
            </Link>
            <Link className="underline underline-offset-4" href="/">
              Terms
            </Link>
            <Link className="underline underline-offset-4" href="/">
              Cancellation policy
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/">
              <InstagramLogo className="w-8 h-8 md:w-auto md:h-auto" />
            </Link>
            <Link href="/">
              <FacebookLogo className="w-8 h-8 md:w-auto md:h-auto" />
            </Link>
            <Link href="/">
              <TwitterLogo className="w-8 h-8 md:w-auto md:h-auto" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
