"use client"
import Image from "next/image";
// import Practice1 from "./components/practice1";
// import Task1 from "./tasks/task1"
// import Task2 from "./tasks/Task2"
// import Task3 from "./tasks/Task3"
// import Task5 from "./tasks/task5"
// import Task5_1 from "./tasks/task5_1"
// task 6 start
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Mainp from "./tasks/task6/Main"
// import Homee from "./tasks/task6/Home";
// import Favourites from "./tasks/task6/Favourites";
// import Store from "./tasks/task6/Store";
// import About from "./tasks/task6/About";
// task 6 end
// import Page from "./store/page"
// import Mainpage from "./Approuter/page";
//context-text-practice
// import Homee from "./try/context_text/home"
// import Contact from "./try/context_text/contact"
// import Store from "./try/zustand/page1";
// import Store1 from "./try/zustand/page2";
import Task7 from "./tasks/task7"


export default function Home() {
  return (
    <div>
      <div>
          {/* <Practice1 /> */}
          {/* <Task1 /> */}
          {/* <Task2 /> */}
          {/* <Task3 /> */}
          {/* <Task5 /> */}
          {/* <Task5_1 /> */}
          {/* task 6 start
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Mainp />} >
                      <Route index element={<Homee />} />
                      <Route path="Home" element={<Homee />} />
                      <Route path="About" element={<About />} />
                      <Route path="Store" element={<Store />} />
                      <Route path="Favourite" element={<Favourites />}/>
                  </Route>
              </Routes>
          </BrowserRouter>
          task 6 end */}
          {/* <Page /> */}
          {/* <Mainpage /> */}
          {/* <Homee/> */}
          {/* <Contact/> */}
          {/* <Store />
          <Store1 /> */}
      </div>
        <Task7 />
    </div>
  );
}
