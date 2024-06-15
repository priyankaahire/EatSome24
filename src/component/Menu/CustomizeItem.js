import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import VegetarianSVG from "../Common/VegetarianSVG";
import NonVegetarianSVG from "../Common/NonVegetarianSVG";
import { CheckBox } from "@mui/icons-material";

const CustomizeItem = ({ isOpen, handleClose, handleAddItem, item, isRepeat }) => {
  const handleChange = () => {};
console.log(item, isOpen)
const inputProps = {
 "aria-label": "controlled" 
  // Other custom props
};
  return (
    <Dialog
      open={isOpen}
      PaperProps={{
        sx: {
          borderRadius: "24px",
          width: "600px",
          background: "#f0f0f5",
        },
      }}
    >
      <DialogTitle>
        <div className="border-b border-gray-300 mt-6 ">
          <div className="flex -w-[90%] text-sm font-extralight">
            <div className="">
              {item.name}
            </div>
            <div className="mx-1">•</div>
            <div>
              ₹{item?.price ? item.price / 100 : item?.defaultPrice / 100}
            </div>
          </div>
          <div className="text-xl font-extrabold pb-3">
            {isRepeat ? `Repeat previous customisation?` : `Customise as per your taste`}
          </div>
        </div>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 7,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        style={{
          padding: "0 16px 20px",
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {!isRepeat && item?.addons &&
          item?.addons.map((addons, index) => {
            return (
              <div className="mb-4">
                <div className="pt-2 pb-4 px-0 text-base font-bold">
                  {addons?.groupName}( 0 / {addons?.maxAddons})
                </div>
                <div className="rounded-2xl bg-white pt-4 px-4 pb-4">
                  {addons?.choices &&
                    addons?.choices?.map((choice, index) => {
                      return (
                        <div className="" key={"choice-index-" + index}>
                          <div
                            className="flex mb-4 justify-between"
                            onClick={handleChange}
                          >
                            <div className="flex justify-between w-11/12">
                              <div className="flex items-center">
                                <div className="mr-3">
                                  {" "}
                                  {choice?.isVeg ? (
                                    <VegetarianSVG />
                                  ) : (
                                    <NonVegetarianSVG />
                                  )}
                                </div>
                                <div className="mr-3">{choice?.name}</div>
                              </div>
                              <div className="flex">
                                <div className="">+ &nbsp;</div>
                                <div className="">
                                  ₹{choice?.price ? choice?.price / 100 : 0}
                                </div>
                              </div>
                            </div>
                            <div className="checkbox">
                              <CheckBox
                                checked={choice?.id}
                                 {...inputProps}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })
        }
        {isRepeat && <div className="rounded-2xl bg-white pt-4 px-4 pb-4">
        {item?.name}:{`1`}
          {/*addon group name: choices name : */}
        </div>}
      </DialogContent>
      <DialogActions style={{ padding: "0" }}>
        <div className="w-full p-4 rounded-tl-none rounded-tr-none rounded-bl-lg rounded-br-lg bg-white">
          <div className="flex justify-between w-full px-1">
            {!isRepeat && <div className="text-lg font-bold">
              ₹{item?.price ? item.price / 100 : item?.defaultPrice / 100}
            </div>}
            {
              isRepeat &&
              <div className="w-[49%]">
              <div className="">
               <Button
                  disabled={true}
                  autoFocus
                  style={{
                    height: "44px",
                    border: "1px solid #1BA672",
                    textTransform: "capitalize",
                    fontSize: "16px",
                    fontweight: 700,
                    width: "100%",
                    borderRadius: "12PX",
                    padding: "16px",
                    background: "#fff",
                    color: "#1BA672",
                    cursor:"not-allowed"
                  }}
                >
                 {`I'll choose`} 
                </Button>
              </div>
              </div>
            }
            <div className="w-1/2">
              <div className="">
               <Button
                  autoFocus
                  onClick={()=>{handleAddItem(item)}}
                  style={{
                    height: "44px",
                    border: "0",
                    textTransform: "capitalize",
                    fontSize: "16px",
                    fontweight: 700,
                    width: "100%",
                    borderRadius: "12PX",
                    padding: "16px",
                    background: "#1BA672",
                    color: "white",
                  }}
                >
                 {isRepeat ? `Repeat` : `Add Item to cart`} 
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogActions>
    </Dialog>
  );
};

export default CustomizeItem;
