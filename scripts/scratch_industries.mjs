async function getIndustries() {
  const res = await fetch('https://travash.com/home-v-2/')
  const text = await res.text()
  const start = text.indexOf('Industries We Serve')
  const chunk = text.slice(start, start + 25000)
  const matches = [...chunk.matchAll(/<div class="panel-slider">([\s\S]*?)<\/div>\s*<\/div>/g)]
  console.log('Found panels:', matches.length)
  matches.forEach((m, i) => {
    const titleMatch = m[1].match(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/) || m[1].match(/alt="([^"]+)"/) || m[1].match(/title="([^"]+)"/)
    const imgMatch = m[1].match(/src="([^"]+)"/) || m[1].match(/bv-data-src="([^"]+)"/)
    console.log(i, titleMatch ? titleMatch[1] : 'no title', imgMatch ? imgMatch[1].slice(0, 80) : 'no img')
  })
}
getIndustries()
