document.querySelector('.file').addEventListener('click', getData);

function getData() {
    // First is to create the xhr Object
    const xhr = new XMLHttpRequest();

    // Request with the help of xhr
    // First is the type of request, second is the location of file or url, third is asking if you want async or not. If false then it is synchronous.
    xhr.open('GET', 'data.txt', true);

    // Onload
    xhr.onload = function() {
        if(this.status === 200) {
            document.querySelector('.file-content').innerText = this.responseText;
            document.querySelector('.file-content').style.display = 'block';
        }
    }

    // On Error
    xhr.onerror = function() {
        console.log('Errrrrrorrrr.');
    }

    // Sending the response to the browser for display
    xhr.send();
}