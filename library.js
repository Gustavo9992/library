const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mentre milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, Pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubistituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length
console.log('Total de categorias: ')
console.log(totalCategories)

for (category of booksByCategory) {
    console.log('Total de livros na categoria: ', category.category)
    console.log(category.books.length)
}

function countAuthors() {
    let authors = []

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }
    
    console.log('Total de autores: ', authors.length)
}

countAuthors()

function booksOfAuthor(author) {
    let books = []

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author === author) {
                books.push(book.title)
            }
        }
    }
    
    console.log(`Livros do autor: "${author}": 
1- ${books.join(". 2- ")}`)
}

booksOfAuthor('Augusto Cury')
