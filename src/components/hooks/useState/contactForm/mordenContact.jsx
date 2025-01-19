import { useState } from "react";

export const MordenContact = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    message: "",
  });
  const handleInputOnchange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser((preVal) => ({ ...preVal, [name]: value }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <>
      <section className="flex justify-center items-center w-screen h-screen bg-white">
        <div className="w-80 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 rounded-lg bg-gray-100">
          <h1 className="font-extrabold my-4 text-3xl">Contact form</h1>
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-1">
            <label htmlFor="username">username</label>
            <input
              onChange={handleInputOnchange}
              value={user.username}
              className="font-light py-1 px-2 rounded-md"
              type="text"
              name="username"
              id="username"
              required
              placeholder="Ente user name :"
            />
            <label htmlFor="password">password</label>
            <input
              onChange={handleInputOnchange}
              value={user.password}
              className="font-light py-1 px-2 rounded-md"
              type="password"
              name="password"
              id="password"
              required
              placeholder="Ente password :"
            />
            <label htmlFor="message">message</label>
            <textarea
              onChange={handleInputOnchange}
              value={user.message}
              name="message"
              id="message"
              maxLength={500}
              placeholder="Enter your message hereeeee..."
              rows={5}
              className=" p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className="py-1 px-2 bg-sky-500 rounded-lg my-3"
              type="submit"
            >
              send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
