### Homework 5
## Задача №1: проверить XML на Well formed:

<req>

        <surname>Иванов</surname>

        <name>Иван</name>

        <patronymic>Иванович</patronymic>

        <birthdate>01.01.1990</birthdate>

        <birthplace>Москва</birthplace>

        <phone>8 926 766 48 48</phone>

</req>

## Задача №2: проверить JSON на Well formed:

```json
{

        ""surname"": ""Иванов""

        ""name"": ""Иван""

        ""patronymic"": ""Иванович""

        ""birthdate"": ""01.01.1990""

        ""birthplace"": ""Москва""

        ""phone"": ""8 926 766 48 48""

}
</aside>


### Homework solution with commentary from the reviewer

## Задача №1: проверить XML на Well formed:

Начинаться xml должен с <?xml version="1.0"?>, но, это если у нас начало документа, тут про это ничего не сказано, поэтому не придираюсь :)

<?xml version="1.0"?>

<req>

        <surname>Иванов</surname>

        <name>Иван</name>

        <patronymic>Иванович</patronymic>

        <birthdate>01.01.1990</birthdate>

        <birthplace>Москва</birthplace>

        <phone>8 926 766 48 48</phone>

</req>

-----

## Задача №2: проверить JSON на Well formed:

1. двойные двойные кавычки
2. нету запятых
3. json в начале и </aside> в конце не нужны

{

        "surname": "Иванов",

        "name": "Иван",

        "patronymic": ""Иванович",

        "birthdate": "01.01.1990",

        "birthplace": "Москва",

        "phone": "8 926 766 48 48"

}

На счет json - все прекрасно описали, даже придраться не к чему.
Советую все же сдавать код, не просто описание ;)

--- 

Хочу сказать спасибо за работу на курсе, Данис, вы молодец :)
Главное в программировании, да и в целом в IT - двигаться вперед, развиваться. Просто продолжайте делать то, что делаете и все получится.
У вас уже на самом деле все получается :)
Надеюсь, еще встретимся позже на занятиях :)
Успехов вам!

Ревьюер - [Павел Тарасов](https://gb.ru/users/teachers/248396)
