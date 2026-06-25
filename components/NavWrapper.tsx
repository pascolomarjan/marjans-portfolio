"use client";
import {useState} from "react";
import MenuButton from "./MenuButton";
import {Navbar} from "./NavBar";
import clsx from "clsx";

export default function NavWrapper({children}: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <div className="flex min-h-screen">

            {isOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/10 md:hidden"
                    onClick={closeMenu}
                />
            )}

            <div className="md:hidden fixed top-4 left-0 pl-12 pt-2 z-50">
                <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} size={24}/>
            </div>

            <aside className={clsx(
                `fixed md:hidden h-screen \
        inset-y-0 left-0 z-40 w-64 p-12 pt-18 bg-background \
        transition-transform duration-300 md:translate-x-0`,
                {
                    "translate-x-0": isOpen,
                    "-translate-x-full": !isOpen
                }
            )}>
                <Navbar onLinkClick={closeMenu}/>
            </aside>

            <div className="flex-1 pt-0">
                <div
                    className="flex flex-row gap-8 justify-end md:justify-between md:items-center w-full sticky top-0 bg-background px-sm-padding-x md:px-md-padding-x z-15">
                    <div className="hidden md:block py-6">
                        <Navbar/>
                    </div>
                    {/* TODO: Align h5 text to the right when split into two lines */}
                    <h5 className="py-6 w-fit">
                        Marjan Pascolo
                    </h5>
                </div>

                <main className="flex-1 pt-2">
                    {children}
                </main>
            </div>

        </div>
    );
}