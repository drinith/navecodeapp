import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';//Axios é um cliente HTTP baseado em Promises para fazer requisições.
import keys from './config/keys'

export const myContext = createContext({name:"default",cargo:'default'})
//Buscar o usuário que está na API se existir e jogar no contexto
const Context = (props) => {
    const [userObject, setUserObject] = useState({name:"default",cargo:'default'});
    const [cargo,setCargo]=useState();

    useEffect(() => {
        console.log(keys.serverApi)
        axios.get('http://'+keys.serverApi + "/getuser", { withCredentials: true }).then((res) => {
            console.log(res.data);
            if (res.data) {
                setUserObject(res.data);
            }
        })
    }, [])

    return (
        <myContext.Provider value={userObject.name}>{props.children}</myContext.Provider>
    )
}
export default Context;

