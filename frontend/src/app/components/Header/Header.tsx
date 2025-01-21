'use client';

import React from "react";
import Logo from "../Logo";
import SearchBar from "../Searchbar/Searchbar";
import Favorites from "../Favorites/Favorites";
import Cart from "../Cart/Cart";
import Avatar from "../Avatar/Avatar";
import { useAuth } from "../../hooks/useAuth";
import Categories from "../Categories/Categories";
export default function Header() {
    const { isAuthenticated } = useAuth();

    return (
        <header className="h-24">
            <div className="h-full flex items-center container mx-auto justify-between border-b-2 border-gray-300">
                <Logo margin='0' />
                <div className="flex justify-center">
                    <Categories />
                </div>
                <div className="flex items-center gap-5">
                    <SearchBar />
                        {isAuthenticated && (
                            <>
                                <div>
                                    <Favorites />
                                </div>
                                <div>
                                    <Cart />
                                </div>
                            </>
                        )}
                    <div className="hover:cursor-pointer">
                        <Avatar />
                    </div>
                </div>
            </div>
        </header>
    )
}