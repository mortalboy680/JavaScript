let squareRed = document.getElementById('squareRed');
let squareBlue = document.getElementById('squareBlue');
let squareGreen = document.getElementById('squareGreen');

let off = false;
squareRed.addEventListener('click', function () {
    //if (!off) {
    //    document.body.style.backgroundColor = 'red';
    //} else {
    //    document.body.style.backgroundColor = '';
    //};

    !off ? document.body.style.backgroundColor = '' : document.body.style.backgroundColor = 'red';
    off = !off;
});
squareBlue.addEventListener('click', function () {
    //if (!off) {
    //    document.body.style.backgroundColor = 'red';
    //} else {
    //    document.body.style.backgroundColor = '';
    //};
    !off ? document.body.style.backgroundColor = '' : document.body.style.backgroundColor = 'blue';
    off = !off;
});
squareGreen.addEventListener('click', function () {
    //if (!off) {
    //    document.body.style.backgroundColor = 'red';
    //} else {
    //    document.body.style.backgroundColor = '';
    //};
    !off ? document.body.style.backgroundColor = '' : document.body.style.backgroundColor = 'green';
    off = !off;
});