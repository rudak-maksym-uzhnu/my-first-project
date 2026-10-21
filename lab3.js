// Завдання для самостійного виконання

// 1. Моє резюме
const firstName = "Максим";
const lastName = "Рудак";
let age = 19;
const favoriteSubject = "Немає";
const isStudent = true;

// 2. Перевірка типів
console.log("--- Типи змінних ---");
console.log(typeof firstName);       // string
console.log(typeof lastName);        // string
console.log(typeof age);             // number
console.log(typeof favoriteSubject); // string
console.log(typeof isStudent);       // boolean

// 3. Математика
const myAge = age;
const ageIn5Years = myAge + 5;
console.log("\n--- Математика ---");
console.log("Вік через 5 років:", ageIn5Years);

// 4. Магія порівняння
// Створюємо змінну типу рядок та змінну типу число
const strNum = "100";
const num = 100;

// Порівняння за допомогою нестрогого дорівнює (==)
const looseComparison = strNum == num;
console.log("Нестроге порівняння (==):", looseComparison); // Виведе: true

// Порівняння за допомогою строгого дорівнює (===)
const strictComparison = strNum === num;
console.log("Строге порівняння (===):", strictComparison); // Виведе: false

/* 
ПОЯСНЕННЯ:
1. Нестроге порівняння (==) виконує неявне перетворення типів: воно автоматично перетворює рядок "100" на число 100 перед порівнянням, тому 100 == 100 повертає true.
2. Строге порівняння (===) перевіряє і значення, і тип даних без жодного перетворення. Оскільки "100" має тип string (рядок), а 100 — тип number (число), типи не збігаються, і результат повертає false.
*/

// 5. Шаблонні рядки
console.log("\n--- Шаблонний рядок ---");
const resultMessage = `Привіт! Мене звати ${firstName} ${lastName}, мені ${myAge} років. Через 5 років мені буде ${ageIn5Years}. І так, я студент: ${isStudent}.`;
console.log(resultMessage);