import { server } from "./server.js";

const port = 8888;

server.listen(port, () => console.log(`Server is running at Port ${port}`));
