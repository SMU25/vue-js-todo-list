## Deployed: [Vue Todo list](https://vue-js-todo-list.vercel.app/)

# vue-js-todo-list

![image](https://user-images.githubusercontent.com/65986569/210266132-be44f366-a723-4dc2-bc18-10bb943f4c1f.png)

## Task Description:
The goal of the task was to create a simple web application, a To-Do List, that allows users to add, edit, and delete tasks. The main requirements were to use Vue.js for creating components, storing tasks in the application's state, ensuring task persistence even after page reloads, enabling users to mark tasks as completed, and designing a user-friendly and aesthetically pleasing interface.

## Solution:
I implemented the To-Do List web application using Vue.js, along with TypeScript and SCSS to enhance the development process and improve user interaction. Here's how I addressed the main requirements:

### 1. Created components for input fields, the task list, and buttons for adding, editing, and deleting tasks.
### 2. Utilized Vue's state management system to store the task list and their statuses (completed or not).
### 3. Implemented the functionality to add new tasks, mark them as completed, edit task text, and delete tasks.
### 4. Developed a readable and user-friendly user interface with an attractive and responsive design using SCSS for styling.

## Additional Comments:
In this solution, I also utilized `localStorage` to store the task list between sessions. This helps maintain the task list's state after page reloads and ensures continuous access to it.

The use of TypeScript adds static type checking, enhancing code reliability and support.

Overall, my solution meets all the specified requirements and aims to provide users with a convenient interface for managing their tasks.

# 
### In Ukrainian (Українською)
## Опис завдання:
Метою завдання було створити простий веб-додаток To-Do List, який дозволяє користувачам додавати, редагувати та видаляти задачі. Основні вимоги полягали у використанні Vue.js для створення компонентів, збереження задач у стані додатку та після перезавантаження сторінки, можливості відзначити виконані задачі, а також у зручній та естетичній верстці.

## Рішення:
Я реалізував веб-додаток To Do List з використанням Vue.js, а також TypeScript та SCSS для поліпшення процесу розробки та вдосконалення взаємодії з користувачем. Ось як я вирішив основні вимоги:

### 1. Створено компоненти для полів введення, списку справ та кнопок для додавання, редагування та видалення справ.
### 2. Використано систему управління станом Vue для збереження списку справ та їх стану (виконані або ні).
### 3. Реалізовано можливість додавання нових справ, відмічення їх як виконані, редагування тексту справи та її видалення.
### 4. Розроблено читабельний та зручний для користування інтерфейс користувача з привабливим та адаптивним дизайном за допомогою SCSS для стилізації.

## Додаткові коментарі:
У даному рішенні я також використав localStorage для збереження списку справ між сесіями. Це допомагає зберегти стан списку справ після перезавантаження сторінки та забезпечити постійний доступ до нього.

Використання TypeScript додає статичну перевірку типів, поліпшуючи надійність та підтримку коду. 

Загалом, моє рішення відповідає всім зазначеним вимогам та намагається надати користувачам зручний інтерфейс для керування їх справами.

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run start
```

### Compiles and minifies for production

```
yarn run build
```

### Lints and fixes files

```
yarn run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
