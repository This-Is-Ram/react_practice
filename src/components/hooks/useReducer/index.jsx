// import { useReducer } from "react";

import { useReducer } from "react";

// export const UseReducer = () => {
//   const reducer = (state, action_) => {
//     if (action_.type === "increment") {
//       return state + 1;
//     }

//     if (action_.type === "decrement") {
//       return state - 1;
//     }
//     if (action_.type === "Reset") {
//       return (state = 0);
//     }
//   };

//   const [count, dispatch] = useReducer(reducer, 0);
//   return (
//     <>
//       <h1>{count}</h1>
//       <button
//         onClick={() => {
//           dispatch({ type: "increment" });
//         }}
//       >
//         increment
//       </button>
//       <br />
//       <button
//         onClick={() => {
//           dispatch({ type: "decrement" });
//         }}
//       >
//         decrement
//       </button>
//       <br />
//       <button
//         onClick={() => {
//           dispatch({ type: "Reset" });
//         }}
//       >
//         Reset
//       </button>
//     </>
//   );
// };

export const UseReducer = () => {
  const initialState = {
    count: 0,
    inc: 2,
    dec: 3,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 };

      case "decrement":
        return { ...state, count: state.count - 1 };
      case "reset":
        return { ...state, count: 0 };

      default:
        break;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <br />
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <br />
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </>
  );
};
