# SolarSense AI ☀️

## AI-Powered Rooftop Solar Advisory and Lead Generation Platform

SolarSense AI is an end-to-end AI platform that helps homeowners
evaluate rooftop solar adoption without requiring technical knowledge or
manual consultation.

The platform performs: - Solar system sizing - Roof feasibility
analysis - Cost estimation - Savings estimation - ROI calculation -
Installer recommendations - Automated PDF report generation - Email
delivery - Lead storage

------------------------------------------------------------------------

# Repository Structure

``` text
SolarSense-AI/
│
├── index.html                 # Main frontend page
├── style.css                  # Styling and UI
├── script.js                  # Frontend logic and API calls
│
├── workflow/
│   └── solarsense_workflow.json
│       # Complete n8n backend workflow
│
├── screenshots/
│   ├── homepage.png
│   ├── recommendation.png
│   ├── pdf_report.png
│   ├── email_report.png
│   └── google_sheet.png
│
├── docs/
│   ├── Concept_Note.pdf
│   └── Presentation.pptx
│
└── README.md
```

------------------------------------------------------------------------

# Technology Stack

  Layer              Technology
  ------------------ -----------------------
  Frontend           HTML, CSS, JavaScript
  AI Engine          Google Gemini
  Workflow Backend   n8n
  Frontend Hosting   Netlify
  Backend Hosting    Railway
  PDF Generation     PDFMonkey
  Email Delivery     Gmail API
  Lead Storage       Google Sheets

------------------------------------------------------------------------

# How the Project Works

1.  User enters:

    -   Name
    -   Email
    -   PIN Code
    -   Roof dimensions
    -   Monthly electricity bill

2.  Frontend sends data to the Railway hosted n8n webhook.

3.  Gemini AI analyzes:

    -   Consumption
    -   Roof feasibility
    -   Required capacity
    -   Savings
    -   Payback period

4.  Customer lead is stored in Google Sheets.

5.  PDFMonkey generates a professional PDF report.

6.  The report is emailed automatically to the customer.

------------------------------------------------------------------------

# How Evaluators Can Check the Project

## 1. Live Application

Open the deployed frontend:

netlify link : "https://nimble-lamington-3fead2.netlify.app"

Fill the form with sample values:

  Field          Sample Value
  -------------- --------------------
  Name           Demo User
  Email          Your email address
  PIN Code       431001
  Roof Length    20
  Roof Breadth   20
  Monthly Bill   3000

Submit the form.

Expected output: - Recommendation appears on screen. - PDF report
arrives via email. - Entry is added to Google Sheets.

------------------------------------------------------------------------

## 2. Frontend Source Code

Frontend implementation is available in:

``` text
index.html
style.css
script.js
```

------------------------------------------------------------------------

## 3. Backend Workflow

The complete backend automation workflow is available in:

``` text
workflow/solarsense_workflow.json
```

This workflow can be imported directly into n8n.

------------------------------------------------------------------------

## 4. Screenshots

Screenshots demonstrating the application flow are available in:

``` text
screenshots/
```

------------------------------------------------------------------------

## 5. Documentation

Project documentation is available inside:

``` text
docs/
```

Includes: - Concept Note - Presentation - Additional documentation

------------------------------------------------------------------------

# Local Execution Instructions

## Frontend

Clone repository:

``` bash
git clone https://github.com/krushnads25/SolarSense-AI
```

Open:

``` text
index.html
```

or deploy using Netlify.

## Backend

Import:

``` text
workflow/solarsense_workflow.json
```

into an n8n instance.

Configure credentials for: - Gemini API - Gmail API - Google Sheets -
PDFMonkey

Update webhook URL in:

``` text
script.js
```

------------------------------------------------------------------------

# SDG Alignment

SolarSense AI contributes directly to:

**SDG 7 -- Affordable and Clean Energy**

------------------------------------------------------------------------

# Future Scope

-   Government subsidy estimation
-   Carbon footprint calculation
-   Satellite roof analysis
-   Real-time installer discovery
-   Analytics dashboard

------------------------------------------------------------------------

# Authors

Developed as part of the Lenovo LEAP Internship Capstone Project.
