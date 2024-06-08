
import { useRef } from "react";
import { IconButton } from "@mui/material";
import { ArrowBackRounded, ArrowForwardRounded } from "@mui/icons-material";
const ScrollLeftRight = ({onScrollLeft, onScrollRight, title}) => {

    return (
        <>
         <h3 className="font-extrabold text-lg">{title}</h3>
          <div className="">
            <IconButton
            style={{marginRight:"12px"}}
              aria-label="backward"
              className="border border-gray-600 mr-3 hover:bg-slate-600"
              size="small"
              onClick={onScrollLeft}
            >
              <ArrowBackRounded />
            </IconButton>
            <IconButton
              aria-label="forward"
              className="border border-gray-600"
              size="small"
              onClick={onScrollRight}
            >
              <ArrowForwardRounded />
            </IconButton>
          </div>
        </>
    )
}

export default ScrollLeftRight