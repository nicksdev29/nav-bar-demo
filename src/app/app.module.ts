import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AutocompleteLibModule } from "angular-ng-autocomplete";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AutocompleteLibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
