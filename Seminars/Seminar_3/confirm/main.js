// Задача 4: вывести на экран в диалоговом окне текст с сообщением “Вам хорошо живется?”
// и кнопками «ОК», «Отмена», для чего необходимо использовать confirm.
// - При нажатии на кнопку “ОК” вывести в диалоговом окне текст с сообщением “Тогда мы идем к вам!”.
// - При нажатии на кнопку “Отмена” вывести в диалоговом окне текст с сообщением “Ну вы держитесь там!”.

const answer = confirm('How are you living');
// if (answer) {
//     alert('We are going to you');
// } else {
//     alert('Hold on then');
// }

answer ? alert('We are going to you') : alert('Hold on then'); // (answer == true ?) == (answer ?)