
import { formateDate } from "../../utils/formateDate";

const DoctorAbout = () => {
  return (
    <div>
        <div>
            <h3 className="text-[25px] leading-[30px] text-headingColor font-semibold flex itmes-center gap-2">About of 
                <span className="text-irisBlueColor font-bold text-[25px] leading-9">Raj Ray</span>
            </h3>
            <p className="text__para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque praesentium cum corrupti odio ad ab officiis rem, animi, officia accusamus, eos repudiandae quos? Rerum incidunt blanditiis ducimus praesentium corrupti amet.
            </p>
        </div>

        <div className="mt-12">
            <h3 className="text-[25px] leading-[30px] text-headingColor font-semibold ">Education</h3>
            <ul className="pt-4 md:p-5 ">
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                        <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">{formateDate('06-23-2008')}-{formateDate('9-15-2012')}</span>

                        <p className="text-[16px] leading-6 font-medium text-textColor">PHD in Surgeon</p>
                    </div>
                    <p className="text-[14px] leading-5 font-medium text-textColor">New Apollo Hospital , New York.</p>
                </li>
                <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                    <div>
                        <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">{formateDate('8-11-2012')} - {formateDate('12-02-2014')}</span>

                        <p className="text-[15px] leading-6 font-medium text-textColor">PHD in Surgeon</p>
                    </div>
                    <p className="text-[14px] leading-5 font-medium text-textColor">New Apollo Hospital , New York.</p>
                </li>
            </ul>
        </div>


        <div className="mt-12">
        <h3 className="text-[25px] leading-[30px] text-headingColor font-semibold ">Experience</h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
            <li className="p-4 rounded bg-[#fff9ea]">
                <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                    {formateDate('3-11-2014')} - {formateDate('12-02-2014')} 
                </span>
                <p className="text-[16px] leading-5 font-medium text-textColor">
                    Sr. Surgeon
                </p>
                <p className="text-[14px] leading-5 font-medium text-textColor">
                    New Apollo Hospital, New York.
                </p>
            </li>

            <li className="p-4 rounded bg-[#fff9ea]">
                <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                    {formateDate('3-11-2014')} - {formateDate('12-02-2014')} 
                </span>
                <p className="text-[16px] leading-5 font-medium text-textColor">
                    Sr. Surgeon
                </p>
                <p className="text-[14px] leading-5 font-medium text-textColor">
                    New Apollo Hospital, New York.
                </p>
            </li>
        </ul>
        </div>
    </div>
  );
};

export default DoctorAbout;
