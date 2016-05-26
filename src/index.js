import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Client} from 'client';
import {Header} from 'header';
import {Table} from 'table';

@Component({
  selector: 'main'
})

@View({
  directives: [Client],
  template: `
    <client></client>
  `
})

class Main {

}

bootstrap(Main);
