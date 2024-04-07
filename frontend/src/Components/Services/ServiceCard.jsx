
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;

  return (
    <div className="py-[30px] px-3 lg:px-5">
      <h2 className="text-[26px] leading-9 text-textColor font-[700]">
        {name}
      </h2>
      <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
        {desc}
      </p>

      <div className="flex items-center justify-between mt-[20px]">
        <span className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]" style={{background:`${bgColor}`,color:`${textColor}`,borderRadius:"6px 0 0 6px"}}>
            {index + 1}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
