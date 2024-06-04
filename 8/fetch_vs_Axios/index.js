const express = require('express')
const axios = require('axios');
const { header } = require('express/lib/request');

async function main(){
    const response = await axios.post("https://httpdump.app/dumps/b46351db-a5f8-4dac-a049-396b075e591f" , {
        username:"dragon",
        password:"hekjwklr"
    },{
        headers:{
            auth:"bearer"
        }
    })

    console.log(response.data)
}



main();

// function main(){
// fetch("https://sum-server.100xdevs.com/todos")
// .then(async (res)=>{
//     const json = await res.json()
//     console.log(json)
// })


// }
// main();