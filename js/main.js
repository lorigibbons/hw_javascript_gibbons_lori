//function declaration
function howdy() {
    return 'Howdy, I am Lori Gibbons';
}
var message = howdy();
console.log(message);

//function expression
var numba = function (string) {
    if (string.length < 7) {
        console.log('What a short little word!');
    } else if (string.length > 7) {
        console.log("I'm sorry, but that's too many to count.");
    } else if (string.length === 7) {
        console.log('7, what a perfect choice!');
    }
};
numba('7');
numba('seventy');
numba('university');

function inception(display, favMovie) {
    return display + favMovie;
}
var movieMessage = inception('Stranger Than Fiction', ' is a fantastic movie.');
console.log(movieMessage);
