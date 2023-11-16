import {server} from "./settings";
import fs from "fs";

const port:number = 3000;

server.listen(port);

console.log(`app started on port ${port}`);
console.log(`open in browser: http://localhost:${port}`);

