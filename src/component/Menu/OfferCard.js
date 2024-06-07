import { IMG_CDN_URL } from "../Common/constnant";

const OfferCard = ({ offer }) => {
  const { header, offerLogo, couponCode } = offer?.info;
  return (
    <>
      <div className="pt-0 pl-4 pb-0 pr-0 w-full">
        <div className="relative">
          <div className="flex p-3 w-[328px] rounded-2xl border border-l-zinc-300">
            <div className="">
                <div className="flex justify-start items-center">
                  <div className="w-[48px] [h-48px]">
                    <img src={IMG_CDN_URL + offerLogo} alt=""></img>
                  </div>
                  <div className="flex ml-3 gap-1 flex-col items-start justify-center">
                    <div className="text-lg font-extrabold text-gray-900">{header}</div>
                    <div className="text-sm font-bold text-slate-500">{couponCode}</div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferCard;
