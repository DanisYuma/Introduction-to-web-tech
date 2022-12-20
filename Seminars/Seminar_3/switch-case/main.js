// Задача 5: перепишите код, используя конструкцию switch-case, запрашивая возраст пользователя через диалоговое окно.
 
// <script>
// let age = 101;
 
// if (age == 18) {
//   alert('Вы совершеннолетний, все можно!');
// } else if (age == 10) {
//   alert('Вам надо учить уроки!');
// } else if (age == 30) {
//   alert('Ложитесь спать, завтра на работу');
// } else {
//   alert('Мы не знаем что Вам делать');
// }
// </script>

const age = +prompt('Enter your age');
switch(age) {
    case 18: alert('Over 18'); break;
    case 10: alert('Go to sleep'); break;
    case 30: alert('Sorry for you'); break;
    default: alert('i dont know what to do');
}