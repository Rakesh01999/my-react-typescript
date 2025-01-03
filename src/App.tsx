import React, { ReactNode, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Container from "./components/Container";
import Teacher from "./components/Teacher";
import Status from "./components/Status";
import StatusContainer from "./components/StatusContainer";
import Parent from "./components/Parent";
import Button from "./components/Button";
import { idText } from "typescript";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

// const App: React.FC = () => {
const App: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const teacherList = [
    {
      firstName: "Jubayer",
      lastName: "Sir",
    },
    {
      firstName: "Galib",
      lastName: "Sir",
    },
    {
      firstName: "Nasim",
      lastName: "Sir",
    },
  ];

  return (
    // <div className="bg-gray-400 text-black">
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
            <div className="text-center">
              <h1 className="text-3xl font-bold">Contents</h1>
              <h1 className="text-3xl font-extrabold">Texts</h1>
              <h1 className="text-3xl font-extrabold text-green-600">Developed By Rakesh</h1>
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  );
};

export default App;
