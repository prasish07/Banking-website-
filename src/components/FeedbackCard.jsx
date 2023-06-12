import { quotes } from "../assets";

const FeedbackCard = ({ id, name, content, title, img }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr10 sm:mr-5 mr-0 my-5 feedback-card">
      <img
        src={quotes}
        alt="quotes"
        className="w-[42px] h-[27px] object-contain"
      />
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
        {content}
      </p>
      <div className="flex flex-row">
        <img
          src={img}
          alt="person img"
          className="w-[48px] h-[48px] mr-4 rounded-full"
        />
        <div className="flex flex-col">
          <h4 className="text-white font-poppins font-semibold text-[20px] leading-[32px]">
            {name}
          </h4>
          <p className="text-dimWhite font-poppins font-semibold text-[16px] leading-[24px]">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
