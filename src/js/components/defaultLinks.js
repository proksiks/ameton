let links = document.querySelectorAll('a')

links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault()
  })
})
