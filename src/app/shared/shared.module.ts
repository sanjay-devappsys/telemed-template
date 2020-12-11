import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePopupComponent } from './image-popup/image-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


@NgModule({
  declarations: [ImagePopupComponent],
  imports: [
    CommonModule,
    MatDialogModule, MatIconModule, MatButtonModule, MatButtonToggleModule
  ],
  exports: [ImagePopupComponent]
})
export class SharedModule { }
