import { setWorldConstructor, Given } from '@cucumber/cucumber'
import { BaseWorld } from '../../src/baseWorld'

class HelloWorld extends BaseWorld {
  constructor() {
    super()
    this.emailPrefix = 'hello-'
  }
}
setWorldConstructor(HelloWorld)

Given('I say hello', async function () {
  console.log('hello')
})