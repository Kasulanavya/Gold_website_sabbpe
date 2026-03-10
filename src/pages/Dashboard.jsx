//Directly into dashboard
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";
import BuyGold from "../dashboard/BuyGold";
import SellGold from "../dashboard/SellGold";
import Portfolio from "../dashboard/Portfolio";
import Profile from "../dashboard/Profile";

function Dashboard() {

  const [activeTab,setActiveTab] = useState("profile");

  const navigate = useNavigate();

  useEffect(()=>{

    const logged = localStorage.getItem("isLoggedIn");

    if(!logged){
      navigate("/login");
    }

  },[]);

  const renderContent = () => {

    switch(activeTab){

      case "profile":
        return <Profile/>

      case "portfolio":
        return <Portfolio/>

      case "buy":
        return <BuyGold/>

      case "sell":
        return <SellGold/>

      default:
        return null

    }

  };

  return (

    <div className="bg-black min-h-screen text-white">

      <DashboardNavbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="max-w-6xl mx-auto p-10">

        {renderContent()}

      </div>

    </div>

  );

}

export default Dashboard;