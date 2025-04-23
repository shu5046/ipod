import { useEffect, useRef } from "react";
import { FaFastForward, FaFastBackward, FaPlay, FaPause } from "react-icons/fa";
import ZingTouch from "zingtouch";

export default function Wheel({
  handleDown,
  handleUp,
  handleClick,
  handleMenuClick,
}) {
  const wheelRef = useRef(null);

  useEffect(() => {
    const region = new ZingTouch.Region(wheelRef.current);

    let currRotation = 0;

    region.bind(wheelRef.current, "rotate", function (e) {
      const angle = e.detail.distanceFromLast;
      currRotation += angle;
      if (currRotation > 25) {
        handleDown();
        currRotation = currRotation % 25;
      } else if (currRotation < -25) {
        handleUp();
        currRotation = currRotation % 25;
      }
    });

    return () => {
      region.unbind(wheelRef.current, "rotate");
    };
  }, [handleDown, handleUp]);
  return (
    <div className="wheel-container">
      <div ref={wheelRef} className="wheel">
        <div className="controll" id="menu" onClick={handleMenuClick}>
          <div>MENU</div>
        </div>
        <div className="controll" id="forward" onClick={handleDown}>
          <FaFastForward />
        </div>
        <div className="controll" id="play-pause">
          <div>
            <FaPlay />
            <FaPause />
          </div>
        </div>
        <div className="controll" id="reverse" onClick={handleUp}>
          <FaFastBackward />
        </div>
      </div>
      <div className="blank" id="blank" onClick={handleClick}></div>
    </div>
  );
}
