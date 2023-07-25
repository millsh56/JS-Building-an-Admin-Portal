
// Your Code Here

async function main() {
    // step one get all books from server
    const response = await fetch('http://localhost:3001/listBooks')
    const data = await response.json()

   data.forEach(book => {
        renderBook(book)
   })
}

function renderBook(book) {
    const root = document.querySelector('#root')

    const li = document.createElement('li')
    li.textContent = book.title

    const quantityInput = document.createElement('input')
    quantityInput.value = book.quantity

    const saveButton = document.createElement ('button')
    saveButton.textContent = 'Save'

    saveButton.addEventListener('click', async function() {
        await fetch('http://localhost:3001/updateBook', {
            method:'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
            id: book.id,
            quantity: quantityInput.value
        })
        
    })
})

    li.append(quantityInput, saveButton)

    root.append(li)

}

main()