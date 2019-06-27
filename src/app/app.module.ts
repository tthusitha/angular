import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicationHeaderComponent } from './publication-header/publication-header.component';
import { ActusAgendaListComponent } from './actus-agenda-list/actus-agenda-list.component';
import { ActusAgendaListItemComponent } from './actus-agenda-list-item/actus-agenda-list-item.component';
import { ActuAgendaService } from './actu-agenda.service';

@NgModule({
  declarations: [
    AppComponent,
    PublicationHeaderComponent,
    ActusAgendaListComponent,
    ActusAgendaListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ActuAgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
