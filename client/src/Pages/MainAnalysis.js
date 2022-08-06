import React, { useState } from "react";
import Analysis from "../components/Analysis";
import List from "../components/List";
import Profile from "../components/Profile";
import ProfileExpand from "../components/ProfileExpand";
import { Scrollbars } from "react-custom-scrollbars";

export default function MainAnalysis(props) {
  const [viewProfile, setViewProfile] = useState("hidden");
  const [listExpense, setListExpense] = useState([]);
  const [clicked, setClicked] = useState(true);
  {
    return window.innerWidth > 420 ? (
      <>
        <div className="col-span-2 bg-jp-black">
          {clicked ? (
            <Scrollbars
              style={{ width: 540, height: 640 }}
              className="lg:mt-8 -mt-1 lg:ml-24 ml-3"
            >
              {listExpense
                ? listExpense.map((item) => {
                    return (
                      <List
                        setDeleteId={props.setDeleteId}
                        openModalConfirm={props.openModalConfirm}
                        expense={item}
                      />
                    );
                  })
                : null}
            </Scrollbars>
          ) : null}
        </div>
        <div className="col-span-2 bg-jp-black mt-10 lg:mt-0">
          <Profile setViewProfile={setViewProfile} />
          <Analysis
            clicked={clicked}
            setClicked={setClicked}
            setListExpense={setListExpense}
            listExpense={listExpense}
          />
        </div>
        <div className={`absolute top-20 right-6 w-fit h-fit ${viewProfile}`}>
          <ProfileExpand />
        </div>
      </>
    ) : (
      <>
        <div className="col-span-2 bg-jp-black py-10 lg:py-0">
          <Profile setViewProfile={setViewProfile} />
          <Analysis
            clicked={clicked}
            setClicked={setClicked}
            setListExpense={setListExpense}
            listExpense={listExpense}
          />
        </div>
        <div className="col-span-2 bg-jp-black">
          {clicked ? (
            <Scrollbars
              style={{ width: 540, height: 640 }}
              className="lg:mt-8 -mt-1 lg:ml-24 ml-1"
            >
              {listExpense
                ? listExpense.map((item) => {
                    return (
                      <List
                        setDeleteId={props.setDeleteId}
                        openModalConfirm={props.openModalConfirm}
                        expense={item}
                      />
                    );
                  })
                : null}
            </Scrollbars>
          ) : null}
        </div>

        <div className={`absolute top-20 right-6 w-fit h-fit ${viewProfile}`}>
          <ProfileExpand />
        </div>
      </>
    );
  }
  // return (
  //   <>
  //     <div className="col-span-2 bg-jp-black">
  //       {clicked ? (
  //         <Scrollbars
  //           style={{ width: 540, height: 640 }}
  //           className="lg:mt-8 -mt-1 lg:ml-24 ml-3"
  //         >
  //           {listExpense
  //             ? listExpense.map((item) => {
  //                 return (
  //                   <List
  //                     setDeleteId={props.setDeleteId}
  //                     openModalConfirm={props.openModalConfirm}
  //                     expense={item}
  //                   />
  //                 );
  //               })
  //             : null}
  //         </Scrollbars>
  //       ) : null}
  //     </div>
  //     <div className="col-span-2 bg-jp-black">
  //       <Profile setViewProfile={setViewProfile} />
  //       <Analysis
  //         clicked={clicked}
  //         setClicked={setClicked}
  //         setListExpense={setListExpense}
  //         listExpense={listExpense}
  //       />
  //     </div>
  //     <div className={`absolute top-20 right-6 w-fit h-fit ${viewProfile}`}>
  //       <ProfileExpand />
  //     </div>
  //   </>
  // );
}
