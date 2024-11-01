export class Pokemon {
    constructor(name, level, maxHealth, progressBarId, healthTextId) {
        this.name = name;
        this.level = level;
        this.health = maxHealth;
        this.maxHealth = maxHealth;
        this.progressBar = document.getElementById(progressBarId);
        this.healthText = document.getElementById(healthTextId);
    }

    attack(target, damage) {
        target.takeDamage(damage);
        this.logAction(`${this.name} атакує та завдає ${damage} пошкоджень ${target.name}! ${target.name} має ${target.health} HP залишилося.`);
    }

    specialAttack(target, damage) {
        target.takeDamage(damage);
        this.logAction(`${this.name} використовує Special Attack і завдає ${damage} пошкоджень ${target.name}! ${target.name} має ${target.health} HP залишилося.`);
    }

    takeDamage(amount) {
        this.health = Math.max(0, this.health - amount);
        this.updateHealth();
    }

    updateHealth() {
        const healthPercentage = (this.health / this.maxHealth) * 100;
        this.progressBar.style.width = `${healthPercentage}%`;
        this.healthText.textContent = `${this.health} / ${this.maxHealth}`;
    }

    logAction(message) {
        const logEntry = document.createElement("div");
        logEntry.textContent = message;
        const logs = document.getElementById("logs");
        logs.prepend(logEntry);
    }
}
