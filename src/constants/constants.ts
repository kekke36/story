export const constants = {
  ramen: 'ラーメン',
  udon: 'うどん',
  soba: 'そば',
} as const satisfies {
  [key: string]: string
}
