
import Avatar from "react-avatar"

export function DashboardSifarishlar(props){

    return (
        <div style={{display:"flex",flex:1,justifyContent:"center",alignItems:"center",paddingLeft:"3vw"}}>
             <Avatar src={props.value.image}></Avatar>
             <span>{props.value.name}</span>
            </div>
    )
}