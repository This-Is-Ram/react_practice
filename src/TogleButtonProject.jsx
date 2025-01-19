import { useState } from "react";

export const ToggleButtonProject = () => {
  const [isOn, setIsOn] = useState(false);
  const PosChange = () => {
    setIsOn(() => !isOn);
  };

  return (
    <>
      <div
        onClick={PosChange}
        className={`h-10 w-28 rounded-full border-2 border-gray-500 transition-all flex items-center ${
          isOn ? "bg-green-500" : "bg-gray-500"
        }`}
      >
        <div
          className={`h-8 aspect-square rounded-full border-2 border-gray-600 transition-transform duration-500 ${
            isOn
              ? "translate-x-[240%] bg-red-300"
              : "translate-x-0 bg-green-300"
          } flex items-center justify-center`}
        >
          <span className="text-xs">{isOn ? "ON" : "OFF"}</span>
        </div>
      </div>
    </>
  );
};
