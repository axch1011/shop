import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
// @ts-ignore
import {AngularFirestore, AngularFirestoreModule, SETTINGS} from '@angular/fire/firestore';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IntroViewComponent } from './intro-view/intro-view.component';
import { NavigationTopComponent } from './navigation-top/navigation-top.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { CheckoutViewComponent } from './checkout-view/checkout-view.component';
import { ItemCreatorViewComponent } from './item-creator-view/item-creator-view.component';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { OrderListViewComponent } from './order-list-view/order-list-view.component';
import { OrderSendViewComponent } from './order-send-view/order-send-view.component';
import { OrderViewComponent } from './order/order-view/order-view.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { EditItemsViewComponent } from './edit-items-view/edit-items-view.component';
import { SignUpViewComponent } from './loyalty/sign-up-view/sign-up-view.component';
import { SignUpCompletedComponent } from './loyalty/sign-up-completed/sign-up-completed.component';
import { CreatePurchaseComponent } from './loyalty/purchase/create-purchase/create-purchase.component';
import { CustomerListViewComponent } from './loyalty/customer-list-view/customer-list-view.component';
import { CreateMailViewComponent } from './loyalty/create-mail-view/create-mail-view.component';
import { CustomerProfileViewComponent } from './loyalty/customer-profile-view/customer-profile-view.component';
import { BrandProfileViewComponent } from './loyalty/brand-profile-view/brand-profile-view.component';
import { PurchaseItemViewComponent } from './loyalty/purchase/purchase-item-view/purchase-item-view.component';
import { DashboardComponent } from './loyalty/dashboard/dashboard.component';
import { PurchaseListViewComponent } from './loyalty/purchase/purchase-list-view/purchase-list-view.component';
import {AngularFireAnalyticsModule} from '@angular/fire/analytics';
import { CreateCustomerViewComponent } from './loyalty/create-customer-view/create-customer-view.component';
import { TopNavigationViewComponent } from './loyalty/top-navigation-view/top-navigation-view.component';
import { SideNavigationViewComponent } from './loyalty/side-navigation-view/side-navigation-view.component';
import { BrandListViewComponent } from './loyalty/brand-list-view/brand-list-view.component';
import { PublishSettingsViewComponent } from './loyalty/publish-settings-view/publish-settings-view.component';
import { CurrentNewsViewComponent } from './loyalty/current-news-view/current-news-view.component';
import { CreateCustomerCompletedViewComponent } from './loyalty/create-customer-completed-view/create-customer-completed-view.component';
import { SalesGraphComponent } from './loyalty/dashboard/sales-graph/sales-graph.component';
import {ChartsModule} from 'ng2-charts';
import { ProductRevenueGraphComponent } from './loyalty/dashboard/product-revenue-graph/product-revenue-graph.component';
import { PurchasesPerDayGraphComponent } from './loyalty/dashboard/purchases-per-day-graph/purchases-per-day-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroViewComponent,
    NavigationTopComponent,
    ItemListComponent,
    ItemViewComponent,
    CheckoutViewComponent,
    ItemCreatorViewComponent,
    OrderListViewComponent,
    OrderSendViewComponent,
    OrderViewComponent,
    SideNavigationComponent,
    EditItemsViewComponent,
    SignUpViewComponent,
    SignUpCompletedComponent,
    CreatePurchaseComponent,
    CustomerListViewComponent,
    CreateMailViewComponent,
    CustomerProfileViewComponent,
    BrandProfileViewComponent,
    PurchaseItemViewComponent,
    DashboardComponent,
    PurchaseListViewComponent,
    CreateCustomerViewComponent,
    TopNavigationViewComponent,
    SideNavigationViewComponent,
    BrandListViewComponent,
    PublishSettingsViewComponent,
    CurrentNewsViewComponent,
    CreateCustomerCompletedViewComponent,
    SalesGraphComponent,
    ProductRevenueGraphComponent,
    PurchasesPerDayGraphComponent,
  ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAnalyticsModule,
        AppRoutingModule,
        AngularFirestoreModule,
        FormsModule,
        AngularFireStorageModule,
        ReactiveFormsModule,
        ChartsModule
    ],
  providers: [
    {
      provide: SETTINGS,
      useValue: environment ? undefined : {
        host: 'localhost:8080',
        FIRESTORE_EMULATING_HOST: 'localhost:8080',
        ssl: false
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
