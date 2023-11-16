import http from "http";
import {inputRouter} from "./routers/input-router";

export const server = http.createServer((request,response)=>{
    switch (request.url){
        case "/":
            response.write("Welcome");
            response.end();
            break;
        case "/input":
            inputRouter(request,response)
            break;
        default:
            response.write("404 not found");
            response.end();
    }
});

