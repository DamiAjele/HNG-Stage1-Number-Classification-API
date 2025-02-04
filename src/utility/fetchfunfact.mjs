import axios from "axios";

export async function fetchFunFact(num) {
    try {
        const response = await axios.get(`http://numbersapi.com/${num}`);
        return response.data;
    } catch (error) {
        return "No fun fact available.";
    }
}
