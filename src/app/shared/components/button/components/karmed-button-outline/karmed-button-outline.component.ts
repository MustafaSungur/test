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
  selector: 'app-karmed-button-outline',
  imports: [NgIf],
  templateUrl: './karmed-button-outline.component.html',
  styleUrl: './karmed-button-outline.component.scss',
})
export class KarmedButtonOutlineComponent {
  @Input() label: string = 'Button';

  @Output() action = new EventEmitter<void>();

  @ViewChild('contentWrapper') contentWrapper!: ElementRef;

  public isContentProjected: boolean = false;

  onButtonClick(): void {
    this.action.emit();
  }
}
