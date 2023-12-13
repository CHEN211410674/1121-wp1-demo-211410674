import React, {useEffect} from 'react'

const Alert_74 =({msg, type, removeAlert})=> {

    useEffect(()=>{
        const timeout = setTimeout(()=>{
        removeAlert();
        }, 3000);
    });
    return <p className={`alert alert-${type}`}>{msg}</p>
};

export default Alert_74