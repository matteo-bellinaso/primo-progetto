import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { ListComponent } from './listComponent/list.component';
import { ListService } from './list.service';
import { DetailComponent } from './detailComponent/detail.component';
import { ComunicatorService } from './comunicator.service';
// devo importare tutti i componenti

@NgModule({
  declarations: [
    AppComponent, // in questa zona va dichiarato ogni tipo di componente che viene aggiunto
    ListComponent, DetailComponent // nel nostro caso la lista1
  ],
  imports: [ // qui ci vogliono tutti i vari import dei moduli
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ListService, ComunicatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
