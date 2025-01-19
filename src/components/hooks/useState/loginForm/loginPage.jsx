import { useState } from "react";

export const LoginPage = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData((preData) => ({ ...preData, [name]: value }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };
  return (
    <>
      <section>
        <div className="p-4 bg-red-300 w-[30rem]">
          <h1>Login</h1>
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col gap-1 bg-pink-300"
          >
            <label htmlFor="username">Phone or Email</label>
            <input
              className="rounded-md"
              onChange={handleInput}
              value={userData.username}
              type="text"
              placeholder="Enter phone or Email :"
              id="username"
              name="username"
            />
            <label htmlFor="password">Password</label>
            <input
              className="rounded-md"
              value={userData.password}
              onChange={handleInput}
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password : "
            />
            <button className=" bg-sky-500 my-4">Login</button>
          </form>
        </div>
      </section>
    </>
  );
};
