import React, { useState } from "react";
import { HashLoader } from "react-spinners";
import { Link } from "react-router-dom";

const Scan = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [submitClicked, setSubmitClicked] = useState(false);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);

    const url = URL.createObjectURL(uploadedFile);
    setImageUrl(url);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setSubmitClicked(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("http://65.0.132.137:8080/predict", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setPrediction(data);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  const handleCustomFileClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <>
      <section>
        <div className="px-4 mx-auto max-w-screen">
          <h2 className="heading text-center mb-2 font-['Neue Montreal']">
            Upload <span className="text-irisBlueColor">CT Scan</span>
          </h2>
          <div className="absolute border-2 border-b-2 border-[#000] w-[45rem] left-[30%] "></div>
        </div>
        <div className="container">
          <div className="flex justify-between overflow-hidden mt-16 gap-[10px] lg:gap-[20px] xl:gap-0 flex-col lg:flex-row p-3">
            <div className="relative w-1/3 lg:w-1/3 xl:w-[670px] order-2 lg:order-1">
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt="Uploaded CT Scan"
                  className="absolute ml-[150px] w-72 h-72 object-cover rounded-md"
                />
              )}
            </div>
            <div className="w-2/3 lg:w-2/3 xl:w-[670px] order-1 lg:order-2 h-[300px] p-3">
              {prediction && (
                <div className="mt-8 mb-2">
                  <h3 className="text-headingColor text-[25px] font-[400]">
                    Prediction Result :{" "}
                    <span className="text-irisBlueColor font-semibold">
                      {prediction}
                    </span>
                  </h3>
                </div>
              )}
              <div className="relative">
                {imageUrl && !submitClicked && (
                  <h3 className="text-[25px] mt-4">Uploaded Image</h3>
                )}
              </div>
              <div className="flex items-center gap-10">
                <button
                  type="button"
                  onClick={handleCustomFileClick}
                  className="btn bg-irisBlueColor ml-5 rounded sm:w-fit"
                >
                  Choose File
                </button>
                <form onSubmit={handleSubmit} className="">
                  <input
                    type="file"
                    id="fileInput"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileUpload}
                    className="form__input mt-1"
                    style={{ display: "none" }}
                  />
                  <button
                    type="submit"
                    className="btn rounded mx-auto sm:w-fit"
                    disabled={loading}
                  >
                    {loading ? (
                      <HashLoader color={"#fff"} size={20} />
                    ) : (
                      "Submit"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Scan;