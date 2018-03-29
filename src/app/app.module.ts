import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WheatherReaderService} from './wheather-reader.service';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'settings', component: SettingComponent},
  {path: 'home', component: HomeComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [WheatherReaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
