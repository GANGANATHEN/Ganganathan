// import react-icons start
import { AiOutlineDashboard } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import { TiClipboard } from "react-icons/ti";
import { FiType } from "react-icons/fi";
import { MdOutlineFormatColorFill } from "react-icons/md";
import { FaBarcode } from "react-icons/fa";
import { AiOutlineChrome } from "react-icons/ai";
import { FaQuestion } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsGraphDownArrow } from "react-icons/bs";
// import react-icons end

export const navLinks = [
  {
    id: 0,
    p: "Navigation",
    link:"/dashboard",
    icon: <AiOutlineDashboard />,
    link_p: "Dashboard",
  },
  {
    id: 1,
    p:"Authentication",
    link:"/login",
    icon: <AiOutlineLogin />,
    link_p: "Login",
  },
  {
    id: 2,
    link:"/register",
    icon: <TiClipboard />,
    link_p: "Register",
  },
  {
    id: 3,
    p: "Utilities",
    link:"/dashboard/typography",
    icon: <FiType />,
    link_p: "Typography",
  },
  {
    id: 4,
    link:"/dashboard/color",
    icon: <MdOutlineFormatColorFill />,
    link_p: "Color",
  },
  {
    id: 5,
    link:"/dashboard/shadow",
    icon: <FaBarcode />,
    link_p: "Shadow",
  },
  {
    id: 6,
    p:"Support",
    link:"/dashboard/samplepage",
    icon: <AiOutlineChrome />,
    link_p: "Sample Page",
  },
  {
    id: 7,
    link:"https://codedthemes.gitbook.io/mantis",
    icon: <FaQuestion />,
    link_p: "Documentation",
  },
];
export const dashBoard = [
  {
    id: 0,
    title:"Total Page Views",
    total:"4,42,236",
    icon:<BsGraphUpArrow />,
    rate:"59.3%",
    para1:"You made an extra",
    para2:"this",
    para3: "year",
    number:"35,000"
  },
  {
    id: 1,
    title:"Total Users",
    total:"78,250",
    icon:<BsGraphUpArrow />,
    rate:"70.5%",
    para1:"You made an extra",
    para2:"this",
    para3: "year",
    number:"8,900"
  },
  {
    id: 2,
    title:"Total Order",
    total:"18,800",
    icon:<BsGraphDownArrow />,
    rate:"27.4%",
    para1:"You made an extra",
    para2:"this",
    para3: "year",
    number:"1,943"
  },
  {
    id: 3,
    title:"Total Sales",
    total:"35,078",
    icon:<BsGraphDownArrow />,
    rate:"27.4%",
    para1:"You made an extra",
    para2:"this",
    para3: "year",
    number:"20,395"
  },

]

export const Orders =[
  {
    id:0,
    tracking:"13256498",
    product:"Keyboard",
    order:"125",
    status:"Rejected",
    total:"$70,999"
  },
  {
    id:1,
    tracking:"13286564",
    product:"Computer Accessories",
    order:"100",
    status:"Approved",
    total:"$83,348"
  },
  {
    id:2,
    tracking:"84564564",
    product:"Camera Lens",
    order:"40",
    status:"Rejected",
    total:"$40,570"
  },
  {
    id:3,
    tracking:"86739658",
    product:"TV",
    order:"99",
    status:"Pending",
    total:"$410,780"
  },
  {
    id:4,
    tracking:"98652366",
    product:"Handset",
    order:"50",
    status:"Approved",
    total:"$10,239"
  },
  {
    id:5,
    tracking:"98753263",
    product:"Mouse",
    order:"89",
    status:"Rejected",
    total:"$10,570"
  },
  {
    id:6,
    tracking:"98753275",
    product:"Desktop",
    order:"185",
    status:"Approved",
    total:"$98,063"
  },{
    id:7,
    tracking:"98753291",
    product:"Chair",
    order:"100",
    status:"Pending",
    total:"$14,001"
  },
  {
    id:8,
    tracking:"98756325",
    product:"Mobile",
    order:"355",
    status:"Approved",
    total:"$90,989"
  },
  {
    id:9,
    tracking:"98764564",
    product:"Laptop",
    order:"300",
    status:"Pending",
    total:"$180,139"
  },
 
]