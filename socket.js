import React from "react";
import { io } from "socket.io-client";


const SOCKET_SERVER_URL = 'http://192.168.2.55:8083';

const Socket = () =>{
    const socket = io(SOCKET_SERVER_URL,{
        transports:['websocket'],
    });
    socket.on("connect",()=>{
        console.log("socket connect");
    })

    socket.on("disconnect",()=>{
        console.log("socket disconnect");
    })
};
