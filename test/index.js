import test from 'ava'
import lif from '../src/index'

test(t => {
  t.deepEqual(lif([]), [])

  t.deepEqual(lif([true], { width: 3, height: 3 }), [])

})
