import axios from "axios";

axios.defaults.baseURL = "http://localhost:3004/";
// axios.defaults.baseURL = "https://cd6b-58-65-197-79.ngrok-free.app";
// axios.defaults.baseURL = "https://backend.vidtrial.com";
// axios.defaults.baseURL = procees.env.ASDNJSAKDNBKJSA

let token = localStorage.getItem("token");

if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
