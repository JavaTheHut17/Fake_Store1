import { Platform } from "react-native";

const server = Platform.OS === 'android' ? 'https2//10.0.2.2' : 'http://localhost';

const port = '3000';

export const fetchGetUsers = async () =>{

    try{
        const url = `${server}:${port}/users`;
        const res = await fetch(url);
        return await res.json();
    }catch(error){

        console.log('fetchUsers Error:', error);
        return {error: error};
    }
}


export const postUserSignUp = async (userData) => {

try{
    const url = `${server}:${port}/users/signup`;
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    // console.log(res)
    return await res.json();
}catch(error){

    console.log('postUserSignUp Error:', error);
}

}


export const postUserLogIn = async (userData) => {

    try{
        const url = `${server}:${port}/users/signin`;
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
               
            },
            body: JSON.stringify(userData),
        });
        return await res.json();
    }catch(error){
    
        console.log('postUserSignIn Error:', error);
    }
    
    }


    export const postNewUserOrder = async (userData, token) => {
        try {
            const url = `${server}:${port}/orders/neworder`;
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(userData),
            });
    
            if (!res.ok) {
                // Handle non-OK responses (e.g., 4xx or 5xx errors)
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
    
            const responseData = await res.json();
            return responseData; // Return the parsed response data
        } catch (error) {
            console.log('postNewUserOrder Error:', error);
            // Return an error object or message to indicate the failure
            return { error: 'An error occurred while processing your request.' };
        }
    };



export const getUserOrders = async (userData) => {

    try{
        const url = `${server}:${port}/orders/all`;
        const res = await fetch(url,{
            headers: {
                Authorization: `Bearer ${userData}`,
            },
        })
        return await res.json();
    }catch(error){
    
        console.log('postUserSignIn Error:', error);
    }
    
    }


    export const postCart = async (userData, token) => {
        try {
            const url = `${server}:${port}/cart`;
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(userData),
            });
    
            if (!res.ok) {
                // Handle non-OK responses (e.g., 4xx or 5xx errors)
                throw new Error(`HTTP error! Status: ${res.status}`);

            }
    
            const responseData = await res.json();
            return responseData; // Return the parsed response data
        } catch (error) {
            console.log('postNewUserOrder Error:', error);
            // Return an error object or message to indicate the failure
            return { error: 'An error occurred while processing your request.' };
        }
    };