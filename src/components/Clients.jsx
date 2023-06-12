import React from "react";
import { clients } from "../constants";
import styles from "../style";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => {
          return (
            <div
              key={client.id}
              className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] filter-white`}
            >
              <img
                src={client.logo}
                alt="client logo"
                className="sm:w-[192px] w-[100px] object-contain  cursor-pointer"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Clients;
