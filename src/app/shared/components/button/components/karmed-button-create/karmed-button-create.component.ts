import { NgIf } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-karmed-button-create',
  imports: [NgIf],
  templateUrl: './karmed-button-create.component.html',
  styleUrl: './karmed-button-create.component.scss',
})
export class KarmedButtonCreateComponent {
  @Input() label: string = 'Create';

  @Output() action = new EventEmitter<void>();

  @ViewChild('contentWrapper') contentWrapper!: ElementRef;
  public isContentProjected: boolean = false;

  onButtonClick(): void {
    this.action.emit();
  }
}
