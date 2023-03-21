function filterBooks(...books) {
    let uBooks = [];
    let otherBooks = [];
    for (let i = 0; i < books.length; i++) {
        if (books[i] .indexOf('у') !== -1) {
            uBooks.push(books[i]);
        }else {
            otherBooks.push(books[i]);
        }
    }
    console.log('Книги, в названиях которых есть буква "у":' ,uBooks );
    console.log('Остальные книги:  ' , otherBooks);
}
filterBooks('Мастер и Маргарита', 'Преступление и наказание',  'Анна Каренина', 'Война и мир', 'Мертвые души', 'Фауст','Шум и ярость', 'Лолита','Гордость и предубеждение')



function average(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers [i];
    }
    return sum/numbers.length;
}

console.log(average(2,4,6,8,9,8,7,5));
console.log(average(1,2,3,5,7,9));
console.log(average(10,20,30));