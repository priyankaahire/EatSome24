import TrackingStepper from "../../public/common/TrackingStepper";
import DeliveryDiningOutlinedIcon from "@mui/icons-material/DeliveryDiningOutlined";
import StartRating from "../../public/common/StarRating";
import { Step, StepLabel, Stepper } from "@mui/material";

const RestaurantAddressCard = ({ restaurant }) => {

const steps = [
    {
      label: `Outlet: ${restaurant?.areaName}`,
      description: ``,
    },
    {
      label: `${restaurant?.sla?.lastMileTravelString}`,
      description: ``,
    },
  ];
  return (
    <>
      <div className="flex items-center text-gray-900 font-bold text-sm">
        <StartRating />
        <div className="my-0 ml-2">{restaurant?.totalRatingsString}</div>
        <div className="font-extralight text-base text-gray-300 my-0 mx-2">
          •
        </div>
        <div>{restaurant?.costForTwo ?? "₹200 for two"}</div>
      </div>
      <div className="">snacks details</div>
      <div className="">
        <TrackingStepper steps={steps}></TrackingStepper>
        <hr></hr>
      </div>
      <div className="inline-flex text-sm">
        <div className="mr-2">
          <DeliveryDiningOutlinedIcon />
        </div>
        <div className="">{restaurant?.sla?.lastMileTravelString}</div>
        <div className="mx-2">|</div>
        <div className="">{restaurant?.feeDetails?.message}</div>
      </div>
    </>
  );
};

export default RestaurantAddressCard;
