import axios from 'axios';

import {BASE_URL,token} from './config';


const usersAPI = {
    getUsers:  async () => {
        return  await axios.get(`${BASE_URL}/accounts?limit=50&offset=0`,
            {
                headers: {
                    "X-Leeloo-AuthToken" : token,
                    'Content-Type': 'application/json',
                } 
            })
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    getUser : async (userId) =>{
    return  await fetch(`${BASE_URL}/accounts/${userId}?include=contactedUsers,orders`,
    {
        headers: {
            "X-Leeloo-AuthToken" : token,
            'Content-Type': 'application/json',
        } 
    })
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
        console.log(error);
    });
};

export default usersAPI;