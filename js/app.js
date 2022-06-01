const URL = 'https://the-dune-api.herokuapp.com/books/4';
const main = document.querySelector('main');



//   === CONSUMIR LA API ===
const getCharacter = async(api) => {
    const res = await fetch(api)
    const data = await res.json()
    console.log(data)
    return data
}

// == CREAR CARDS ===
const generateCardAuthors = (element) => {
    const divContent = document.createElement('div');
    divContent.classList.add('cards');

    const img = document.createElement('img');
    img.classList.add('img-card');
    img.src = ('img/imgp.jpg');

    const title = document.createElement('p');
    title.textContent = element.title;

    const autor = document.createElement('p');
    autor.textContent = element.author;
    
    const year = document.createElement('p');
    year.textContent = element.year;

    divContent.appendChild(img);
    divContent.appendChild(title);
    divContent.appendChild(autor);
    divContent.appendChild(year);
    main.appendChild(divContent);
    
}

const generaAuthors = async() => {
    const quechimbaso = await getCharacter(URL);
    quechimbaso.map(element => generateCardAuthors(element))
}

window.addEventListener('load', generaAuthors);