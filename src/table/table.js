import {Component, View} from 'angular2/core';

@Component({
  selector: 'table'
})

@View({
  templateUrl: 'table.html'
})

export class Table {

  constructor() {
    console.info('Table Component Mounted Successfully');
  }

}
