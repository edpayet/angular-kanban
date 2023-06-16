import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageComponent } from './list-page/list-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
  declarations: [ListPageComponent, DetailPageComponent],
  imports: [CommonModule, CustomersRoutingModule],
})
export class CustomersModule {}
