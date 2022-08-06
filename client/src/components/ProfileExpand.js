import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileExpand() {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  useEffect(() => {
    async function handleGetUser() {
      const res = await fetch("/user/getProfile");
      const data = await res.json();
      if (data.errors) {
        navigate("/");
      } else {
        setUser(data.user);
      }
    }
    handleGetUser();
  }, []);

  return (
    <div className="bg-rp-black rounded-xl text-jp-white p-6 shadow-md shadow-slate-600 font-lexend">
      <div className="text-rp-yellow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-1/2 w-1/2 ml-auto mr-auto"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="mt-8">
        <div className="grid grid-cols-9 text-rp-yellow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 "
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
          <h1 className="ml-2 col-span-8 text-jp-white uppercase">
            {user.name}
          </h1>
        </div>
        <div className="grid grid-cols-9 mt-4 text-rp-yellow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <h1 className="ml-2 col-span-8 text-jp-white uppercase">
            {user.email}
          </h1>
        </div>
      </div>
    </div>
  );
}
