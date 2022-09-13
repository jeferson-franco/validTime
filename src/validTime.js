function solution(time) {
    const [hours, minutes] = time.split(':');
    return hours < 24 && minutes < 60;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test validTime

// alternative solution
