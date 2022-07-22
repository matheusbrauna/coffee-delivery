export function FormatMoney(value: number) {
  return value.toLocaleString('pt-br', {
    minimumFractionDigits: 2,
  })
}
