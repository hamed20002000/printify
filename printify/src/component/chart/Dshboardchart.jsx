
import {FaArrowUp,FaArrowDown} from "react-icons/fa"
import Chart from "react-apexcharts"
import "../../css/dashboard_charts.css"

export default function Dashboardchart(props){


    return(
                    <div className="subchart">
                        <div className="statics">
                             {props.updown=="up"?<FaArrowUp></FaArrowUp>:<FaArrowDown></FaArrowDown>}
                             <div style={{marginRight:".2vw"}}><span>{props.percent}</span></div>
                        </div>
                      <Chart options={props.options} series={props.series} type="area" width={"100%"} height={"100%"} />
                    </div>
    );

}
function ChartupLeft (props){
  return (
    <div>
      <div>
        <span>{props.title}</span>
      </div>
      <div>
        <span>{props.subtitle}</span>
      </div>
    </div>
  )
}