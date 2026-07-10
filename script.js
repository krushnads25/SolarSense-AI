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
    const response = await fetch(
        "https://solarsense-ai-production-5a21.up.railway.app/webhook/solarsense",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        }
    );

    const data = await response.json();
    console.log("API Response:", JSON.stringify(data, null, 2));
    alert(JSON.stringify(data, null, 2));

    const result = data.output;

    document.getElementById("kw").textContent = result.recommendedKW;
    document.getElementById("panels").textContent = result.panelCount;
    document.getElementById("generation").textContent = result.monthlyGeneration;
    document.getElementById("savings").textContent = result.monthlySavings;
    document.getElementById("cost").textContent = result.systemCost;
    document.getElementById("payback").textContent = result.paybackPeriod;
    document.getElementById("used").textContent = result.roofAreaUsed;
    document.getElementById("remaining").textContent = result.remainingRoofArea;
    document.getElementById("recommendation").textContent = result.recommendation;
    document.getElementById("resultContainer").style.display = "block";
   /* Replace with your n8n webhook later

    await fetch("YOUR_N8N_WEBHOOK_URL",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(payload)
    });
    */
});