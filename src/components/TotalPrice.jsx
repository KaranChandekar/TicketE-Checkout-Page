import Tag from "./svg/Tag";

const TotalPrice = () => {
  return (
    <div className="text-dark-gray sm:w-[360px] w-full">
      <h3 className="font-semibold text-lg mb-8">Tickets overview</h3>
      <div className="flex items-center justify-between mb-4">
        <span>pax type</span>
        <span>Rs. 11,000</span>
      </div>
      <div className="flex items-center justify-between mb-4">
        <span>pax type</span>
        <span>Rs. 8,000</span>
      </div>
      <div className="flex items-center justify-between mb-4">
        <span>pax type</span>
        <span>Rs. 7,000</span>
      </div>
      <div className="flex items-center justify-between mb-4 text-[#006642]">
        <span>pax type</span>
        <span>Rs. 1,000</span>
      </div>

      <div className="py-6 flex items-center gap-3 text-sm font-semibold border-y border-solid border-light-gray-gray mb-6">
        <Tag />
        <span className="font-semibold underline text-[#006642] text-sm">
          Have a promo code?
        </span>
      </div>

      <div className="flex items-center justify-between font-semibold mb-1">
        <span>Total</span>
        <span>Rs. 25,000</span>
      </div>
      <span className="text-primary-gray underline text-xs">
        You will pay in Rupees
      </span>

      <div className="py-4 px-5 text-sm rounded-xl bg-[#f5f5f5] mt-6">
        <span className="font-semibold block mb-1">Free cancellation</span>
        <span className="text-primary-gray">
          Cancel before 7/11/2023 for a full refund
        </span>
      </div>
    </div>
  );
};
export default TotalPrice;
