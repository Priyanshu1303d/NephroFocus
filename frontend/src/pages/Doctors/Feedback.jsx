import { useState } from 'react'
import avatarIcon from "../../assets/images/avatar-icon.png"
import { formateDate } from '../../utils/formateDate'
import { AiFillStar } from 'react-icons/ai'
import FeedbackForm from './FeedbackForm'


const Feedback = () => {

    const [showFeedbackForm , setshowFeedbackForm] = useState(false);


  return <div className='container p-16'>
    <div className='mb-[50px]'>
        <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]'>
            All reviews(272)
        </h4>
        
        <div className='flex justify-between gap-10 mb-[30px]'>
            <div className='flex gap-3'>
                <figure className="w-10 h-10 rounded full">
                    <img className='w-full' src={avatarIcon} alt="" />
                </figure>

                <div>
                    <h5 className='text-[16px] leading-6 text-primaryColor font-bold'>Dev Raj</h5>
                    <p className='text-[14px] leading-6 text-textColor'>
                    {formateDate('3-11-2014')} - {formateDate('12-02-2014')} 
                    </p>
                    <p className='text__para mt-3 font-medium text-[15px]'>Good Services,Higly Recommended</p>
                </div>
            </div>

            <div className='flex gap-1'>
                {[...Array(5).keys()].map((_,index)=><AiFillStar key={index} color='#0067FF'/>)}
            </div>

        </div>
    </div>

            {!showFeedbackForm && (<div className='text-center'><button className="btn rounded-xl" onClick={()=>setshowFeedbackForm(true)}>Give Feedback</button></div>)}

            {showFeedbackForm && <FeedbackForm />}
  </div>
}

export default Feedback