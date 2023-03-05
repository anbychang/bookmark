let bookmarkGroups = [
  {
    bookmarks: [
      { name: 'Drive', url: 'drive.google.com' },
      { name: 'Gmail', url: 'mail.google.com'},
      { name: 'Google', url: 'www.google.com' },
    ],
    name: 'Google',
  },
  {
    bookmarks: [
      { name: 'APCS', url: 'yuihuang.com/apcs/' },
    ],
    name: 'coding',
  }
]

const createElement = (tag, attrs) => Object.assign(document.createElement(tag), attrs)

const main = document.querySelector('#main')
main.replaceChildren() // remove sample bookmarks

bookmarkGroups.forEach(group => {
  const groupDiv = createElement('div', { className: 'group' })
  main.appendChild(groupDiv)

  groupDiv.appendChild(createElement('h1', { innerText: group.name }))

  group.bookmarks.forEach(bookmark => {
    const bookmarkDiv = createElement('div', { className: 'bookmark' })
    groupDiv.append(bookmarkDiv)

    const a = createElement('a', { href: `https://${bookmark.url}` })
    bookmarkDiv.appendChild(a)

    let imgSrc
    if (bookmark.url.endsWith('.google.com'))
      imgSrc = `https://${bookmark.url}/favicon.ico`
    else
      imgSrc = `https://www.google.com/s2/favicons?domain=${bookmark.url}&sz=32`
    a.appendChild(createElement('img', { src: imgSrc }))

    bookmarkDiv.appendChild(createElement('span', { className: 'name', innerText: bookmark.name }))
  })
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
