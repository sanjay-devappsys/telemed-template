import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageTwoRoutingModule } from './page-two-routing.module';
import { PageTwoComponent } from './page-two.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [PageTwoComponent],
  imports: [
    CommonModule,
    PageTwoRoutingModule,
    MatIconModule, MatButtonModule, MatButtonToggleModule,
    SharedModule, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDialogModule
  ]
})
export class PageTwoModule { }
