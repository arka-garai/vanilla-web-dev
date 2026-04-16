const axios = require("axios");
//get req
async function main2() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    console.log(response.data.length);

}
//post req
async function main4() {
    const response = await axios.post(
        "https://httpdump.app/dumps/ae02642c-ca3e-4708-8378-2d946b9ac052",
        {
            userName: "Arka Garai"
        },
        {
            headers: {
                Authorization: "bearer 123",
            }
        }
    )
    console.log(response.data);


}
main2();
main4();
