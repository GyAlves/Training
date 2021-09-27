const os = require("os");

// Info about the user 
const user = os.userInfo()

// Method returns the system updatime in seconds 
const uptime = os.uptime()

// Info about OS
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)