import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ToMessages() {
    const navigate = useNavigate();
    useEffect(()=>{
        navigate('/messages');
    })
    return(<></>)
}

export default ToMessages
