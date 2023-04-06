"use client";
import React from "react";
import { BiSearch } from "react-icons/bi";
import MenuItem from "./MenuItem";
import ThemeComp from "./ThemeComp";
import { useRouter } from "next/navigation";

const Header = () => {
  const [keyword, setKeyword] = React.useState("");
  const router = useRouter();
  const menu = [
    {
      name: "Haqqımızda",
      url: "/about",
    },
    {
      name: "Giriş",
      url: "/login",
    },
  ];

  const searchFunc = (e) => {
    if (e.key === "Enter" && keyword.length >= 3) {
      router.push(`/search/${keyword}`);
      setKeyword('')
    }
  };

  return (
    <div className="flex items-center gap-7 h-20 p-5">
      <div className="bg-amber-600 rounded-lg p-3 text-2xl font-bold">
        MovieApp
      </div>
      <div className="flex flex-1 items-center gap-2 border p-3 rounded-lg">
        <input
        value={keyword}
          onKeyDown={searchFunc}
          onChange={(e) => setKeyword(e.target.value)}
          className="outline-none flex-1 bg-transparent"
          type="text"
          placeholder="Axtarış..."
        />
        <BiSearch size={25} />
      </div>
      <ThemeComp />
      {menu.map((mn, i) => (
        <MenuItem key={i} mn={mn} />
      ))}
    </div>
  );
};

export default Header;
