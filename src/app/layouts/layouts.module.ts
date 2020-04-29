import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

import { BasicLayoutComponent } from './basic-layout/basic-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    BasicLayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    BasicLayoutComponent
  ]
})
export class LayoutsModule { }
