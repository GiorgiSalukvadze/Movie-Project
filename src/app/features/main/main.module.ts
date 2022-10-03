import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HttpClientModule } from '@angular/common/http';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, HttpClientModule, MainRoutingModule],
})
export class MainModule {}
