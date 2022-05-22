import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <tabs-main [titulo]=titulo [tabsData]=tData ></tabs-main>
    `
})
export class AppComponent {
  titulo = 'quiz-angular';
  tData = [
    {
      tabId: 'Tab 1',
      tabContent: 'Esse é o conteúdo da tab 1'
    },
    {
      tabId: 'Tab 2',
      tabContent: 'Esse é o conteúdo da tab número 2'
    },
    {
      tabId: 'Tab 3',
      tabContent: 'Terceiro conteúdo'
    },
    {
      tabId: 'Tab 4',
      tabContent: 'Quarta página'
    },
  ]
}
