import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "../components/Home";
import Profile from "../components/Profile";
import List from "../components/List";
import ProfileExpand from "../components/ProfileExpand";
import { Scrollbars } from "react-custom-scrollbars";

export default function Main(props) {
  const navigate = useNavigate();
  const [viewProfile, setViewProfile] = useState("hidden");
  const [expense, setExpense] = useState([]);
  useEffect(() => {
    async function HandleAllExpense() {
      const res = await fetch("/expense/viewexpense");
      const data = await res.json();
      if (data.errors) {
        navigate("/");
      } else {
        setExpense(data.expenses);
      }
    }
    HandleAllExpense();
  }, []);

  return (
    <>
      <div className="lg:col-span-2 bg-jp-black -mt-1 lg:mt-0 ">
        <Home openModalBudget={props.openModalBudget} />
      </div>
      <div className="col-span-2 bg-jp-black ">
        <Profile setViewProfile={setViewProfile} />
        <Scrollbars
          style={{ width: 540, height: 640 }}
          className="lg:mt-8 -mt-1"
        >
          {expense.reverse().map((item) => {
            return (
              <List
                setDeleteId={props.setDeleteId}
                openModalConfirm={props.openModalConfirm}
                expense={item}
              />
            );
          })}
        </Scrollbars>
      </div>
      <div
        className={`hidden lg:absolute top-20 right-6 w-fit h-fit ${viewProfile}`}
      >
        <ProfileExpand />
      </div>
    </>
  );
}
