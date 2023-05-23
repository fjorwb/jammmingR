export default function flatObj (obj) {
  const results = {}
  for (const i in obj) {
    if (typeof obj[i] === 'object' && obj[0] === 'album') {
      const temp = flatObj(obj[i])
      for (const j in temp) {
        results[i + '_' + j] = temp[j]
      }
    } else {
      results[i] = obj[i]
    }
  }
  return results
}
