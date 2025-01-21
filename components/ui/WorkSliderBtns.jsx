"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ containerStyles, btnStyles, swiper }) => {
    return (
        <div className={containerStyles}>
            <button
                className={btnStyles}
                onClick={() => swiper.current.slidePrev()}
            >
                &#60;
            </button>
            <button
                className={btnStyles}
                onClick={() => swiper.current.slideNext()}
            >
                &#62;
            </button>
        </div>
    );
};

export default WorkSliderBtns;