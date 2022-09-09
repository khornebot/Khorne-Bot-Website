import { requestStatus } from './api-handler.js';
let botStatus = requestStatus();
if (botStatus == 'error grabbing data.') {
    document.getElementById('currentStatus').innerHTML = "Current bot status: error grabbing data.";
}
document.getElementById('').innerHTML += ;