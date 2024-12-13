import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [AppComponent, ProfileComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
