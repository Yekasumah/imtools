import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/Material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon'

const MaterialComponent =[MatButtonModule,MatToolbarModule, MatSidenavModule, MatIconModule]

@NgModule({
  
  imports: [MaterialComponent],
  exports: [MaterialComponent]
})
export class MaterialModule { }
