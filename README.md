# **HNG-Stage1-Number-Classification-API**  
This is an API that classifies a number and returns its mathematical properties along with a fun fact.

## **Table of Contents**
- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack Used](#technology-stack)
- [How To Run Locally](#run-locally)
- [Usage](#usage)
  - [Endpoints](#endpoints)
  - [Example Requests & Responses](#example-requests--responses)
- [Error Handling](#error-handling)
- [Deployment](#deployment)

---

## **Project Overview**
The **Number Classification API** allows users to pass a number as a query parameter and receive the following information:
- Whether the number is **prime**.
- Whether the number is **perfect**.
- Whether the number is an **Armstrong number**.
- Whether the number is **even** or **odd**.
- The **sum of its digits**.
- A **fun fact** about the number from an external API.



## **Features**
✔️ Accepts GET requests with a **number parameter**  
✔️ Returns a JSON response with **mathematical properties**  
✔️ Fetches a **fun fact** from the Numbers API  
✔️ Provides appropriate HTTP **status codes**  
✔️ Handles **error cases** (e.g., invalid input)  
✔️ Includes **CORS support**  
✔️ Deployed to a publicly accessible endpoint  



## **Technology Stack Used**
- **Backend**: Node.js, Express.js  
- **External API**: [Numbers API](http://numbersapi.com/#42)  
- **Version Control**: Git & GitHub  
- **Deployment**: Render 
- **Axios**: HTTP client for making requests to the Numbers API
- **CORS**: Middleware to enable Cross-Origin Resource Sharing





## How To Run Locally

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

### **Installation**
1. **Clone the repository**
   ```bash
   git clone https://github.com/DamiAjele/HNG-Stage1-Number-Classification-API.git
   cd number-classification-api
   ```


2. Install Dependencies
```bash
npm install 
```
3. Running the Server
```bash
npm start
```

The server will run on http://localhost:8000.

## Usage

### Endpoints

GET /api/classify-number?number=371

Classifies a given number and returns properties.

### Example Requests & Responses

**Valid Request**
```http
GET /api/classify-number?number=371
```

✅**Success Response (200 OK)**

```JSON
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

❌ **Invalid Request (Non-numeric input)**

Error Response (400 Bad Request)

```JSON
{
    "number": "alphabet",
    "error": true
}
```

## Error Handling
- If the number is not provided → Returns 400 Bad Request
- If the number is not an integer → Returns 400 Bad Request
- If an unexpected error occurs → Returns 500 Internal Server Error

## Deployment

The API is deployed on Render. You can access it using the following base URL:

https://your-app.herokuapp.com/api/classify-number?number=<your-number>


## Acknowledgements
- Numbers API for providing fun facts about numbers.

- Express.js Documentation for guidance on building the API.

## Contact
If you have any questions or feedback, feel free to reach out:

**Damilola Ajele**

**Email**: damilolaajele05@gmail.com

**GitHub**: https://github.com/DamiAjele


