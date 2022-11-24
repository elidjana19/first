import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DetailComponent } from './detail/detail.component';
import { DeliveryComponent } from './delivery/delivery.component';



@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    AboutUsComponent,
    DetailComponent,
    DeliveryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
