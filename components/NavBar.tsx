"use client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { SignIn_Popup } from "./SignIn_Popup";
import { useState } from "react";

const handleClickScrollCal = () => {
  const element = document.getElementById("Cal");
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const handleClickScrollContact = () => {
  const element = document.getElementById("contact");
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const handleClickScrollHome = () => {
  const element = document.getElementById("Home");
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const navigation = [
  { name: "Home", href: handleClickScrollHome, current: false },
  {
    name: "Currency Caculator",
    href: handleClickScrollCal,
    current: false,
  },
  { name: "Contact me", href: handleClickScrollContact, current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const [buttonPopUp, setButtonPopUp] = useState(false);

  const handleClickSignIn = () => {
    return setButtonPopUp(true);
  };
  return (
    <>
      <Disclosure as="nav" className="bg-transpalent absolute w-[85%]">
        {({ open }) => (
          <>
            <div className=" max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex justify-between w-full ">
                  <div className="my-auto font-bold">CURRENCY HELPER</div>
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex space-x-4">
                        {navigation.map((item) => (
                          <button
                            key={item.name}
                            onClick={item.href}
                            className={classNames(
                              item.current
                                ? "bg-[#7B6ABF] text-white hover:bg-[#584c88]"
                                : "text-gray-300 hover:text-white hover:bg-[#433969]",
                              "rounded-md px-3 py-2 text-sm font-medium transition-all duration-150"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </button>
                        ))}
                        <button
                          key={"Sign In"}
                          onClick={handleClickSignIn}
                          className={classNames(
                            true
                              ? "bg-[#7B6ABF] text-white hover:bg-[#584c88]"
                              : "text-gray-300 hover:text-white hover:bg-[#433969]",
                            "rounded-md px-3 py-2 text-sm font-medium transition-all duration-150"
                          )}
                          aria-current={true ? "page" : undefined}
                        >
                          Sign In
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
      <SignIn_Popup
        trigger={buttonPopUp}
        setClosed={setButtonPopUp}
      ></SignIn_Popup>
    </>
  );
}
