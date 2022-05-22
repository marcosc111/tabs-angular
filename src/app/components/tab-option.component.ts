import { Component, Input } from "@angular/core"

@Component({
  selector: 'tab-option',
  template: `
  <div *ngIf="selecionado ; else nao_selecionado" class="opcao selecionado">
    <span><b> {{ tabId }} </b></span>
  </div>
  <ng-template #nao_selecionado>
    <div class="opcao">
      <span><b> {{ tabId }} </b></span>
    </div>
  </ng-template>
  `,
  styles: [`
    .opcao {
      text-align: center;
      min-width: 100px;
      min-height: 18px;
      background: #1282bb;
      color: white;
      padding: 10px 5px 5px 5px;
      margin: 8px;
      display:inline-block;
      border-radius: 3px;
      border: 4px solid #1282bb;
      font-family: Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    .opcao:hover {
      cursor:pointer;
    }
    
    .selecionado {
      color: #1282bb;
      background: white;
      border: 4px solid #1282bb;
    }
  `]
})
export class TabOptionComponent {
  @Input() tabId !: String
  @Input() selecionado !: boolean
}