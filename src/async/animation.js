const animate = (idx) => (elem) => new Promise((resolve) => {
  setTimeout(
    () => {
      console.log(`${elem.name} is animated (${idx})`)
      resolve(idx)
    },
    1000
  )
})

const error = () => {
  throw new Error('error')
}

module.exports = {
  animate,
  error,
}
