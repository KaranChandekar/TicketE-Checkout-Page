import DateTime from "./DateTime";
import HeadingAndPara from "./HeadingAndPara";
import InputField from "./InputField";
import TotalPrice from "./TotalPrice";
import CreditCard from "./svg/CreditCard";
import Klarna from "./svg/Klarna";
import RadioButtonEmpty from "./svg/RadioButtonEmpty";
import RadioButtonFill from "./svg/RadioButtonFill";
import ShieldCheckered from "./svg/ShieldCheckered";

const HeroSection = () => {
  return (
    <div className="flex justify-between md:flex-row flex-col-reverse mt-10 md:mt-24 pb-6 mb-10 md:mb-16 border-b border-solid border-light-gray">
      <div className="md:border-r md:border-solid md:border-light-gray md:pr-6 mt-10 md:mt-0">
        <h1 className="text-dark-gray text-5xl font-semibold mb-16 hidden md:block">
          Confirm and pay
        </h1>

        <HeadingAndPara
          title="Enter your details"
          para="We'll be sending your tickets to the details below. Booking for a friend? Add their details."
          className="mb-8"
        />
        <div className="py-2 grid xl:grid-cols-2 gap-6 mb-11">
          <InputField
            type="text"
            label="<Full Name>"
            placeholder="Enter full name"
          />
          <InputField
            type="number"
            label="<Phone no>"
            placeholder="Enter phone no."
          />
          <InputField
            type="text"
            label="<Full name>"
            placeholder="Enter full name"
          />
          <InputField type="email" label="<email>" placeholder="Enter email" />
        </div>

        <HeadingAndPara
          title="Additional information"
          para="We need a few more details to complete your reservation."
          className="mb-8"
        />
        <div className="py-2 grid xl:grid-cols-2 gap-6 mb-11">
          <InputField
            type="text"
            label="<Full Name>"
            placeholder="Enter full name"
          />
          <InputField
            type="number"
            label="<Phone no>"
            placeholder="Enter phone no."
          />
        </div>

        <HeadingAndPara
          title="Select your mode of payment"
          para="Payments with Tickete are secure and encrypted."
          className="mb-8"
        />

        <div className="flex justify-between items-center mb-7">
          <div className="flex items-center gap-5">
            <CreditCard />
            <span className="text-dark-gray font-semibold text-sm md:text-base">
              Credit & debit card
            </span>
          </div>

          <RadioButtonFill />
        </div>
        <div className="py-2 grid xl:grid-cols-2 gap-6 mb-6">
          <InputField
            type="text"
            label="<Name of Card>"
            placeholder="Enter card name"
          />
          <InputField
            type="number"
            label="<Card Number>"
            placeholder="Enter card no."
          />
          <InputField
            type="date"
            label="<Expiry Date>"
            placeholder="Enter expiry date"
          />
          <InputField
            type="password"
            label="<CVV/CVC>"
            placeholder="Enter cvv/cvc"
          />
        </div>
        <div className="flex justify-between items-center mb-10 py-6 border-y border-solid border-light-gray">
          <div className="flex items-center gap-5">
            <Klarna />
            <span className="text-dark-gray font-semibold text-sm md:text-base">
              Klarna
            </span>
          </div>

          <RadioButtonEmpty />
        </div>

        <div className="mb-10">
          <h2 className="text-lg md:text-2xl font-semibold mb-1 text-dark-gray">
            Total: 25,000
          </h2>
          <p className="text-xs text-primary-gray underline">
            You will pay in Rupees
          </p>
        </div>

        <div className="bg-[#F5F5F5] rounded-lg flex items-center gap-3 p-4 mb-6">
          <RadioButtonFill />
          <span className="text-xs font-semibold text-dark-gray">
            Receive travel tips, suggestions and offers in Banglore by email
          </span>
        </div>

        <div>
          <p className="text-xs text-primary-gray mb-3">
            With payment, you agree to the general{" "}
            <span className="text-[#1733B6]">
              terms and conditions of Tickete
            </span>{" "}
            & the <span className="text-[#1733B6]">activity provider.</span>
          </p>

          <button className="font-semibold text-white bg-[#0A0A0A] flex items-center justify-center gap-2 rounded-xl px-5 py-3 w-full md:w-auto">
            Confirm and pay <ShieldCheckered />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-12">
        <h1 className="text-dark-gray text-3xl font-semibold mb-10 md:hidden">
          Confirm and pay
        </h1>
        <DateTime />
        <TotalPrice />
      </div>
    </div>
  );
};
export default HeroSection;
