import { useRef } from "react";

export const UseRef = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          className="bg-pink-200 my-4"
          type="text"
          name="username"
          id="username"
          ref={username}
        />
        <br />
        <input
          className="bg-pink-200"
          type="text"
          name="password"
          id="password"
          ref={password}
        />{" "}
        <br />
        <button className="bg-green-400 my-4">Submit</button>
      </form>
    </>
  );
};
