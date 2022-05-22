import { Component, Input } from "@angular/core"

@Component({
  selector: 'tab-content',
  template: `
    <h3 class="tab-content"> {{ conteudoTab }} </h3>
  `,
  styles: [`
    .tab-content {
      font-family: Arial, sans-serif;
      background: rgb(177, 61, 61);
      color: #fcfcfc;
      padding: 20px;
      margin: 30px;
      min-height: 100px;
      border-radius: 5px;
      min-width: 465px;
      display: block;
      font-weight: bold;
      text-align: justify;
      text-justify: inter-word;
    }
  `]
})
export class TabContentComponent {
  @Input() conteudoTab !: String
}