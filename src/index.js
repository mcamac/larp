console.log('hello')
import {Step, Pipeline} from './assembler/Pipeline'

function fromSteps(...steps) {
  return new Pipeline(steps)
}

function src(...globs) {
  return new Step(null, {}, {toString: () => `src ${globs}`})
}

export default {
  Step,
  Pipeline,
  fromSteps,
  src
}
