const posts = [];

// Elements
let titles = document.getElementById('title');
let contents = document.getElementById('content');
let btn = document.querySelector('.green-btn');

btn.addEventListener('click', add);

function add() {
    createPost({title: titles.value, content: contents.value})
    .then(getPosts)
    .catch(function(err) {
        console.log(err);
    })
}

function createPost(post) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            posts.push(post);

            let error = false;
            
            if(!error) {
                resolve();
            } else {
                reject('Error');
            }
        }, 1000);
    })
}

function getPosts() {
    setTimeout(function(){ 
        let output = '';
        posts.forEach(function(post) {
            output += `
                <div class="post">
                    <p class="head">${post.title}</li>
                    <p class="not-head">${post.content}</li>
                </div>
            `;
        })
        document.querySelector('.posts').innerHTML = output;
    }, 1000); 
}