import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "side-text",
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaIcons.FaCartPlus />,
    cName: "side-text",
  },
  {
    title: "Contact Us",
    path: "/contacts",
    icon: <IoIcons.IoMdPeople />,
    cName: "side-text",
  },
  {
    title: "Payment",
    path: "/payment",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "side-text",
  },
  {
    title: "Favorite",
    path: "/favorite",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "side-text",
  },
  {
    title: "login",
    path: "/login",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "side-text",
  },
  {
    title: "Sign up",
    path: "/sign-up",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "side-text",
  },
  {
    title: "Logout",
    path: "/logout",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "side-text",
  },
];


 