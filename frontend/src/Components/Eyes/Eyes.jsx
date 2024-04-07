import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX; 
      let mouseY = e.clientY; 

      let deltaX = mouseX - window.innerWidth / 2; 
      let deltaY = mouseY - window.innerHeight / 2;
      

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI); 

      setRotate(angle - 180);
      

      
      setOffsetX(deltaX / 20);
      setOffsetY(deltaY / 20);
    });
  }, []);

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.7" className='relative left-[7%] w-[90%] h-[90%] bg-center bg-[url("https://media.istockphoto.com/id/1127168444/vector/kidney-vector-illustration-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=x7cy1AGTmjC1_RqTFPl896a5sl2vx5o0ORdscugsYjo=")] object-cover bg-cover'>
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
          <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center overflow-hidden">
            <div
              style={{
                transform: `translate(-50%,-50%) translate(${offsetX}px, ${offsetY}px)`,
              }}
              className="blackeyes top-[30%] left-[30%] w-2/3 h-2/3 relative rounded-full bg-zinc-900"
            >
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 "
              >
                <div className="w-6 h-6 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center overflow-hidden">
            <div
              style={{
                transform: `translate(-50%,-50%) translate(${offsetX}px, ${offsetY}px)`,
              }}
              className="blackeyes w-2/3 h-2/3 top-[30%] left-[30%] relative rounded-full bg-zinc-900"
            > 

              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 "
              >
                <div className="w-6 h-6 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
