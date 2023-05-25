export default function getTracks (obj) {
  const array = []
  for (const i in obj) {
    for (const j in obj[i]) {
      array.push(obj[i][j])
    }
  }

  return array
}
