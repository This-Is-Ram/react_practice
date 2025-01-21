// ? child component without re-render    ( with React.memo()  )

// import React, { useState } from "react";

// const ChildComponent = React.memo(({ value }) => {
//   console.log("Child rendered");

//   return <p>Value: {value}</p>;
// });

// const ParentComponent = () => {
//   const [count, setCount] = useState(0);
//   const [value, setValue] = useState("Hello");

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>
//       <ChildComponent value={value} />
//     </>
//   );
// };

// export default ParentComponent;

// ? child component with re-render    ( without React.memo()  )

// import React, { useState } from "react";

// const ChildComponent = ({ value }) => {
//   console.log("Child rendered");

//   return <p>Value: {value}</p>;
// };

// const ParentComponent = () => {
//   const [count, setCount] = useState(0);
//   const [value, setValue] = useState("Hello");

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>
//       <ChildComponent value={value} />
//     </>
//   );
// };

// export default ParentComponent;
