import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthEffects } from './auth/state/auth.effects';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/share/header/header.component';
import { LoadingSpinnerComponent } from './component/share/loading-spinner/loading-spinner.component';
import { appReducer } from './store/app.state';
import { CustomSerializer } from './store/router/custom-serializer';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 20,
      logOnly: environment.production,
      autoPause: true
    }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
