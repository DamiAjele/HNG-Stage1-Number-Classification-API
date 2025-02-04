export function classifyNumber(num) {
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
    return String(n).split("").reduce((sum, d) => sum + Number(d), 0);
}
