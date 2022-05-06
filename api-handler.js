const { WebSocket } = require('ws');
const { custom_err, status_request, data_request } = require('./template-client.js');
const ws = new WebSocket('wss://hri7566.info:4686');
let wsOpen = false;
ws.on('open', () => {
    wsOpen = true;
});
global.wsOpen = wsOpen;
export async function requestStatus(ws) {
    ws.send(JSON.stringify(new status_request()));
    ws.addEventListener("message", async function response(data) { return data; }, true);
    let rawData = await 
    response();
    try {
        recievedData = JSON.parse(rawData);
    } catch(err) {
        ws.send(JSON.stringify(new custom_err(4000, err.stack)));
        return "error grabbing data.";
    };
    return recievedData;
};