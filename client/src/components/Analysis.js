import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Segregator } from "../utilities/Categorysegregator";
import DoughnutChart from "./DoughnutChart";
import Investment from "../assets/Investment.svg";
export default function Analysis(props) {
  const navigate = useNavigate();
  const [active, setActive] = useState("1");
  const startDate = new Date();
  const [date, setDate] = useState({
    startdate: new Date(
      startDate.getFullYear(),
      startDate.getMonth() - 1,
      startDate.getDate()
    ).toDateString(),
    enddate: new Date(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate() + 1
    ).toDateString(),
  });
  const [expenseData, SetExpenseData] = useState({
    datasets: [
      {
        label: "Expense",
        data: [],
        borderColor: "black",
        backgroundColor: [
          "rgba(255, 99, 132, 0.4)",
          "rgba(255, 159, 64, 0.4)",
          "rgba(255, 205, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(201, 203, 207, 0.4)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
    labels: [],
  });

  function changeButton1() {
    setActive("1");
    props.setClicked(true);
    const startDate = new Date();
    setDate({
      startdate: new Date(
        startDate.getFullYear(),
        startDate.getMonth() - 1,
        startDate.getDate()
      ).toDateString(),
      enddate: new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + 1
      ).toDateString(),
    });
  }

  function changeButton2() {
    console.log("okkkk");
    setActive("2");
    const startDate = new Date();
    setDate({
      startdate: new Date(
        startDate.getFullYear(),
        startDate.getMonth() - 2,
        startDate.getDate()
      ).toDateString(),
      enddate: new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + 1
      ).toDateString(),
    });
    props.setClicked(true);
  }
  function changeButton3() {
    setActive("3");
    props.setClicked(true);
    const startDate = new Date();
    setDate({
      startdate: new Date(
        startDate.getFullYear(),
        startDate.getMonth() - 3,
        startDate.getDate()
      ).toDateString(),
      enddate: new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + 1
      ).toDateString(),
    });
  }

  useEffect(() => {
    const HandleInRange = async () => {
      const res = await fetch("/expense/viewexpenseinrange", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(date),
      });
      const data = await res.json();
      if (data.error) {
        navigate("/");
      } else {
        props.setListExpense(data.expense);
        console.log(props.listExpense);
        const Segregated = Segregator(data.expense);

        SetExpenseData({
          datasets: [
            {
              label: "Expense",
              data: Object.values(Segregated[0]),
              borderColor: "black",
              backgroundColor: [
                "rgba(255, 99, 132, 0.4)",
                "rgba(255, 159, 64, 0.4)",
                "rgba(255, 205, 86, 0.4)",
                "rgba(75, 192, 192, 0.4)",
                "rgba(54, 162, 235, 0.4)",
                "rgba(153, 102, 255, 0.4)",
                "rgba(201, 203, 207, 0.4)",
              ],
              borderColor: [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
                "rgb(153, 102, 255)",
                "rgb(201, 203, 207)",
              ],
              borderWidth: 1,
            },
          ],
          labels: Object.keys(Segregated[0]),
        });
      }
    };
    HandleInRange();
  }, [date]);

  return (
    <div className="">
      {props.clicked ? (
        <div className="lg:w-3/4 w-[90%] ml-5 lg:ml-14 py-4 lg:py-10 lg:m-auto lg:mt-10  bg-rp-black lg:p-5 rounded-md">
          <DoughnutChart chartData={expenseData} />
        </div>
      ) : (
        <div className="w-3/4 m-auto lg:mt-10 bg-rp-black p-5 rounded-md">
          <img className="p-5 mt-14 mb-14" src={Investment} alt="join now" />
        </div>
      )}

      <div className="mt-20 w-fit m-auto lg:mb-0">
        <ul className="flex  lg:pb-0 pb-8 lg:px-0 lg:-ml-10 space-x-3 lg:space-x-10">
          <button onClick={changeButton1}>
            <li
              className={
                active === "1"
                  ? "bg-mj-yellow py-3 px-5 rounded-md text-rp-black font-bold"
                  : "border border-mj-yellow py-3 px-5 rounded-md text-mj-yellow font-bold "
              }
            >
              1 Month
            </li>
          </button>
          <button onClick={changeButton2}>
            <li
              className={
                active === "2"
                  ? "bg-mj-yellow py-3 px-5 rounded-md text-rp-black font-bold"
                  : "border border-mj-yellow py-3 px-5 rounded-md text-mj-yellow font-bold "
              }
            >
              2 Month
            </li>
          </button>
          <button onClick={changeButton3}>
            <li
              className={
                active === "3"
                  ? "bg-mj-yellow py-3 px-5 rounded-md text-rp-black font-bold"
                  : "border border-mj-yellow py-3 px-5 rounded-md text-mj-yellow font-bold"
              }
            >
              3 Month
            </li>
          </button>
        </ul>
      </div>
    </div>
  );
}
