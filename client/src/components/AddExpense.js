import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker2 from "./DatePicker2";
import ReactLoading from "react-loading";
import { Scrollbars } from "react-custom-scrollbars";

const AddExpense = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const [expense, setExpense] = useState({
    amount: "",
    desc: "",
    date: "",
    category: "General",
  });

  const [error, setError] = useState({
    amount: "",
    desc: "",
  });

  const handleAddExpense = async (e) => {
    setIsLoading(true);
    setError({
      msg: "",
    });
    const res = await fetch("/expense/addexpense", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expense),
    });
    const data = await res.json();
    if (data.errors) {
      setIsLoading(false);
      setError(data.errors);
      console.log(data.errors);
    } else {
      setIsLoading(false);
      props.closeModalExpense();
      navigate("/dashboard");
      window.location.reload();
    }
  };

  return (
    <Scrollbars style={{ width: 540, height: 500 }} className="mt-8">
      <div className=" grid grid-cols-6 font-lexend ">
        <div className="col-span-4 bg-rp-black p-6 ">
          <div className=" flex mt-4 ">
            <h1 className="text-jp-white text-2xl font-bold ">Add Expense</h1>
          </div>
          <div className=" text-jp-white flex mt-4 ">
            <h1 className="text-4xl border-b-2 mt-2">₹</h1>
            <input
              className="p-3 bg-rp-black text-3xl w-3/4 border-b-2 outline-none "
              placeholder="0"
              type="number"
              value={expense.amount}
              onChange={(e) => {
                const tempExpense = { ...expense };
                tempExpense.amount = e.target.value;
                setExpense(tempExpense);
              }}
            ></input>
          </div>
          <span className="pt-1 text-sm text-red-500 font-lexend">
            {error.msg}
          </span>
          <div>
            <input
              className="p-3 px-4 rounded-md mt-6  w-3/4 placeholder-rp-yellow bg-jp-black outline-none text-jp-white"
              placeholder="what was this expense for ?"
              value={expense.desc}
              onChange={(e) => {
                const tempExpense = { ...expense };
                tempExpense.desc = e.target.value;
                setExpense(tempExpense);
              }}
            ></input>
          </div>
          <div className="">
            <DatePicker2 expense={expense} setExpense={setExpense} />
          </div>
          <div>
            <h1 className="text-jp-slate font-bold  mt-4">Category</h1>
          </div>
          <div className="text-mj-black">
            <select
              className="bg-jp-black text-white px-3 py-2 my-1 rounded"
              name="Categories"
              id="categories"
              value={expense.category}
              onChange={(e) => {
                const tempExpense = { ...expense };
                tempExpense.category = e.target.value;
                setExpense(tempExpense);
              }}
            >
              <option value="General">General</option>
              <option value="Food">Food</option>
              <option value="Fuel">Fuel</option>
              <option value="Grocery">Grocery</option>
              <option value="Shopping">Shopping</option>
              <option value="Travel">Travel</option>
              <option value="Fun">Fun</option>
            </select>
          </div>
          <div className="border-rp-yellow border-2 rounded-md w-fit px-8 mt-10">
            {isLoading ? (
              <ReactLoading
                type="bubbles"
                color="#F5A302"
                height={50}
                width={50}
              />
            ) : (
              <button
                onClick={handleAddExpense}
                className="font-bold text-jp-yellow py-4"
              >
                Save Expense
              </button>
            )}
          </div>
        </div>
      </div>
    </Scrollbars>
  );
};

export default AddExpense;
