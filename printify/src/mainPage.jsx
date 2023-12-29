import Header from "./Header";
import Logo from "./Logo";
import "./css/main_content.css"
import Chart from "react-apexcharts"

import Dashboardchart from "./component/chart/Dshboardchart";
import "bootstrap/dist/css/bootstrap.css"
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; 

import { DashboardSifarishlar } from "./component/cell/DashboardSifarishlar";


export default function Mainpage(){
    var series1=[{
        name: 'werwe',
        data: [125, 110, 115, 40, 100, 90, 105,125]
      }]

      var  options1={
        title:{
            text:"Toplam Kazanç",
            margin:20
        },
        subtitle:{
          text:"$8,451",
          offsetX:1,
          style:{
            fontSize:20,
            fontWeight:"bold"
          }
        },
        grid:{
            show:false
        },
        colors:["#ff5215"],
        fill:{
            colors:["#ff5215"],
            type:["solid"]
        },
        chart: {
          id: 'apexchart-example',
          background:"#fff",
          toolbar:false
        },
        yaxis:{
            show:false
        },
        xaxis: {
          categories: [],
          show:false,
          labels:{
            show:false
          },
          axisBorder:{
            show:false
          }

        },
        dataLabels: {
          enabled: false
        },
      }

      var series2=[{
        name: 'werwe',
        data: [125, 110, 115, 40, 100, 90, 105,125]
      }]

      var  options2={
        title:{
            text:"Günlük Ziyaret",
            margin:20
        },
        subtitle:{
          text:"3,973",
          offsetX:1,
          style:{
            fontSize:20,
            fontWeight:"bold"
          }
        },
        grid:{
            show:false
        },
        colors:["#ff5215"],
        fill:{
            colors:["#ffe4e6"],
            type:["solid"]
        },
        chart: {
          id: 'apexchart-example',
          background:"#fff",
          toolbar:false
        },
        yaxis:{
            show:false
        },
        xaxis: {
          categories: [],
          show:false,
          labels:{
            show:false
          },
          axisBorder:{
            show:false
          }

        },
        dataLabels: {
          enabled: false
        },
      }

      var series3=[{
        name: 'werwe',
        data: [125, 110, 115, 40, 100, 90, 105,125]
      }]

      var  options3={
        title:{
            text:"Gelen Kullanici",
            margin:20
        },
        subtitle:{
          text:"7,333",
          offsetX:1,
          style:{
            fontSize:20,
            fontWeight:"bold"
          }
        },
        grid:{
            show:false
        },
        colors:["#ff5215"],
        fill:{
            colors:["#ff5215"],
            type:["solid"]
        },
        chart: {
          id: 'apexchart-example',
          background:"#fff",
          toolbar:false
        },
        yaxis:{
            show:false
        },
        xaxis: {
          categories: [],
          show:false,
          labels:{
            show:false
          },
          axisBorder:{
            show:false
          }

        },
        dataLabels: {
          enabled: false
        },
      }

      
      var series4=[{
        name: 'werwe',
        data: [125, 110, 115, 40, 100, 90, 105,125]
      }]

      var  options4={
        title:{
            text:"Gelen Kullanici",
            margin:20
        },
        subtitle:{
          text:"48,973",
          offsetX:1,
          style:{
            fontSize:20,
            fontWeight:"bold"
          }
        },
        grid:{
            show:false
        },
        colors:["#ff5215"],
        fill:{
            colors:["#ffe4e6"],
            type:["solid"]
        },
        chart: {
          id: 'apexchart-example',
          background:"#fff",
          toolbar:false
        },
        yaxis:{
            show:false
        },
        xaxis: {
          categories: [],
          show:false,
          labels:{
            show:false
          },
          axisBorder:{
            show:false
          }

        },
        dataLabels: {
          enabled: false
        },
      }

      var rowData=[
        {
          Ürünler:{name:"Tişort",image:"src/assets/avatar.jpg"},
          Fiyat:"$19.99",
          ÜrünID:"673849"
        },
        {
          Ürünler:{name:"Sweatshirt",image:"src/assets/avatar.jpg"},
          Fiyat:"$14.59",
          ÜrünID:"2454435"
        },
        {
          Ürünler:{name:"Kapüşunlu Sweatshirt",image:"src/assets/avatar.jpg"},
          Fiyat:"$25.22",
          ÜrünID:"8687687"
        },
        {
          Ürünler:{name:"Defter",image:"src/assets/avatar.jpg"},
          Fiyat:"$11.23",
          ÜrünID:"86768768"
        }
      ]
      var columns=[
        {
          field:"Ürünler",
          flex:2,
          cellRenderer:DashboardSifarishlar
        },
        {
          field:"Fiyat",
          flex:1
        },
        {
          field:"ÜrünID",
          flex:1
        }
      ]



    return (
        <div style={{display:"flex", flexDirection:"row", width:"100vw",height:"100vh"}}>
          <div id="leftPanel" style={{display:"flex",flexDirection:"column",flex:2}}>
               <div id="logo" style={{flex:1,minHeight:0,backgroundColor:"rgb(235 235 235)"}}>
                <Logo url="../public/pngegg.png"/>
               </div>
               <div id="menu" style={{flex:10,backgroundColor:"#ffffff"}}></div>
          </div>
          <div id="rightPanel" style={{display:"flex",flexDirection:"column",flex:10}}>
            <div id="header" style={{flex:1}}>
                <Header></Header>
            </div>
            <div id="content">
                <div className="section1">
                    <span>Günaydın,Lorem</span>                    
                </div>
                <div className="section2">
                    <div className="chart">
                      <Dashboardchart options={options1} percent="32%" updown="up" series={series1} title="Toplam Kazanç" ></Dashboardchart>
                    {/* <Chart options={options} series={series1} type="area" width={"100%"} height={"100%"} /> */}
                    </div>
                    <div className="chart">
                    <Dashboardchart options={options2} percent="4.5" updown="down" series={series2} title="Toplam Kazanç" ></Dashboardchart>
                    {/* <Chart options={options} series={series} type="area" width={"100%"} height={"100%"} /> */}
                    </div>
                    <div  className="chart">
                    <Dashboardchart options={options3} percent="12.5" updown="up" series={series3} title="Toplam Kazanç" ></Dashboardchart>
                    {/* <Chart options={options} series={series} type="area" width={"100%"} height={"100%"} /> */}
                    </div>
                    <div className="chart">
                    <Dashboardchart options={options4} percent="9.5" updown="up" series={series4} title="Toplam Kazanç" ></Dashboardchart>
                    {/* <Chart options={options} series={series} type="area" width={"100%"} height={"100%"} /> */}
                    </div>
                   
                </div>
                <div className="section3">
                  <div className="left">
                    <div className="header">
                      <div className="left">
                         Siparişlerim 
                      </div>
                      <div className="right">
                        <button className="btn btn-primary">view All</button>
                      </div>
                    </div>
                    <div className="grid">
                    <AgGridReact rowClass={"dashboardgridrow"} rowData={rowData} columnDefs={columns} />
                    </div>
                  </div>
                  <div className="right"></div>
                </div>
                <div className="section4"></div>
                <div className="section5"></div>
                <div className="section6"></div>
            </div>
        </div>
        </div>
    )
}