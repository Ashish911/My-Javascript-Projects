
var body = document.querySelector('body');
var btn = document.getElementById('Button');

btn.addEventListener("click", function () {
    var background = generateBackgroundColor();
    var color = generateTextColor();
    body.style.backgroundColor = background;
    btn.style.backgroundColor = background;
    btn.style.color = color;
    btn.style.border = "1px solid " + color;
    btn.addEventListener('mouseover', function () {
        btn.style.backgroundColor = color;
        btn.style.color = background;
        btn.style.border = "1px solid " + background;
    })
    btn.addEventListener('mouseout', function() {
        btn.style.backgroundColor = background;
        btn.style.color = color;
        btn.style.border = "1px solid " + color;
    })
})

function generateBackgroundColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")"; 
}

function generateTextColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")"; 
}