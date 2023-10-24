import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div id="Resume" className="lg:w-1/2 text-center">
        <div>
          <div className="table">
            <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
            <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
              You can find my resume here - <a href="https://drive.google.com/file/d/12Gz_qa5Et-vrHxYLjiVSJheqpUZRZ3PT/view?usp=share_link" >RESUME</a>
            </code>
            <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
