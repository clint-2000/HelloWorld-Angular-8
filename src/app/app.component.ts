import { Component } from '@angular/core';

declare var anime: any;  // declare anime js here


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helloApp';

  ngAfterViewInit(): void {
  
    var container = {opacityIn: [],scaleIn: [],scaleOut: 0,durationIn: 0,durationOut: 0,delay: 0};
    container.opacityIn = [0,1];
    container.scaleIn = [0.2, 1];
    container.scaleOut = 3;
    container.durationIn = 800;
    container.durationOut = 600;
    container.delay = 500;

anime.timeline({loop: true})
  .add({
    targets: '.container .letters-1',
    opacity: container.opacityIn,
    scale: container.scaleIn,
    duration: container.durationIn
  }).add({
    targets: '.container .letters-1',
    opacity: 0,
    scale: container.scaleOut,
    duration: container.durationOut,
    easing: "easeInExpo",
    delay: container.delay
  }).add({
    targets: '.container .letters-2',
    opacity: container.opacityIn,
    scale: container.scaleIn,
    duration: container.durationIn
  }).add({
    targets: '.container .letters-2',
    opacity: 0,
    scale: container.scaleOut,
    duration: container.durationOut,
    easing: "easeInExpo",
    delay: container.delay
  }).add({
    targets: '.container',
    opacity: 0,
    duration: 500,
    delay: 500
  });
}
}
