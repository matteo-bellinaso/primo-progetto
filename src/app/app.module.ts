import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { ListComponent } from './listComponent/list.component';
import { ListService } from './list.service';
import { DetailComponent } from './detailComponent/detail.component';
import { ComunicatorService } from './comunicator.service';
import { AfterViewComponent } from './after-view/after-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { demoRouter } from './router/router.module';
import { HighlightDirective } from './highlight.directive';
import { AtoLetterPipe } from './ato-for.pipe';
// devo importare tutti i componenti

@NgModule({
  declarations: [
    AppComponent, // in questa zona va dichiarato ogni tipo di componente che viene aggiunto
    ListComponent, DetailComponent, AfterViewComponent, NavbarComponent, HomeComponent, HighlightDirective, AtoLetterPipe // nel nostro caso la lista1
  ],
  imports: [ // qui ci vogliono tutti i vari import dei moduli
    BrowserModule,
    FormsModule,
    HttpModule,
    demoRouter
  ],
  providers: [ListService, ComunicatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
