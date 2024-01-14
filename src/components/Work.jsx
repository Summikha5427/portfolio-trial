import React from "react";
import WorkImg from "../assests/workImg.jpeg";
import RealEstate from "../assests/realestate.jpg";

const Work = () => {
  return (
    // Screen Container
    <div name="Work" className="w-full md:h-screen bg-[#0a192f] text-gray-300 ">
      {/* Work Container */}
      <div className="max-w-[1000px] mx-auto p-4  flex flex-col justify-center w-full h-full">
        {/* sub-Container */}
        <div className="">
          <p className="font-bold text-4xl inline border-b-4 border-purple-300">
            Work
          </p>
          <p className="py-2">These are Few of my works done.</p>
        </div>

        {/* Projects{grid}-Container */}
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {/* CARD-item {projects-1} */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              {/* hoveritems _buttons -1*/}
              <div className="pt-4 text-center">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Tic Tac Toe Game
                </span>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Sumiakhan/Projects/tree/68607f9c9da0995e74f2b9ec05752ad3465c2f4a/ttt">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <p className="text-2xl font-bold text-white tracking-wider">
                  React Hooks Redux Code
                </p>
              </div>
            </div>
          </div>

          {/* CARD-item {project-2} */}
          <div
            style={{ backgroundImage: `url(${RealEstate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                SQL Project
              </span>
              {/* hoveritems _buttons -2*/}
              <div className="pt-2 text-center">
                <a href="https://github.com/Sumiakhan/Projects/blob/cab95121f234a224172e6306f3f58123e63b8405/SQL%20Query.sql">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* CARD-item {project-3} */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 pt-2 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Devops Project
              </span>

              {/* hoveritems _buttons -3 */}
              <div className="pt-2 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Working on Devops
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* CARD-item {project-4} */}
          <div
            style={{ backgroundImage: `url(${RealEstate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 pt-2 text-center">
            <span className="text-2xl font-bold text-white tracking-wider">
                BookStore -
                MERN Application
              </span>

              {/* hoveritems _buttons -4 */}
              <div className="pt-2 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                   Demo
                  </button>
                </a>
                <a href="https://github.com/Sumiakhan/Projects/tree/cab95121f234a224172e6306f3f58123e63b8405/BookStore-MERN">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* CARD-item {project-5} */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                FrontEnd Application
              </span>

              {/* hoveritems _buttons -5*/}
              <div className="pt-2 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <p className="text-2xl font-bold text-white tracking-wider pt-2">
                
                My Portfolio
              </p>
              </div>
            </div>
          </div>

          {/* CARD-item {project-6} */}
          <div
            style={{ backgroundImage: `url(${RealEstate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects -6 */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                BackEnd Application
              </span>

              {/* hoveritems _buttons */}
              <div className="pt-2 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <p className="text-2xl font-bold text-white tracking-wider">
                Working on project
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
