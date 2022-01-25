import { Before } from '@cucumber/cucumber'

export class BaseWorld {
  public emailPrefix = ''

  constructor () {
    Before(function(){
      console.log('In Before')
    })
  }
}