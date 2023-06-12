// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import style from "./style";
import {
  Bank,
  Billing,
  Business,
  Button,
  CardDeal,
  Clients,
  CTA,
  FeedbackCard,
  Footer,
  GetStarted,
  Hero,
  Narbar,
  Testimonials,
  Stats,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${style.paddingX} ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}>
          <Narbar />
        </div>
      </div>

      <div className={`bg-primary ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${style.paddingX} ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          <Stats /> <Business /> <Billing /> <CardDeal /> <Testimonials />{" "}
          <Clients /> <CTA /> <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
