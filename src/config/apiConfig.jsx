import axios from "axios";

// axios.defaults.baseURL = "http://localhost:3004/";
axios.defaults.baseURL = "https://83ba-58-65-197-79.ngrok-free.app";
// axios.defaults.baseURL = "https://backend-eight-ruby.vercel.app/";
// axios.defaults.baseURL = "https://node-backend.viralbunch.com";

// let user = (localStorage.getItem('user'));
let token = localStorage.getItem("token");

if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

// // First we need to import axios.js
// import axios from "axios";
// // Next we make an 'instance' of it
// const instance = axios.create({
//   // .. where we make our configurations
//   baseURL: "http://localhost:3004/",
// });

// // Where you would set stuff like your 'Authorization' header, etc ...
// // instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";

// // Also add/ configure interceptors && all the other cool stuff

// instance.interceptors.request;

// export default instance;
