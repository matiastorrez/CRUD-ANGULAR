import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '@shared/shared.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';
import { HeaderComponent } from '@layout/header/header.component';

@NgModule({
  declarations: [AppComponent, SkeletonComponent, HeaderComponent],
  imports: [BrowserModule, SharedModule, AppRoutingModule],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
