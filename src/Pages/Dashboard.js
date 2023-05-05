import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Chart from "react-apexcharts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell,faPieChart,faTags,faCalendar,faGear, faUser,faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Total_Revenue, Total_Transactions,Total_Likes,Total_Users, Transactions, Schedules, Users, Settings, Dash, Notifications, Profile,search, Search, Rarrow, Darrow } from "./Icons";


function Dashboard() {

  const navigate=useNavigate();
    const data = {
        series: [
          {
            name: 'Guest',
            data: [30, 40, 35, 50],
          },
          {
            name: 'User',
            data: [23, 12, 54, 61],
          },
        ],
        options: {
          chart: {
            height: 350,
            type: 'line',
          },
          legend: {
            position: "top",
          },
          xaxis: {
            categories: ['Week1', 'Week2', 'Week3', 'Week4'],
          },
          stroke: {
            curve: 'smooth',}
        },
      };
      
  const data1 = {
    series: [44, 55, 13],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Basic Tees", "Custom Shot Pants", "Super Hoodies"],
      
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
           
          },
        },
      ],
    },
  };

  return (
    <div className="dashboard-page">
      <div className="left-bar">
        <div  className="left-top-content">
        <div className="heading1">Board.</div>
        <div className="dashboard-LB"><Dash/>Dashboard....</div>
        <div className="contents"><Transactions/>Transactions</div>
        <div className="contents"><Schedules/>Schedules</div>
        <div className="contents">< Users />Users</div>
        <div className="contents"><Settings />Settings</div>
        </div>
        <div className="left-bottom-content">
        <div className="contents1">Help</div>
        <div className="contents1">Contact Us</div>
        </div>
      </div>
      <div className="right-bar">
        <div className="top-bar-box">
        <p className="dash-RB">Dashboard</p>
        <div className="see-all1">
        <form>
  <input type="search" placeholder="Search..."/>
  <button type="submit">Search</button>
</form>
      
      
      <Notifications/>
      <Profile />
      {/* <button className="button-1" onClick={()=>(navigate(-1))}>
      Logout
      </button> */}
      </div>
    </div>
        <div className="cards-container">
          <div className="card1">
            <div className='card1-content'>
              <div className='cards-heading'>Total Revenues</div>
            <div className="card1-values" >$2,129,430</div>
            </div>
            <div className="icon-card"><Total_Revenue/></div>
            
            </div>
          <div className="card2">
            <div className="card2-content">
              <div className="cards-heading">Total Transactions</div>
            <div className="card2-values">1,520</div>
            </div>
            <div className="icon-card"><Total_Transactions /></div>
          
            </div>
          <div className="card3">
            <div className="card3-content">
              <div className="cards-heading">Total Likes</div> 
            <div className="card3-values">9,721</div>
            </div>
          <div className="icon-card"><Total_Likes /></div>
          
          </div>
          <div className="card4">
           <div className="card4-content"> 
           <div className="cards-heading">Total Users</div>
           <div className="card4-values">892</div>
           </div>
            
          <div className="icon-card"><Total_Users /></div>
          
          </div>
        </div>
        <div className="line-chart-container">
          <h2>Activities</h2>
          <Chart
            options={data.options}
            series={data.series}
            type="line"
            height={350}
            
          />
        </div>
        <div className="chart-containers">
        <div className="pie-chart-container1">
        <div className="top-bar-box">
          <h2 className="today-heading">Top Products</h2>
          <div className="see-all">May - June 2021 <div className="Darrow"><Darrow /></div></div>
          </div>
          <Chart
            options={data1.options}
            series={data1.series}
            type="pie"
            width={380}
          />
        </div>
        <div className="schedule-container">
        <div className="top-bar-box">
          <h2 className="today-heading">Today's schedule</h2>
          <div className="see-all">See All <div className='Rarrow'><Rarrow /></div></div>
          </div>
          <div className="schedules">
          <div className="address1">

            <div className="rectangle1"></div>
            <div className="schedule-content">
            <div className="font">Meeting with suppliers from Kutta Bali</div>
            <div className="timings">14.00-15.00</div>
            <div className="location">At Sunset Road ,Kutta ,Bali</div>
            </div>
         </div>
          <div className="address1">
          <div className="rectangle2"></div>
          <div className="schedule-content">
            <div className="font">Check operation at Giga Factory 1</div>
            <div className="timings">16.00-18.00</div>
            <div className='location'>at Central Jakarta</div>
            </div>
          </div>
        </div>

        </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;