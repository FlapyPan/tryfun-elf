import { argv } from 'node:process'

let 该导几次 = parseInt(argv[2]) || 1024
const 太多了 = 该导几次 > Number.MAX_SAFE_INTEGER
let 兄弟导的次数 = 太多了 ? 1n : 1
该导几次 = 太多了 ? BigInt(该导几次) : 该导几次
const 倍数 = 太多了 ? 2n : 2
while (兄弟导的次数 <= 该导几次) {
  console.log(`兄弟导${兄弟导的次数}下那我就导${兄弟导的次数 * 倍数}下`)
  兄弟导的次数 *= 倍数
}
