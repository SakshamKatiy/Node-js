const data = {
    id : "01",
    name : "Saksham",
    trade : "adit",
}
const fs = require("fs");
const jsondata = JSON.stringify(data);
fs.writeFile('json1.json' , jsondata , (err)=>{
    console.log("done")
})

fs.readFile("json1.json","utf-8",(err,dataa)=>{
    // console.log(dataa)
    //now converting json data into object
    const orgdata = JSON.parse(dataa)
    console.log(orgdata);
    // console.log(jsondata);
});