import { Component, inject } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { KarmedCardCategoryComponent } from '../cards/components/karmed-card-category/karmed-card-category.component';
@Component({
  selector: 'app-material-test',
  imports: [],
  templateUrl: './material-test.component.html',
  styleUrl: './material-test.component.css',
})
export class MaterialTestComponent {
  private _bottomSheet = inject(MatBottomSheet);

  openBottomSheet(): void {
    this._bottomSheet.open(KarmedCardCategoryComponent);
  }
}
