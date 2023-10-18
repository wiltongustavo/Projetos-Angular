import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { ConversorService, MoedaService } from './services';
import { ConversorComponent } from './components'; 
import { FormsModule } from '@angular/forms';
import { NumeroDirective } from './directives';
import { ModalCotacaoComponent } from './modal-utils';
import { DataBrPipe } from './pipes';
import { ConversorRoutingModule } from './conversor-routing.module';
import { ConversorRoutingComponent } from './conversor-routing.component';





@NgModule({
  declarations: [
    ConversorComponent,
    NumeroDirective,
    ModalCotacaoComponent,
    DataBrPipe,
    ConversorRoutingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ConversorRoutingModule
  ],
  exports:[ConversorComponent],
  providers: [
    MoedaService,
	ConversorService,
  HttpClientModule
  ]
})
export class ConversorModule { }
