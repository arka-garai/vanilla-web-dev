//get req
function main() {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(async response => {
            const json = await response.json();
            console.log(json.length)
        })
}
async function main2() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await response.json();
    console.log(json.length);

}
//post req
async function main3() {
    const response = await fetch(
        "https://httpdump.app/dumps/ae02642c-ca3e-4708-8378-2d946b9ac052",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer 123"
            },
            body: JSON.stringify({
                fullName: "Arka Garai"
            })
        }
    );

    const text = await response.text();
    console.log(text);
}

main3();

main();
main2();
main3();
