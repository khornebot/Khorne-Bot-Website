const ws = new WebSocket('wss://hri7566.info:4686');
let wsOpen = false;
try {
    ws.on('open', () => {
        wsOpen = true;
    });
} catch(err) {
    console.log("Caught exception!");
    async function requestStatus(ws) {
        return "error grabbing data. ";
    }
}
async function requestStatus(ws) {
    try {
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
    } catch(err) {
        return "error grabbing data.";
    };
};
function time(ms) {
    if (ms >= 10000000000000) {
        return 'forever';
    }
    if (ms >= 31536000000) {
        return Math.round((ms / 31536000000) * 10) / 10 + ' years';
    }
    if (ms >= 2592000000) {
        return Math.round((ms / 2592000000) * 10) / 10 + ' months';
    }
    if (ms >= 604800000) {
        return Math.round((ms / 604800000) * 10) / 10 + ' weeks';
    }
    if (ms >= 86400000) {
        return Math.round((ms / 86400000) * 10) / 10 + ' days';
    }
    if (ms >= 3600000) {
        return Math.round((ms / 3600000) * 10) / 10 + ' hours';
    }
    if (ms >= 60000) {
        return Math.round((ms / 60000) * 10) / 10 + ' minutes';
    }
    if (ms >= 1000) {
        return Math.round((ms / 1000) * 10) / 10 + ' seconds';
    }
    return ms + ' milliseconds';
};
async function checkStatus() {
let botStatus = await requestStatus();
if (botStatus == 'error grabbing data.') {
    document.getElementById('status').innerHTML = "Current bot status: error grabbing data from bot.";
} else if (botStatus.type == 'err') {
    document.getElementById('status').innerHTML = "Current bot status: ERR CODE " + botStatus.data.code + ". ";
} else if (botStatus.type == 'data') {
    document.getElementById('status').innerHTML = "Current bot status: Active: " + botStatus.data.active + " Uptime: " + time(botStatus.data.uptime) + ". ";
}
}
checkStatus()