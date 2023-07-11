import Link from "next/link";
import FooterLogo from "./svg/FooterLogo";
import InstagramLogo from "./svg/InstagramLogo";
import FacebookLogo from "./svg/FacebookLogo";
import TwitterLogo from "./svg/TwitterLogo";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a]">
      <div className="max-w-7xl pt-16 mx-auto px-10">
        <FooterLogo />
        <div className="border-b border-solid border-[#999999] mt-20 flex items-center justify-between py-10">
          <div className="flex items-center gap-4 text-[#ebebeb]">
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
              <InstagramLogo />
            </Link>
            <Link href="/">
              <FacebookLogo />
            </Link>
            <Link href="/">
              <TwitterLogo />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
