import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="p-3 overflow-hidden w-[40px] h-[40px] hover:w-[270px] border border-[#949494] rounded-full flex group items-center hover:duration-300 duration-300">
      <div className="flex items-center justify-center w-[22px] h-[22px] text-[#000]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Isolation_Mode"
          data-name="Isolation Mode"
          viewBox="0 0 24 24"
          width="18"
          height="18"
        >
          <path
            d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z"
          ></path>
        </svg>
      </div>
      <input
        type="text"
        className="outline-none text-[16px] bg-transparent w-full text-black font-normal px-4"
      />
    </div>
  );
};

export default SearchBar;
