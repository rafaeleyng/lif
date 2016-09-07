import test from 'ava'

import lif from '../src/index'
import findNeighbors from '../src/findNeighbors'

import patterns from './_patterns'

test('empty cells array', t => {
  t.deepEqual(lif([]), [])
})

test('patterns - block', t => {
  t.deepEqual(lif(patterns.block), patterns.block)
})

test('patterns - boat', t => {
  t.deepEqual(lif(patterns.boat), patterns.boat)
})

test('patterns - blinker', t => {
  t.deepEqual(lif(patterns.blinker[0]), patterns.blinker[1])
  t.deepEqual(lif(patterns.blinker[1]), patterns.blinker[0])
})

test('findNeighbors', t => {
  t.deepEqual(findNeighbors(4, 3, 3), [
    0,
    1,
    2,
    3,
    5,
    6,
    7,
    8,
  ])
})
