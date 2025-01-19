import { forwardRef, useRef } from "react";

export const ForwardRef = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <ForwardRefbeforeReact19 label="username" ref={username} />
        <ForwardRefbeforeReact19 label="password" ref={password} />
        <button className="bg-red-500" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

//* Before React v19

// const ForwardRefbeforeReact19 = forwardRef((props, ref) => {
//   return (
//     <>
//       <label htmlFor={props.label}></label>
//       <input type="text" placeholder={`Enter ${props.label}`} ref={ref} />
//     </>
//   );
// });

//* After React v19

const ForwardRefbeforeReact19 = (props) => {
  return (
    <>
      <label htmlFor={props.label}>{props.label} : </label>
      <input
        id={props.label}
        type="text"
        placeholder={`Enter ${props.label}`}
        ref={props.ref}
      />
      <br />
    </>
  );
};
