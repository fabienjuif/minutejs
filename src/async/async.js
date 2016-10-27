const co = require('co')
const { animate, error } = require('./animation')

const chainAnimationsPromise = (elem, animations) => {
  let ret = null
  let p = Promise.resolve()

  for(const anim of animations) {
    p = p.then((val) => {
      ret = val
      return anim(elem)
    })
  }

  return p
    .catch((e) => {}) // ignore and keep going
    .then(val => val || ret)
}

const chain = chainAnimationsPromise

chain(
  { name: 'Jon SNOW' },
  [animate(0), animate(1), animate(2), error, animate(3)],
)
.then(lastIdx => console.log(`Stopped to idx ${lastIdx}.`))
