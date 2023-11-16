import http from "http";

export const inputRouter = (req: http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage>) => {
    switch (req.method) {
        case "GET":
            res.write("Please send data")
            res.end();
            break;
        case "POST":
            let file: string = "";
            req.on('data', (chunk) => {
                file += Buffer.from(chunk, 'utf16le').toString('utf16le');
                let arr: Array<any> = file.split("\r\n");
                arr = arr.map((x) => x.split("\t").map(x => x.replace(`"`, ``).replace(`"`, ``)));
                console.log(arr)
                console.log(typeof arr)
                res.write("file received");
                res.end();
            });
            req.on("end", () => {

            })
            break;
    }
}