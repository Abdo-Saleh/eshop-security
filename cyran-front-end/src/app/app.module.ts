// import { ShoppingCartService } from './shopping-cart-sevice';
import { StorageService } from './StorageService';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RegisterComponent } from './register/register.component';

import { MaterialModule } from './material/material.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { ProductContentComponent } from './product-content/product-content.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PayingMethodsComponent } from './paying-methods/paying-methods.component';
import { DeliveryInfoComponent } from './delivery-info/delivery-info.component';

import { HttpClientModule } from '@angular/common/http';
import { MessageComponent } from './message/message.component';
import { UserCreatedComponent } from './info-snackbars/user-created/user-created.component';
import { OrderCompletedComponent } from './order-completed/order-completed.component';
import { WorkspaceComponent } from './workspace/workspace.component';

import { AuthGuard } from './auth-guard';
import { ShopAssistentGuard } from './shop-assistent-guard'
import { AdminGuard } from './admin-guard'
import { AuthService } from './auth-service';
import { ManageBoardComponent } from './manage-board/manage-board.component';
import { ResendPasswordComponent } from './resend-password/resend-password.component';
import { AdminComponent } from './admin/admin.component';
import { ProductCreatedComponent } from './info-snackbars/product-created/product-created.component';
import { DeliveryMethodsSetComponent } from './info-snackbars/delivery-methods-set/delivery-methods-set.component';
import { AddedToChartComponent } from './info-snackbars/added-to-chart/added-to-chart.component';
import { PasswordSendToEmailComponent } from './info-snackbars/password-send-to-email/password-send-to-email.component';
import { OrderPaymentSentToEmailComponent } from './info-snackbars/order-payment-sent-to-email/order-payment-sent-to-email.component';
import { BoughtOrderPreparedComponent } from './info-snackbars/bought-order-prepared/bought-order-prepared.component';
import { UserLoggedInComponent } from './info-snackbars/user-logged-in/user-logged-in.component';
import { UserLoggedOutComponent } from './info-snackbars/user-logged-out/user-logged-out.component';

import * as Raven from 'raven-js';

Raven.config('https://712f212178c64dd8bb90e045eeb51f98@o517887.ingest.sentry.io/5694911').install();
/*
import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn: "https://712f212178c64dd8bb90e045eeb51f98@o517887.ingest.sentry.io/5694911",

  // Alternatively, use `process.env.npm_package_version` for a dynamic release version
  // if your build tool supports it.
  release: "my-project-name@2.3.12",
  integrations: [new Integrations.BrowserTracing()],
  s
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

});
*/
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    NavigationComponent,
    RegisterComponent,
    CardComponent,
    FooterComponent,
    ProductContentComponent,
    ShoppingCartComponent,
    PayingMethodsComponent,
    DeliveryInfoComponent,
    MessageComponent,
    UserCreatedComponent,
    OrderCompletedComponent,
    WorkspaceComponent,
    ManageBoardComponent,
    ResendPasswordComponent,
    AdminComponent,
    ProductCreatedComponent,
    DeliveryMethodsSetComponent,
    AddedToChartComponent,
    PasswordSendToEmailComponent,
    OrderPaymentSentToEmailComponent,
    BoughtOrderPreparedComponent,
    UserLoggedInComponent,
    UserLoggedOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatMenuModule,
    MatToolbarModule,
    FlexLayoutModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthGuard, AuthService,StorageService, AdminGuard, ShopAssistentGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
