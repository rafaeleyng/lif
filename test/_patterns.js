const patterns = {}

export default patterns

// https://upload.wikimedia.org/wikipedia/commons/9/96/Game_of_life_block_with_border.svg
patterns.block = [
  false,
  false,
  false,
  false,

  false,
  true,
  true,
  false,

  false,
  true,
  true,
  false,

  false,
  false,
  false,
  false,
]

// https://upload.wikimedia.org/wikipedia/commons/7/7f/Game_of_life_boat.svg
patterns.boat = [
  false,
  false,
  false,
  false,
  false,

  false,
  true,
  true,
  false,
  false,

  false,
  true,
  false,
  true,
  false,

  false,
  false,
  true,
  false,
  false,

  false,
  false,
  false,
  false,
  false,
]

// https://upload.wikimedia.org/wikipedia/commons/9/95/Game_of_life_blinker.gif
patterns.blinker = [
  [
    false,
    false,
    false,
    false,
    false,

    false,
    false,
    true,
    false,
    false,

    false,
    false,
    true,
    false,
    false,

    false,
    false,
    true,
    false,
    false,

    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,

    false,
    false,
    false,
    false,
    false,

    false,
    true,
    true,
    true,
    false,

    false,
    false,
    false,
    false,
    false,

    false,
    false,
    false,
    false,
    false,
  ],
]
