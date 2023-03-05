let bookmarks = [
  { noIcon: true, name: 'APCS', url: 'yuihuang.com/apcs/' },
  { name: 'Gmail', url: 'mail.google.com'},
  { name: 'Google', url: 'www.google.com' },
]

let id = 0

let main = document.querySelector('#main')
bookmarks.forEach(bookmark => {
  let a = document.createElement('a')
  a.href = `https://${bookmark.url}`
  id = id + 1
  a.id = id

  let img = document.createElement('img')
  if (!bookmark.noIcon) {img.src = `https://${bookmark.url}/favicon.ico`}
  a.appendChild(img)

  let text = document.createElement('div')
  text.class = 'text'
  text.innerText = bookmark.name

  a.appendChild(text)
  main.appendChild(a)
})


function square(l, put_id) {
  l.forEach(i => {
  let a = document.createElement('a')
  a.href = `https://${i.url}`
  id = id + 1
  a.id = id

  let img = document.createElement('img')
  if (!bookmark.noIcon) {img.src = `https://${i.url}/favicon.ico`}
  a.appendChild(img)

  let text = document.createElement('div')
  text.class = 'text'
  text.innerText = bookmark.name

  a.appendChild(text)
  main.appendChild(a)
})
}