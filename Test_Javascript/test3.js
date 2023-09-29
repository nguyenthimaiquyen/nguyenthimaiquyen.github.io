const posts = document.getElementById('posts-ul');
const photos = document.getElementById('photos-ul');
const albums = document.getElementById('albums-ul');

const btnPosts = document.getElementById('btn-posts');
const btnPhotos = document.getElementById('btn-photos');
const btnAlbums = document.getElementById('btn-albums');

const title = document.getElementById('title');

const postsAPI = 'https://jsonplaceholder.typicode.com/posts';
const photosAPI = 'https://jsonplaceholder.typicode.com/photos';
const albumsAPI = 'https://jsonplaceholder.typicode.com/albums';

let elements = [];

const getAllPosts = async () => {
    try {
        let res = await fetch(postsAPI);
        let data = await res.json();
        elements = data;
        renderElement(elements);
    } catch (error) {
        console.log(error)
    }
}

const getAllPhotos = async () => {
    try {
        let res = await fetch(photosAPI);
        let data = await res.json();
        elements = data;
        renderElement(elements);        
    } catch (error) {
        console.log(error)
    }
}

const getAllAlbums = async () => {
    try {
        let res = await fetch(albumsAPI);
        let data = await res.json();
        elements = data;
        renderElement(elements);
    } catch (error) {
        console.log(error)
    }
}

const renderElement = elements => {
    let html = '';
    elements.forEach(element => {
        html += `
            <li>${element.title}</li>            
        `
    });
    posts.innerHTML = html;
}

btnPhotos.addEventListener('click', function() {
    getAllPhotos();
    title.innerText = 'Type: photos';
    btnPhotos.classList.add('active');
    btnPosts.classList.remove('active');
    btnAlbums.classList.remove('active');
})

btnAlbums.addEventListener('click', function() {
    getAllAlbums();
    title.innerText = 'Type: albums';
    btnAlbums.classList.add('active');
    btnPhotos.classList.remove('active');
    btnPosts.classList.remove('active');
})

btnPosts.addEventListener('click', function() {
    getAllPosts();
    title.innerText = 'Type: posts';
    btnPosts.classList.add('active');
    btnPhotos.classList.remove('active');
    btnAlbums.classList.remove('active');
})

getAllPosts();