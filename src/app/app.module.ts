import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { ChuckNorrisPageComponent } from './chuck-norris-page/chuck-norris-page.component';
import { CountersComponent } from './counters/counters.component';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { MyAboutComponent } from './my-about/my-about.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { QuoteItemComponent } from './quote-item/quote-item.component';

import{ CharactersService} from './characters.service';
import{ CounterService} from './counter.service';

import { MyCounterComponent } from './my-counter/my-counter.component';
import { MySecondCounterComponent } from './my-second-counter/my-second-counter.component';

// Routing Table
const routes: Routes = [
  {path:'quotes',component:QuoteListComponent},
  {path:'home',component:MyHomeComponent},
  {path:'about',component:MyAboutComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'contacts',component:ContactListComponent},
  {path:'contact/:id',component:ContactComponent},
  {path:'counters',component:CountersComponent},
  {path:'chuck',component:ChuckNorrisPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    QuoteListComponent,
    ChuckNorrisPageComponent,
    CountersComponent,
    ContactComponent,
    ContactListComponent,
    MyAboutComponent,
    MyHomeComponent,
    QuoteItemComponent,
    MyCounterComponent,
    MySecondCounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CharactersService, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
