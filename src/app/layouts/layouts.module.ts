import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StoreModule } from '../store/store.module';
import { LoadingComponent } from './loading/loading.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    StoreModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoadingComponent
  ]
})
export class LayoutsModule { }
