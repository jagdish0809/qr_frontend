import axios from "axios";
const host = "http://localhost:5000";

export const getServers = async () => {
    try {
        let response = await axios.get(`${host}/`);
        return response;
    } catch (error) {
        let response = "Error in getting servers";
        return response;
    }
}

export const user = async (data) => {
    try{
        let response = await axios.post(`${host}/api/user`, data);
        return response;
    }catch(error){
        console.log(error);
    }
}

export const scanUser = async (data) => {
    try{
        let response = await axios.post(`${host}/api/scanuser`, data);
        return response;
    }catch(error){
        console.log(error);
    }
}