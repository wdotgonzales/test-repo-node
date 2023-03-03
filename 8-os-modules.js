/* Operating System (OS) Module */
const os = require('os');

// Info about current user
const user = os.userInfo();
console.log(user);

// Method returns the system uptime in seconds
console.log('The System Uptime is ' + os.uptime() + ' seconds.');

const currentOS = {
    name : os.type(),
    released : os.release(),
    totalMemory : os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOS);