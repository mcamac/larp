import R from 'ramda'

export function Step(fn, deps = {}, opts = {}) {
  if (!(this instanceof Step)) {
    return new Step(fn, deps, opts)
  }
  this.fn = fn
  this.deps = deps

  this.showSteps = () => {
    this.log(this.toString())
    R.keys(this.deps).forEach(key => {
      console.log(key)
      this.deps[key].showSteps()
    })
  }

  this.log = (...args) => {
    console.log('step', ...args)
  }

  this.toString = opts.toString || (() => {
    return 'step'
  })

  this.run = () => {
  }
}

export class Pipeline {
  constructor(steps) {
    this.steps = steps
  }
  add(newSteps) {
    this.steps = R.merge(this.steps, newSteps)
  }
  log(...message) {
    console.log('Inside a pipeline!', ...message)
  }
  run() {
    this.log('Running a pipeline', this.steps)
  }
  showSteps() {
    this.log('Showing steps', R.keys(this.steps))
  }
}
