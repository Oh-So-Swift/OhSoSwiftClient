import {Component, View} from 'angular2/core';

@Component({
  selector: 'header'
})

@View({
  templateUrl: 'header.html'
})

export class Header {

  constructor() {
    console.info('Header Component Mounted Successfully');
  }

}
