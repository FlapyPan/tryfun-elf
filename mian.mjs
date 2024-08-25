import { argv } from 'node:process'

const count = parseInt(argv[2]) || 1024
for (let i = 1 || 32; i <= count; i *= 2) {
  console.log(`兄弟导${i}下那我就导${i * 2}下`)
}
