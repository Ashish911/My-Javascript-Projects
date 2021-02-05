
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

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
    var color = ['#'];
    for (let i = 0; i < 6; i++) {
        var random = Math.floor(Math.random() * hex.length);
        color.push(hex[random]);
    }

    return color.join("");
}

function generateTextColor() {
    var color = ['#'];
    for (let i = 0; i < 6; i++) {
        var random = Math.floor(Math.random() * hex.length);
        color.push(hex[random]);
    }

    return color.join("");
}