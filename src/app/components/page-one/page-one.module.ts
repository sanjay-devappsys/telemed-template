import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageOneRoutingModule } from './page-one-routing.module';
import { PageOneComponent } from './page-one.component';
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
  declarations: [PageOneComponent],
  imports: [
    CommonModule,
    PageOneRoutingModule,
    MatIconModule, MatButtonModule, MatButtonToggleModule,
    SharedModule, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDialogModule
  ]
})
export class PageOneModule { }
