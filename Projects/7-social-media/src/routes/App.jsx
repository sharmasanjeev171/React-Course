import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import Header from ".././components/header";
import Footer from ".././components/Footer";
import Sidebar from ".././components/Sidebar";
import { useState } from "react";
import PostListProvider from ".././store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
