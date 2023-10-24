import React from "react";

function Header() {
  return (
    <div id="Header" className="mx-12 lg:mx-60 pt-60 items-center justify-center lg:w-1/2 text-justify">
      <div className="flex flex-col">
        <code className="text-lightblue_vs">Hi, my name is</code>
        <code className="text-[#e6f1ff] text-7xl mt-5">Chiranth R</code>
      </div>
<code className="text-lightblue_vs">A passionate Computer Science student from PES University</code>
      <button
        className="border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2"
      >

        <code>
	<a href="https://github.com/ChiranthR30">Check out my Projects !
	</a>
	</code>
      </button>
    </div>
  );
}

export default Header;
