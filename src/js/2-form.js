const STORAGE_KEY = "feedback-form-state"

const form = document.querySelector('.feedback-form')

function getValueFromInput(form) {
    const email = form.email.value
    const message = form.message.value
    return {
        email,
        message
    }
}

form.addEventListener('input', event => {
    const data = getValueFromInput(event.currentTarget)
    const jsonData = JSON.stringify(data).trim()
    localStorage.setItem(STORAGE_KEY, jsonData)

})

const rawData = localStorage.getItem(STORAGE_KEY)

if (rawData) {
    const data = JSON.parse(rawData)
    form.email.value = data.email
    form.message.value = data.message
}

form.addEventListener('submit', event => {
    event.preventDefault()
    if (form.email.value && form.message.value) {
        console.log(getValueFromInput(event.currentTarget))
        form.reset()
        localStorage.clear()
    }
})
