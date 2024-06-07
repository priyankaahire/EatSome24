import { shimmer_card_unit } from "../Common/constnant";

export const CardShimmer = () => {
  const menuCards = Array.from(
    { length: shimmer_card_unit },
    (_, index) => index + 1
  );
  return (
    <main className="animate-pulse main-container flex-1 overflow-y-auto mt-24 min-h-[87vh]">
      <div className="restuarant-menu">
        <div className="restuarant-summary flex justify-center items-center bg-gray-500 text-white h-[200px]">
          <img className="bg-gray-300 rounded-md w-60 h-40" />
          <div className="bg-gray-300 h-4 w-4/4  m-5 flex flex-col basis-2/6 ">
            <h2 className=" bg-gray-300 mb-3"></h2>
            <h5 className=" bg-gray-300"></h5>
            <div className=" bg-gray-300 flex justify-between items-center text-base mt-4 pb-3 max-w-[340px]">
              <div className="text-white bg-gray-300"></div>
              <div className="bg-gray-300"></div>
              <div className="bg-gray-300"></div>
            </div>
          </div>
        </div>
        <div className="restuarant-menu-container flex justify-center items-center shadow-2xl">
          <div className="meanu-content w-[850px] mt-8 bg-gray-200">
            <div className="bg-gray-300 memu-title flex justify-between">
              <h3 className="font-extrabold text-lg"></h3>
            </div>
            <div className="bg-gray-300 menu-item-list">
              {menuCards.map((category) => (
                <div key={category} className="mx-auto bg-gray-50 my-4 p-3">
                  <div className="flex justify-between cursor-pointer">
                    <span className="text-lg font-bold bg-gray-300"></span>
                  </div>
                  <div className="flex justify-between text-left">
                    <div className="w-9/12">
                      {/* Shimmer effect for tilte */}
                      <div className="bg-gray-200 h-4 w-3/4 mb-1"></div>
                      {/* Shimmer effect for price */}
                      <div className="bg-gray-200 h-4 w-1/4 mb-1"></div>{" "}
                      {/* Shimmer effect for details */}
                      <div className="bg-gray-200 h-4 w-4/4 mb-1"></div>
                    </div>
                    <div className="flex w-3/12 justify-between text-left menuitem-wraper ml-16">
                      <button className="w-[156px] h-[144px] rounded-xl">
                        <img className="bg-gray-300 w-full h-full rounded-xl" />
                        <div className="relative left-1/2 bottom-7 -translate-x-2/4	 z-[1]">
                          <div className="relative ">
                            <button className="bg-gray-200 relative inline-flex items-center h-10 w-32 border border-solid	border-slate-300 rounded-lg  justify-center"></button>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const Shimmer = () => {
  const cards = Array.from(
    { length: shimmer_card_unit },
    (_, index) => index + 1
  );

  return (
    <div
      style={{
        marginLeft: "calc(5% + 35px)",
        marginRight: "calc(5% + 35px)",
      }}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-white"
          >
            <div className="animate-pulse">
              <div className="bg-gray-300 h-40"></div>{" "}
              {/* Shimmer effect for image */}
              <div className="p-6">
                {/* Shimmer effect for title */}
                <div className="bg-gray-300 h-4 w-4/4 mb-1"></div>{" "}
                {/* Shimmer effect for desc */}
                <div className="bg-gray-300 h-4 w-3/4 mb-1"></div>{" "}
                {/* Shimmer effect for city */}
                <div className="bg-gray-300 h-4 w-1/4 mb-4"></div>{" "}
                {/* Shimmer effect for details */}
                <div className="bg-gray-300 h-4 w-3/4 mb-4"></div>{" "}
                {/* Shimmer effect for offer */}
                <div className="bg-gray-300 h-4 w-2/4 mb-1"></div>{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
