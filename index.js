let bookmarks = [
  { name: 'APCS', url: 'yuihuang.com/apcs/' },
  { name: 'Drive', url: 'drive.google.com' },
  { name: 'Gmail', url: 'mail.google.com'},
  { name: 'Google', url: 'www.google.com' },
]

let main = document.querySelector('#main')
bookmarks.forEach((bookmark, i) => {
  let div = document.createElement('div')
  let a = document.createElement('a')
  a.href = `https://${bookmark.url}`
  a.id = `bookmark-${i}`

  let img = document.createElement('img')
  if (bookmark.url.endsWith('.google.com'))
    img.src = `https://${bookmark.url}/favicon.ico`
  else
    img.src = `https://www.google.com/s2/favicons?domain=${bookmark.url}&sz=32`
  a.appendChild(img)

  let text = document.createElement('div')
  text.class = 'text'
  text.innerText = bookmark.name
  a.appendChild(text)

  main.appendChild(a)
})

// prepare for future directory structure
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
