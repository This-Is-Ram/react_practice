import { useState } from "react";

// export const State = () => {
//   const [count, setCount] = useState(0);
//   const handleButton = () => {
//     console.log(count);

//     setCount(() => count + 1);
//   };
//   console.log("parent component rendered");

//   return (
//     <>
//       <div className="w-screen flex items-center flex-col">
//         <h1>{count}</h1>
//         <button onClick={handleButton} className="p-2 bg-green-500">
//           Click me
//         </button>
//       </div>
//       <ChildComp count={count} />
//     </>
//   );
// };

// function ChildComp({ count }) {
//   console.log("child component rerendered");
//   return (
//     <>
//       <h1>i am from child - {count}</h1>
//     </>
//   );
// }

// //? =============================== simbling =============================

// export function Simbling() {
//   console.log("simbling component rerendered");
//   return (
//     <>
//       <h1>i am from simbling </h1>
//     </>
//   );
// }

export const UserData = () => {
  const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 52 },
    { name: "Charlie", age: 22 },
    { name: "Angels", age: 18 },
    { name: "Nick", age: 60 },
  ];

  const [count, setCount] = useState(users);
  const usersCount = count.length;
  const usersAvgAge = count.reduce((acc, curElem) => acc + curElem.age, 0);
  return (
    <>
      <ul>
        {count.map((curElem, index) => {
          const { name, age } = curElem;
          return (
            <li key={index} className="flex gap-8">
              <h1>Name : {name}</h1>
              <h1>Age : {age}</h1>
            </li>
          );
        })}
        <h1>users count : {usersCount}</h1>
        <h1>users avarage age : {usersAvgAge / usersCount}</h1>
      </ul>
    </>
  );
};

// function countCalling() {
//   setCount((prevCount) => (prevCount + 1) % users.length); // Wrap around using modulo
// }

// return (
//   <>
//     <ul>
//       <li>
//         <h1>{users[count].name}</h1>
//         <h1>{users[count].age}</h1>
//       </li>
//     </ul>
//     <button onClick={countCalling}>Next User</button>
//   </>
// );
