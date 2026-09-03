import fs from 'fs'

async function dl() {
  const url = 'https://travash.com/wp-content/uploads/2025/05/Travash-Software-Solutions.jpg'
  const res = await fetch(url)
  const buffer = await res.arrayBuffer()
  fs.writeFileSync('public/hero-original.jpg', Buffer.from(buffer))
  console.log('Saved public/hero-original.jpg', buffer.byteLength)
}

dl()
