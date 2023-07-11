import CalendarBlank from "./svg/CalendarBlank";
import Clock from "./svg/Clock";
import Ticket from "./svg/Ticket";
import women from "../images/Women.png"
import Image from "next/image";

const DateTime = () => {
  return (
    <div className="max-w-[360px] text-dark-gray font-semibold border-b border-solid border-light-gray">
      <div className="w-full mb-3">
        <Image className="w-full rounded-xl" src={women} alt="women" />
      </div>

      <h3 className="text-lg">
        Amsterdam opeg boat canal cruise - Live Ggide - from Anne Frgnk House
      </h3>
      <div className="flex flex-col gap-3 my-6">
        <div className="flex items-center gap-4">
          <Ticket />
          <span>variant name</span>
        </div>
        <div className="flex items-center gap-4">
          <CalendarBlank />
          <span>7/11/2023</span>
        </div>
        <div className="flex items-center gap-4">
          <Clock />
          <span>7:41 PM</span>
        </div>
      </div>
    </div>
  );
};
export default DateTime;
