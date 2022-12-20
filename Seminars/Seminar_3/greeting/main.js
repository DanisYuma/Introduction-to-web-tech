// Задача 3: Написать функцию, 
// которая принимает имя пользователя при ее вызове и выводит сообщение с приветствием пользователя по имени в консоль.
// Проверить работоспособность функции.

function greeting(name)
{
    console.log(`Hi, ${name} `);
}

const yourName = prompt('Enter your name');
greeting(yourName);