let bookmarks = [
  { noIcon: true, name: 'APCS', url: 'yuihuang.com/apcs/' },
  { name: 'Google', url: 'www.google.com' },
]

let main = document.querySelector('#main')
bookmarks.forEach(bookmark => {
  let a = document.createElement('a')
  a.href = `https://${bookmark.url}`
  if (bookmark.noIcon)
    a.innerText = bookmark.name
  else {
    let img = document.createElement('img')
    img.src = `https://${bookmark.url}/favicon.ico`
    a.appendChild(img)
  }
  main.appendChild(a)
})
