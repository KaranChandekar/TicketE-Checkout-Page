import ChatsCircle from "./svg/ChatsCircle";

const Help = () => {
  return (
    <div className="w-[360px] bg-[#fff7ed] rounded-xl py-8 px-6 flex justify-between text-[#7f2d07]">
      <div>
        <span className="text-lg font-semibold block mb-1">Need help?</span>
        <span>We're here to help, 24*7</span>
        <button className="font-semibold px-6 py-2 rounded-xl border border-solid border-[#7f2d07] mt-6">
          Chat with us
        </button>
      </div>
      <ChatsCircle />
    </div>
  );
};
export default Help;
