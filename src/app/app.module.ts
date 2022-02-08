import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personas.service';
import { PersonasComponent } from './personas/personas.component';
import { ErrorComponent } from './error/error.component';
import { DataServices } from './data.services'
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { LoginService } from './login/login.service';
import { LoginGuardian } from './login/login-guardian.service';

@NgModule({
	declarations: [
		AppComponent,
		PersonaComponent,
		FormularioComponent,
		PersonasComponent,
		ErrorComponent,
		LoginComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		HttpClientModule,
		provideFirebaseApp(() => initializeApp({
			apiKey: "AIzaSyDvUO2Ql1zW18btS8p8Mw_335VevnytVYI",
			authDomain: "listado-personas-924f0.firebaseapp.com",
		})),
		provideAuth(() => getAuth())
	],
	providers: [LoggingService, PersonasService, DataServices, LoginService, LoginGuardian],
	bootstrap: [AppComponent]
})
export class AppModule { }
