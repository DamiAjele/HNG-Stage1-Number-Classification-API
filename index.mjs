import express from 'express';
import cors from 'cors';
import axios from "axios";

const app = express();
const PORT = process.env.port || 8000;

app.use(cors());
app.use(express.json());

// Classify Number
function classifyNumber(num) {
    const isPrime = checkPrime(num);
    const isPerfect = checkPerfect(num);
    const isArmstrong = checkArmstrong(num);
    const digitSum = getDigitSum(num);
    
    let properties = [];
    if (isArmstrong) properties.push("armstrong");
    properties.push(num % 2 === 0 ? "even" : "odd");

    return { isPrime, isPerfect, properties, digitSum };
}

function checkPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function checkPerfect(n) {
    let sum = 1;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            sum += i;
            if (i !== n / i) sum += n / i;
        }
    }
    return sum === n && n !== 1;
}

function checkArmstrong(n) {
    const digits = String(n).split("").map(Number);
    const sum = digits.reduce((acc, d) => acc + Math.pow(d, digits.length), 0);
    return sum === n;
}

function getDigitSum(n) {
    return String(Math.abs(n)).split("").reduce((sum, d) => sum + Number(d), 0);
}



// Fetch Funfact From Numbers API
async function fetchFunFact(num) {
    try {
        const response = await axios.get(`http://numbersapi.com/${num}/math`);
        return response.data;
    } catch (error) {
        return "No fun fact available.";
    }
}


app.get("/api/classify-number", async (req, res) => {
    const { number } = req.query;
    const num = parseInt(number);

    if (isNaN(num)) {
        return res.status(400).json({ number, error: true });
    }

    if (!num) return res.status(400).json({message: "Add a query parameter", error: true})

    const classification = classifyNumber(num);
    const funFact = await fetchFunFact(num);

    res.status(200).json({
        number: num,
        is_prime: classification.isPrime,
        is_perfect: classification.isPerfect,
        properties: classification.properties,
        digit_sum: classification.digitSum,
        fun_fact: funFact  
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack); // Logs the error stack
    res.status(500).json({ message: "Something went wrong!" }); // Sends a response
});
  


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});