import axios from 'axios'
import { GETUSERS } from './Actiontype'
export const getUsers=() =>async(dispatch)=>{
    try {
        await axios.get('/user/get').then(res=>dispatch({type:GETUSERS,payload:res.data}))
    } catch (error) {
        console.log(error)
    }
}
export const addUser=(data) => async(dispatch)=>{
    try {
        await axios.post("/user/add",data).then(res=>dispatch(getUsers()))
    } catch (error) {
        console.log(error)
    }
}