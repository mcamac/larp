import L from 'larp'
console.log('larp api', L)

function sass(context) {
  console.log(context)
}

var root = new L.Step(null, {
  sass: L.Step(sass, {
    sassSrc: L.src(/static\/.*.s?css/)
  }),
  webpack: L.Step(null, {
    packages: L.Step(null, {})
  })
})

// root.add({minify: L.Step(null, {})})

root.showSteps()
root.run()

