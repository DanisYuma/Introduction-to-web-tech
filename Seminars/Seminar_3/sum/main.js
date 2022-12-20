// Задача 2: Получить от пользователя два числа и вывести в диалоговое окно сумму значений, которые ввел пользователь, 
// вывод должен выглядеть так (пример):
// Результат сложения чисел 5 и 2 равен 7.

const a = +prompt('Enter number a');
const b = Number.parseFloat(prompt('Enter number b'));
const result = sum(a,b);

function sum(x, y)
{
    return x + y;
}

alert(`Sum of ${a} and ${b} equal ${a + b} `);
console.log(result);
// sum(8, 10);