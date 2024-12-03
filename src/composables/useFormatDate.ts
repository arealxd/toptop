export function formatDate(date: any): string {
  const dateTemp = new Date(date)
  const day = String(dateTemp.getDate()).padStart(2, '0')
  const month = String(dateTemp.getMonth() + 1).padStart(2, '0')
  const year = dateTemp.getFullYear()
  return `${day}.${month}.${year}`
}
