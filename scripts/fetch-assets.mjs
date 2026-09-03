async function printAllImages() {
  const res = await fetch('https://travash.com/home-v-2/')
  const html = await res.text()
  const allUrls = new Set()
  const urlMatches = html.match(/https:\/\/travash\.com\/wp-content\/uploads\/[^\s"'<>]+\.(?:png|jpg|jpeg|svg|webp)/gi) || []
  urlMatches.forEach(u => allUrls.add(u))
  
  for (const url of Array.from(allUrls)) {
    console.log(url)
  }
}

printAllImages()
