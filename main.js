import { Pokemon } from './Pokemon.js';

const character = new Pokemon("Pikachu", 1, 100, "progressbar-character", "health-character");
const enemy = new Pokemon("Charmander", 1, 100, "progressbar-enemy", "health-enemy");

const kickButtonCounter = createClickCounter(6);
const specialButtonCounter = createClickCounter(6);

document.getElementById("btn-kick").addEventListener("click", () => {
    kickButtonCounter("Thunder Jolt", () => character.attack(enemy, 10));
});

document.getElementById("btn-special").addEventListener("click", () => {
    specialButtonCounter("Special Attack", () => character.specialAttack(enemy, 20));
});

function createClickCounter(limit) {
    let count = 0;

    return function(buttonName, action) {
        if (count < limit) {
            count++;
            const message = `Кнопку '${buttonName}' натиснуто ${count} раз(ів). Залишилось: ${limit - count} натискань.`;
            logDebug(message);
            action();
        } else {
            const message = `Кнопка '${buttonName}' досягла ліміту у ${limit} натискань.`;
            logDebug(message);
        }
    };
}

function logDebug(message) {
    const debugLogs = document.getElementById("debug-logs");
    const debugEntry = document.createElement("div");
    debugEntry.textContent = message;
    debugLogs.prepend(debugEntry);
}
