import React from "react";
import { BASE_URL } from "../../config";
import DoctorCard from "../../Components/Doctors/DoctorCard";
import Loading from "../../Components/Loader/Loading";
// import Error from "../../Components/Error/Error";
// import useFetchData from "../../hooks/useFetchData";

const MyBookings = () => {
  // const {
  //   data: appointments,
  //   loading,
  //   error,
  // } = useFetchData(`${BASE_URL}/appointments/my-appointments`);

  return (
    <div>
      {/* {loading && <Loading />} */}
      {/* {error && <Error errMessage={error} />} */}

      {/* {!loading && !error && (<div className="grid grid-cols lg:grid-cols-2 gap-5">{
        appointments.map(doctor=> <DoctorCard doctor={doctor} key={doctor._id} />)
      }

      </div>)} */}

      {/* {
        !loading && error && appointments.length === 0 && <h2 className="mt-5 text-center text-primaryColor leading-7 text-[20px] font-semibold">You did not Book any Doctor yet</h2>
      } */}
      <h2>MyBookings</h2>

    </div>
  );
};

export default MyBookings;
