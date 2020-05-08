import axios from 'axios';

import {BASE_URL} from './config';


const usersAPI = {
    getUsers:  async () => {
        const token = localStorage.getItem('token');
        return  await axios.get(`${BASE_URL}/aircraft`,
            {
                headers: {
                    "Authorization" : `Bearer ${token}`,
                } })
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    createAircraft : async (data) =>{
        const token = localStorage.getItem('token');

        return   await fetch(`${BASE_URL}/aircraft`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                "Authorization" : `Bearer ${token}`,
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
    updateAircraft: async ( data) => {
        const token = localStorage.getItem('token');

        console.log(data);
        return   await fetch(`${BASE_URL}/aircraft/${data.id}`, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                "Authorization" : `Bearer ${token}`,
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        }).then((response) => {
            return response.json();
        })
            .then((data) => {
                return  data;
            }).catch(error=>{
                return error
            });

    },
    deleteAircraft: async (airportId) => {
        const token = localStorage.getItem('token');

        return  await axios.delete(`${BASE_URL}/aircraft/${airportId}`,
            {
                headers: {
                    "Authorization" : `Bearer ${token}`,
                } })
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
};

export default usersAPI;