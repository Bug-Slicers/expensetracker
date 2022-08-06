import React, { useEffect, useState } from "react";
import Money from "../assets/money.png";

import moment from "moment";
import { useNavigate } from "react-router-dom";

export default function List(props) {
  const navigate = useNavigate();
  const HandleSetUp = () => {
    props.setDeleteId(props.expense._id);
    props.openModalConfirm();
  };
  return (
    <div className="m-2 mt-4 lg:mt-0 mx-4 lg:mx-0 p-2  lg:grid lg:grid-cols-7  text-slate-300 bg-rp-black rounded-xl lg:p-4 lg:m-6 lg:w-[90%] w-[65%] flex">
      <div
        onClick={HandleSetUp}
        className="text-jp-yellow absolute cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-5 relative lg:left-[26rem] left-[18.5rem] lg:top-10 top-11 hover:scale-110"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="bg-jp-black rounded-full lg:w-2/3 w-fit  h-12 relative top-3 p-2 mb-8 lg:mb-3">
        <img src={Money} className="h-7 w-7 mt-1"></img>
      </div>
      <div className="lg:col-span-4 ml-3 lg:ml-0 mt-2 lg:mt-2 ">
        <div className="flex">
          <div className="flex text-jp-yellow bg-jp-black rounded-xl w-fit px-2 py-1 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-sm  ml-1">
              {moment(props.expense.date).format("MMM D")}
            </p>
          </div>
          <div className="flex text-jp-yellow bg-jp-black rounded-xl w-fit px-2 py-1 ml-3 ">
            <p className="text-sm  ml-1">{props.expense.category}</p>
          </div>
        </div>
        <div className="lg:mt-1  mt-2 ">
          <h1 className="font-bold">{props.expense.desc}</h1>
        </div>
      </div>
      <div className="lg:col-span-2 lg:ml-6 ml-3 lg:mt-0 mt-2 ">
        <p className="text-sm font-bold">Your share</p>
        <div className="flex font-bold text-jp-white lg:mt-2 lg:mx-0 mx-4 ">
          <p>₹</p>
          <h1 className="ml-1">{props.expense.amount.$numberDecimal}</h1>
        </div>
      </div>
    </div>
  );
}
