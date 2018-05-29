import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes, RouterState } from "@angular/router";

import { AppComponent } from "./app.component";
import { SimpleHttpComponent } from "./simple-http/simple-http.component";
import { YouTubeSearchComponent } from "./you-tube-search/you-tube-search.component";
import { youTubeSearchInjectables } from "./you-tube-search/you-tube-search.injectables";
import { SearchBoxComponent } from "./search-box/search-box.component";
import { SearchResultComponent } from "./search-result/search-result.component";
import { YouTubeSearchService } from "./you-tube-search/you-tube-search.service";
import { SearchTestComponent } from "./search-test/search-test.component";

const appRoute: Routes = [
  { path: "searchtest", component: SearchTestComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent,
    YouTubeSearchComponent,
    SearchBoxComponent,
    SearchResultComponent,
    SearchTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [youTubeSearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule {}
