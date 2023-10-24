import React, { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";

const GitLogo = require("../assets/logos/GitLogo.png");
const LinkedinLogo = require("../assets/logos/LinkedinLogo.png");
const KaggleLogo = require("../assets/logos/KaggleLogo.png");
const MailLogo = require("../assets/logos/MailLogo.png");

const JSIcon = require("../assets/icons/JSIcon.png");
const pyIcon = require("../assets/icons/PythonLogo.png");
const TSIcon = require("../assets/icons/TSIcon.png");
const sqlIcon = require("../assets/icons/SqlLogo.png");
const nuIcon = require("../assets/icons/nu.png");
const reactLogo=require("../assets/icons/ReactLogo.png");
const d=require("../assets/icons/DockerLogo.png");

const LeftBar = () => {
  const [showWebList, SetShowWebList] = useState(true);
  const [showProjectsList, SetShowProjectsList] = useState(true);

  const WebList = () => (
    <div>
      <a href="https://github.com/ChiranthR30/Yet-Another-Map-Reduce">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60 mb-3">
          <img
            src={pyIcon}
            alt="JS Icon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>Yet Another Map Reduce</p>
        </div>
      </a>
      <a href="https://github.com/ChiranthR30/DBMSPROJECT-SPORTS-MANAGEMENT-SYSTEM">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60 mb-3">
          <img
            src={sqlIcon}
            alt="TS Icon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>University Sports Management System</p>
        </div>
      </a>
      <a href="https://github.com/ChiranthR30/ARVR-Project-PESUFIRSTFLOOR">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60 mb-3">
          <img
            src={nuIcon}
            alt="JS Icon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>PESU Virtual Tour</p>
        </div>
      </a>
      <a href="https://github.com/ChiranthR30/AI_Summarizer">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60 mb-3.5">
          <img
            src={reactLogo}
            alt="JS Icon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>Sumz - AI Summarizer</p>
        </div>
      </a>

      <a href="https://github.com/ChiranthR30/Python-Microservices-Web-App">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12 w-60 mb-3.8">
          <img
            src={d}
            alt="JS Icon"
            className="w-7 mr-1  ml-5 text-yellow_vs"
          />
          <p>Microservices-Web App</p>
        </div>
      </a>
    </div>
  );

  return (
    <div className="text-[#a2aabc] text-lg mt-5 flex bg-[#262526] h-full">
      <div>
        <div
          className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
          onClick={() => SetShowProjectsList(!showProjectsList)}
        >
          {showProjectsList ? (
            <ChevronDownIcon className="w-7 mr-1" />
          ) : (
            <ChevronRightIcon className="w-7 mr-1" />
          )}
          <p>Projects</p>
        </div>
        {showProjectsList ? (
          <>
            <div
              className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
              onClick={() => SetShowWebList(!showWebList)}
            >
              {showWebList ? (
                <ChevronDownIcon className="w-7 mr-1  ml-5" />
              ) : (
                <ChevronRightIcon className="w-7 mr-1  ml-5" />
              )}

              <p>Web</p>
            </div>
            {showWebList ? <WebList /> : null}
          </>
        ) : null}
        <div className="absolute inset-x-0 bottom-10 ">
          <div className="flex px-6 space-x-7">
            <a href="https://github.com/ChiranthR30">
              <img
                src={GitLogo}
                alt="Git Logo"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>

            <a href="https://www.linkedin.com/in/chiranthr2002/">
              <img
                src={LinkedinLogo}
                alt="Linkedin Logo"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>
            <a href="mailto:chiranthr3@gmail.com">
              <img
                src={MailLogo}
                alt="Mail Logo"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>
            <a href="https://leetcode.com/chiranthr3">
              <img
                src={KaggleLogo}
                alt="Kaggle Logo"
                className="h-10 w-10 text-yellow_vs hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
