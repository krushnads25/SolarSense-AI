const lengthInput = document.getElementById("length");
const breadthInput = document.getElementById("breadth");
const unitInput = document.getElementById("unit");
const roofAreaText = document.getElementById("roofArea");

const loadingContainer = document.getElementById("loadingContainer");
const loadingText = document.getElementById("loadingText");
const submitButton = document.querySelector(
    "#solarForm button[type='submit']"
);

function calculateArea() {
    let length = parseFloat(lengthInput.value) || 0;
    let breadth = parseFloat(breadthInput.value) || 0;

    let area = length * breadth;

    // Convert square meter to square feet
    if (unitInput.value === "meter") {
        area = area * 10.764;
    }

    roofAreaText.innerText = area.toFixed(2);
}

lengthInput.addEventListener("input", calculateArea);
breadthInput.addEventListener("input", calculateArea);
unitInput.addEventListener("change", calculateArea);

document.getElementById("solarForm")
.addEventListener("submit", async function (e) {

    e.preventDefault();

    const payload = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        pincode: document.getElementById("pincode").value,
        roofArea: roofAreaText.innerText,
        bill: document.getElementById("bill").value
    };

    // Show loading state
    loadingContainer.style.display = "block";
    document.getElementById("resultContainer").style.display = "none";

    submitButton.disabled = true;
    submitButton.innerText = "Generating Report...";

    loadingText.innerText = "☀️ Analyzing electricity usage...";

    const loadingSteps = [
        "🏠 Evaluating roof suitability...",
        "💰 Calculating savings and ROI...",
        "📍 Finding local installers...",
        "🤖 Preparing AI recommendations..."
    ];

    let stepIndex = 0;

    const loadingInterval = setInterval(() => {
        if (stepIndex < loadingSteps.length) {
            loadingText.innerText = loadingSteps[stepIndex];
            stepIndex++;
        }
    }, 1500);

    try {

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

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        console.log("API Response:", data);

        const result = data.output;

        // Recommendation details
        document.getElementById("requiredKW").textContent =
            result.requiredKW.toFixed(1);

        document.getElementById("maximumRoofKW").textContent =
            result.maximumRoofKW.toFixed(1);

        document.getElementById("coverage").textContent =
            Math.round(result.consumptionCoverage);

        document.getElementById("kw").textContent =
            result.recommendedKW.toFixed(1);

        document.getElementById("panels").textContent =
            result.panelCount;

        document.getElementById("generation").textContent =
            Math.round(result.monthlyGeneration).toLocaleString("en-IN");

        document.getElementById("savings").textContent =
            Math.round(result.monthlySavings).toLocaleString("en-IN");

        document.getElementById("cost").textContent =
            Math.round(result.systemCost).toLocaleString("en-IN");

        document.getElementById("payback").textContent =
            result.paybackPeriod.toFixed(1);

        document.getElementById("used").textContent =
            Math.round(result.roofAreaUsed);

        document.getElementById("remaining").textContent =
            Math.max(0, Math.round(result.remainingRoofArea));

        document.getElementById("recommendation").textContent =
            result.recommendation;

        // Installer cards
        const installersContainer =
            document.getElementById("installersContainer");

        installersContainer.innerHTML = "";

        result.installers.forEach(installer => {

            installersContainer.innerHTML += `
                <div class="installer-card">
                    <h4>${installer.name}</h4>

                    <p>📍 ${installer.address || "Address unavailable"}</p>

                    ${
                        installer.phone
                        ? `<p>📞 ${installer.phone}</p>`
                        : ""
                    }

                    ${
                        installer.website
                        ? `<p>🌐 <a href="${installer.website}" target="_blank">Visit Website</a></p>`
                        : ""
                    }
                </div>
            `;
        });

        // Roof constraint warning
        const warningDiv =
            document.getElementById("constraintWarning");

        if (result.isRoofConstrained) {
            warningDiv.style.display = "block";
        }
        else {
            warningDiv.style.display = "none";
        }

        clearInterval(loadingInterval);

        loadingContainer.style.display = "none";

        submitButton.disabled = false;
        submitButton.innerText = "Generate Solar Report";

        document.getElementById("resultContainer").style.display = "block";

    }
    catch (error) {

        clearInterval(loadingInterval);

        loadingContainer.style.display = "none";

        submitButton.disabled = false;
        submitButton.innerText = "Generate Solar Report";

        console.error(error);

        alert(
            "Unable to generate solar recommendation right now. Please try again in a few moments."
        );
    }
});