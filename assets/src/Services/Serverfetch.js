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
        console.log(res)
        return await res.json();
    }catch(error){
    
        console.log('postUserSignIn Error:', error);
    }
    
    }