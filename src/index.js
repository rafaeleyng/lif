import applyRules from './applyRules'

export default (cells = []) => {
  if (cells.length === 0) {
    return cells
  }

  const width = parseInt(Math.sqrt(cells.length))
  const height = width

  if (width * height !== cells.length) {
    throw new Error('[lif] only supports square boards right now')
  }

  return applyRules(cells, width, height)
}
