import { useId } from "react";

export const UseId = () => {
  const id = useId();
  return (
    <>
      <form>
        <label htmlFor={id + "username"}>username</label>
        <input type="text" placeholder="Enter" />

        <label htmlFor={id + "password"}>password</label>
        <input type="password" placeholder="Enter" />

        <label htmlFor={id + "email"}>email</label>
        <input type="email" placeholder="Enter" />
      </form>
    </>
  );
};
