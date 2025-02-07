import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';


type Grade = "A"|"B"|"F";

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './control-flow.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ControlFlowComponent { 
  
  public showContent = signal(true);
  public grade = signal<Grade>("A");

  public toggleContent() {
    this.showContent.update( value => !value );
  }



}
