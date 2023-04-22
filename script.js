const rot = document.getElementById('container')
const butopen = document.getElementById('open')
const butclose = document.getElementById('close')

butclose.addEventListener('click', () => {
    rot.classList.remove('show-nav')
})
butopen.addEventListener('click', () => {
    rot.classList.add('show-nav')
})