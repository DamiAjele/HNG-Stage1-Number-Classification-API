import express from 'express';
import { classifyNumber } from './utility/classifynumber.mjs';
import { fetchFunFact } from './utility/fetchfunfact.mjs';
import cors from 'cors';

const app = express();
const PORT = process.env.port || 8000;

app.use(cors());
app.use(express.json());

app.get("/api/classify-number", async (req, res) => {
    const { number } = req.query;
    const num = parseInt(number);

    if (isNaN(num)) {
        return res.status(400).json({ number: "alphabet", error: true });
    }

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