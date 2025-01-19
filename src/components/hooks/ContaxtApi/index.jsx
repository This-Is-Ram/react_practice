import { createContext, useContext } from "react";

// ? step 1 " context creation "
export const BioContaxt = createContext();

// ? step 2 " provider creation "

export const BioProvider = ({ children }) => {
  const MyName = "Ram";
  const age = 19;

  return (
    <BioContaxt.Provider value={{ MyName, age }}>
      {children}
    </BioContaxt.Provider>
  );
};

export const useBioContaxt = () => {
  const context = useContext(BioContaxt);
  if (context === undefined) {
    throw new Error("Component must be wraped in the BioProvider");
  }
  return context;
};
