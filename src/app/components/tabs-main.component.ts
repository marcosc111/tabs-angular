import { Component, Input } from "@angular/core"

@Component({
  selector: 'tabs-main',
  template: `
  <div class="root">
    <div class="main">
      <h1 class="titulo">{{ titulo }}</h1>
      <li class="tab-option" *ngFor="let tab of tabsData; let i = index">
        <tab-option (click)="switchTab(i)" [tabId]="tab.tabId" [selecionado]="i == selectedTabIndex"></tab-option>
      </li>
      <tab-content [conteudoTab]="tabsData[selectedTabIndex].tabContent" ></tab-content>
    </div>
  </div>
  `,
  styles: [`
    .main {
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      background: rgb(255, 146, 102);
      display: inline-block;
      text-align: center;
      border-radius: 10px;
      padding: 5px;
      width: auto;
      max-width: 700px;
      overflow-wrap: break-word;
      color: white;
    }
    .titulo {
      display: block;
      margin: 20px;
    }
    .tab-option {
      display: inline-block;
    }
  `]
})
export class TabsMainComponent {
  @Input() titulo !: String
  @Input() tabsData !: any[]

  selectedTabIndex: number = 0;

  switchTab(index: number) {
    this.selectedTabIndex = index;
  }
}