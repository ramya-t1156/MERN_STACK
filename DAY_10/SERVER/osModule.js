// OS module
// usecase - 
// gives all informations about system's OS

const os = require("os")

// home directory
console.log(os.homedir()) // C:\Users\HP
// temp directory
console.log(os.tmpdir()) // C:\Users\HP\AppData\Local\Temp
// cpu information
console.log(os.cpus())
// architecture
console.log(os.arch()) // x64
// platform
console.log(os.platform()) // win32
// hostname
console.log(os.hostname()) // Aura
// version
console.log(os.version()) // Windows 11 Home Single Language
// gives user info
console.log(os.userInfo());