import { useQuery } from "react-query";
import axios from "axios";

export const fetchDataUsers = async() => {

    const apiUrl = 'https://back-prueba-698p.onrender.com/datos/usuarios';
    const response = await axios.get(apiUrl);

    return response.data;
}

export const useDataUsers = () => {
    return useQuery(['data-users'], () => fetchDataUsers(), {
        retryOnMount: true,
        retry: 3,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
        cacheTime: 0,
    })
}