const lengthInput = document.getElementById("length");
const breadthInput = document.getElementById("breadth");
const unitInput = document.getElementById("unit");
const roofAreaText = document.getElementById("roofArea");

function calculateArea() {

    let length = parseFloat(lengthInput.value) || 0;
    let breadth = parseFloat(breadthInput.value) || 0;

    let area = length * breadth;

    if(unitInput.value === "meter"){
        area = area * 10.764;
    }

    roofAreaText.innerText = area.toFixed(2);
}

lengthInput.addEventListener("input",calculateArea);
breadthInput.addEventListener("input",calculateArea);
unitInput.addEventListener("change",calculateArea);

document.getElementById("solarForm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    const payload = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        pincode: document.getElementById("pincode").value,
        roofArea: roofAreaText.innerText,
        bill: document.getElementById("bill").value
    };

    await fetch(
        "https://n8n-production-c14f.up.railway.app/webhook/solarsense",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        }
    );

    alert("Solar report request submitted successfully!");

    /*
    Replace with your n8n webhook later

    await fetch("YOUR_N8N_WEBHOOK_URL",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(payload)
    });
    */
});