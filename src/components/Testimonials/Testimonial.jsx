import React from "react";
import Swipeable from "./Swipeable";
import SwipeableMobile from "./SwipeableMobile";
import { useEffect, useState } from "react";

const Testimonial = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-10">
      <h2 className="text-5xl text-black font-settings p-4 text-center mt-20 max-sm:text-3xl max-sm:text-center">
        Satisfied Customers
      </h2>
      <Swipeable />
      <SwipeableMobile />
    </div>
  );
};

export default Testimonial;
