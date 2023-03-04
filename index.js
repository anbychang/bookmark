let bookmarks = [
  { noIcon: true, name: 'APCS', url: 'yuihuang.com/apcs/' },
  { name: 'Gmail', url: 'mail.google.com'},
  { name: 'Google', url: 'www.google.com' },
]

let main = document.querySelector('#main')
bookmarks.forEach(bookmark => {
  let a = document.createElement('a')
  a.href = `https://${bookmark.url}`
  let img = document.createElement('img')
  if (!bookmark.noIcon) {
    img.src = `https://${bookmark.url}/favicon.ico`
  }
  a.appendChild(img)
  let text = document.createElement('div')
  text.class = 'text'
  text.innerText = bookmark.name
  a.appendChild(text)
  main.appendChild(a)
})
