import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HttpClientModule } from '@angular/common/http';
import { MainRoutingModule } from './main-routing.module';
import { LoginGuardGuard } from 'src/app/core/guards/login-guard.guard';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, HttpClientModule, MainRoutingModule],
  providers: [LoginGuardGuard],
})
export class MainModule {}
