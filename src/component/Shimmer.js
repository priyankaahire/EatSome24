import { shimmer_card_unit } from "../utils/constnant";

{/* </div>
    <div role="status" class="max-w-sm animate-pulse">
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    <span class="sr-only">Loading...</span>
</div> */}
const CardShimmer = () => {
  return (
    <div className="animate-pulse">
                        <div className="bg-gray-300 h-40"></div> {/* Shimmer effect for image */}
                        <div className="p-6">
                            <div className="bg-gray-300 h-4 w-3/4 mb-4"></div> {/* Shimmer effect for title */}
                            <div className="bg-gray-300 h-4 w-1/2 mb-2"></div> {/* Shimmer effect for subtitle */}
                            <div className="bg-gray-300 h-4 w-1/4"></div> {/* Shimmer effect for details */}
                        </div>
                    </div>

  )
}
const Shimmer = () => {
  const cards = Array.from({ length: shimmer_card_unit }, (_, index) => index + 1);

    return (
      <div
      style={{
        marginLeft: "calc(5% + 35px)",
        marginRight: "calc(5% + 35px)",
      }}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map(card => (
                <div key={card} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                    <div className="animate-pulse">
                        <div className="bg-gray-300 h-40"></div> {/* Shimmer effect for image */}
                        <div className="p-6">
                            <div className="bg-gray-300 h-4 w-3/4 mb-4"></div> {/* Shimmer effect for title */}
                            <div className="bg-gray-300 h-4 w-1/2 mb-2"></div> {/* Shimmer effect for subtitle */}
                            <div className="bg-gray-300 h-4 w-1/4"></div> {/* Shimmer effect for details */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
      );
}

export default Shimmer