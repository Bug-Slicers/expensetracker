import "./App.css";
import LandingPage from "./Pages/LandingPage";
import Modal from "react-modal";
import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import DashBoard from "./Pages/DashBoard";
import AddExpense from "./components/AddExpense";
import { Routes, Route } from "react-router-dom";
import SetBudget from "./components/SetBudget";
import Main from "./Pages/Main";
import MainAnalysis from "./Pages/MainAnalysis";
import MainSpendAnalysis from "./Pages/MainSpendAnalysis";
import MainDaily from "./Pages/MainDaily";
import Developers from "./Pages/Aboutus";
import ConfirmDelete from "./Pages/ConfirmDelete";
import { Scrollbars } from "react-custom-scrollbars";
import Contact from "./Pages/contactUs";

Modal.setAppElement("#root");

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpenLogin, setIsOpenLogin] = useState(false);
  const [modalIsOpenExpense, setIsOpenExpense] = useState(false);
  const [modalIsOpenBudget, setIsOpenBudget] = useState(false);
  const [modalisOpenConfirm, setIsOpenConfirm] = useState(false);
  const [modalIsOpenContact, setIsOpenContact] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState();

  const [deleteId, setDeleteId] = useState();

  function openModalContact() {
    setIsOpenContact(true);
  }

  function closeModalContact() {
    setIsOpenContact(false);
  }

  function openModalConfirm() {
    setIsOpenConfirm(true);
  }

  function closeModalConfirm() {
    setIsOpenConfirm(false);
  }
  function openModalExpense() {
    setIsOpenExpense(true);
  }

  function closeModalExpense() {
    setIsOpenExpense(false);
  }
  function openModalBudget() {
    setIsOpenBudget(true);
  }

  function closeModalBudget() {
    setIsOpenBudget(false);
  }

  function openModalSignup() {
    setIsOpen(true);
  }

  function closeModalSignup() {
    setIsOpen(false);
  }
  function openModalLogin() {
    setIsOpenLogin(true);
  }

  function closeModalLogin() {
    setIsOpenLogin(false);
  }

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(58, 63, 69, 0.71)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#1E2329",
      border: "2px solid #FFFFFF",
      color: "#FFFFFF",
      width: `${window.innerWidth > 420 ? "40%" : "95vw"} `,
      // width: "40%",
    },
  };

  const customStylesContact = {
    overlay: {
      backgroundColor: "rgba(58, 63, 69, 0.71)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#1E2329",
      border: "2px solid #FFFFFF",
      color: "#FFFFFF",
      width: "70%",
      height: "82%",
    },
  };

  return (
    <Scrollbars style={{ width: "100vw", height: "100vh" }}>
      <div className="font-lexend overflow-x-hidden">
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                openModalContact={openModalContact}
                openModalSignup={openModalSignup}
                openModalLogin={openModalLogin}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              ></LandingPage>
            }
          />
          <Route
            path="dashboard"
            element={
              <DashBoard
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                openModalExpense={openModalExpense}
              />
            }
          >
            <Route
              path=""
              element={
                <Main
                  setDeleteId={setDeleteId}
                  openModalConfirm={openModalConfirm}
                  openModalBudget={openModalBudget}
                />
              }
            ></Route>

            <Route
              path="analysis"
              element={
                <MainAnalysis
                  setDeleteId={setDeleteId}
                  openModalConfirm={openModalConfirm}
                />
              }
            ></Route>

            <Route
              path="dailyspendanalysis"
              element={<MainSpendAnalysis />}
            ></Route>

            <Route
              path="daily"
              element={
                <MainDaily
                  setDeleteId={setDeleteId}
                  openModalConfirm={openModalConfirm}
                />
              }
            ></Route>
          </Route>

          <Route path="/about-us" element={<Developers />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModalSignup}
          style={customStyles}
        >
          <button onClick={closeModalSignup}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <Signup
            closeModalSignup={closeModalSignup}
            openModalLogin={openModalLogin}
          />
        </Modal>
        <Modal
          isOpen={modalIsOpenLogin}
          onRequestClose={closeModalLogin}
          style={customStyles}
        >
          <button onClick={closeModalLogin}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <Login
            closeModalLogin={closeModalLogin}
            openModalSignup={openModalSignup}
          />
        </Modal>

        <Modal
          isOpen={modalIsOpenExpense}
          onRequestClose={closeModalExpense}
          style={customStyles}
        >
          <button onClick={closeModalExpense}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <AddExpense closeModalExpense={closeModalExpense} />
        </Modal>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModalSignup}
        style={customStyles}
      >
        <button onClick={closeModalSignup}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <Signup
          closeModalSignup={closeModalSignup}
          openModalLogin={openModalLogin}
        />
      </Modal>

      <Modal
        isOpen={modalIsOpenLogin}
        onRequestClose={closeModalLogin}
        style={customStyles}
      >
        <button onClick={closeModalLogin}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <Login
          closeModalLogin={closeModalLogin}
          openModalSignup={openModalSignup}
        />
      </Modal>

      <Modal
        isOpen={modalIsOpenExpense}
        onRequestClose={closeModalExpense}
        style={customStyles}
      >
        <button onClick={closeModalExpense}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <AddExpense closeModalExpense={closeModalExpense} />
      </Modal>

      <Modal
        isOpen={modalIsOpenBudget}
        onRequestClose={closeModalBudget}
        style={customStyles}
      >
        <button onClick={closeModalBudget}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <SetBudget closeModalBudget={closeModalBudget} />
      </Modal>

      <Modal
        isOpen={modalisOpenConfirm}
        onRequestClose={closeModalConfirm}
        style={customStyles}
      >
        <button onClick={closeModalConfirm}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <ConfirmDelete
          deleteId={deleteId}
          closeModalConfirm={closeModalConfirm}
        />
      </Modal>
      <Modal
        isOpen={modalIsOpenContact}
        onRequestClose={closeModalContact}
        style={customStylesContact}
      >
        <button onClick={closeModalContact}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <Contact closeModalContact={closeModalContact} />
      </Modal>
    </Scrollbars>
  );
}

export default App;
