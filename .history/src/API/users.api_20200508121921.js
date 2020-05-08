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
    getUser : async (data) =>{
        https://api.leeloo.ai/api/v1/accounts/:account_id?include=contactedUsers,orders
        return  await fetch(`${BASE_URL}/aircraft`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                "X-Leeloo-AuthToken" : token,
                'Content-Type': 'application/json',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        }).then((response) => {
            return response.json();
        })
            .then((data) => {
                return  data;
            });

    },
};

export default usersAPI;