import _ from 'lodash'

export default (cells = [], { width, height } = {}) => {
  if (cells.length === 0) {
    return cells
  }

  const width

  const wrapRow = (value) => {
    const m = width * height
    return (value + m) % (width * height)
  }

  const findNeighbor1 = (index) => {
    const isLeftmost = index % width === 0
    let compensation = 0
    if (isLeftmost) {
      compensation = width
    }

    const value = index - width - 1
    return wrapRow(value + compensation)
  }

  const findNeighbor2 = (index) => {
    const value = index - width
    return wrapRow(value)
  }

  const findNeighbor3 = (index) => {
    const isRightmost = index % width === (width - 1)
    let compensation = 0
    if (isRightmost) {
      compensation = width
    }

    const value = index - width + 1
    return wrapRow(value - compensation)
  }

  const findNeighbor4 = (index) => {
    const isLeftmost = index % width === 0
    let compensation = 0
    if (isLeftmost) {
      compensation = width
    }
    return index - 1 + compensation
  }

  const findNeighbor5 = (index) => {
    const isRightmost = index % width === (width - 1)
    let compensation = 0
    if (isRightmost) {
      compensation = width
    }
    return index + 1 - compensation
  }

  const findNeighbor6 = (index) => {
    const isLeftmost = index % width === 0
    let compensation = 0
    if (isLeftmost) {
      compensation = width
    }

    const value = index + width - 1
    return wrapRow(value + compensation)
  }

  const findNeighbor7 = (index) => {
    const value = index + width
    return wrapRow(value)
  }

  const findNeighbor8 = (index) => {
    const isRightmost = index % width === (width - 1)
    let compensation = 0
    if (isRightmost) {
      compensation = width
    }
    const value = index + width + 1
    return wrapRow(value - compensation)
  }

  const findNeighbors = (index) => {
    return [
      findNeighbor1(index),
      findNeighbor2(index),
      findNeighbor3(index),
      findNeighbor4(index),
      findNeighbor5(index),
      findNeighbor6(index),
      findNeighbor7(index),
      findNeighbor8(index),
    ]
  }

  return findNeighbors(4)
}
