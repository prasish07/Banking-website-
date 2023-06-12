import React from "react";
import styles from "../style";
import { stats } from "../constants";

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((stat, i) => (
        <div
          key={stat.id}
          className={`flex-1 flex justify-start items-center flex-row m-3`}
        >
          <h4 className="font-poppins font-semibold sm:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3 flex-1 ">
            {stat.title}
          </p>
          <div
            className={`horizontal-line mr-10 ${
              i === stats.length - 1 ? "hidden" : ""
            }`}
          >
            asd
          </div>
        </div>
      ))}
    </section>
  );
};

export default Stats;
