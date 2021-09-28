import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {IntroViewComponent} from './intro-view/intro-view.component';
import {ItemViewComponent} from './item-view/item-view.component';
import {CheckoutViewComponent} from './checkout-view/checkout-view.component';
import {ItemCreatorViewComponent} from './item-creator-view/item-creator-view.component';
import {OrderListViewComponent} from './order-list-view/order-list-view.component';
import {OrderSendViewComponent} from './order-send-view/order-send-view.component';
import {OrderViewComponent} from './order/order-view/order-view.component';
import {EditItemsViewComponent} from './edit-items-view/edit-items-view.component';
import {SignUpViewComponent} from './loyalty/sign-up-view/sign-up-view.component';
import {CreatePurchaseComponent} from './loyalty/purchase/create-purchase/create-purchase.component';
import {CustomerListViewComponent} from './loyalty/customer-list-view/customer-list-view.component';
import {CreateMailViewComponent} from './loyalty/create-mail-view/create-mail-view.component';
import {CustomerProfileViewComponent} from './loyalty/customer-profile-view/customer-profile-view.component';
import {BrandProfileViewComponent} from './loyalty/brand-profile-view/brand-profile-view.component';
import {PurchaseItemViewComponent} from './loyalty/purchase/purchase-item-view/purchase-item-view.component';
import {DashboardComponent} from './loyalty/dashboard/dashboard.component';
import {PurchaseListViewComponent} from './loyalty/purchase/purchase-list-view/purchase-list-view.component';
import {SignUpCompletedComponent} from './loyalty/sign-up-completed/sign-up-completed.component';
import {CreateCustomerViewComponent} from './loyalty/create-customer-view/create-customer-view.component';
import {BrandListViewComponent} from './loyalty/brand-list-view/brand-list-view.component';
import {PublishSettingsViewComponent} from './loyalty/publish-settings-view/publish-settings-view.component';
import {CurrentNewsViewComponent} from './loyalty/current-news-view/current-news-view.component';
import {CreateCustomerCompletedViewComponent} from './loyalty/create-customer-completed-view/create-customer-completed-view.component';

const routes: Routes = [
  { path: '', component: IntroViewComponent },
  { path: 'item/:id', component: ItemViewComponent},
  { path: 'checkout', component: CheckoutViewComponent},
  { path: 'createItem', component: ItemCreatorViewComponent},
  { path: 'orderList/:type', component: OrderListViewComponent},
  { path: 'orderSend', component: OrderSendViewComponent},
  { path: 'order/:id', component: OrderViewComponent},
  { path: 'orderList', redirectTo: 'orderList/done'},
  { path: 'editItems', component: EditItemsViewComponent},
  { path: 'admin', component: ItemCreatorViewComponent},
  { path: 'signUp', component: SignUpViewComponent},
  { path: 'signUpCompleted', component: SignUpCompletedComponent},
  { path: 'createPurchase', component: CreatePurchaseComponent},
  { path: 'customers', component: CustomerListViewComponent},
  { path: 'createMail', component: CreateMailViewComponent},
  { path: 'customer/:id', component: CustomerProfileViewComponent},
  { path: 'brand', component: BrandProfileViewComponent},
  { path: 'purchase/:id', component: PurchaseItemViewComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'purchases', component: PurchaseListViewComponent},
  { path: 'createCustomer', component: CreateCustomerViewComponent},
  { path: 'brands', component: BrandListViewComponent},
  { path: 'publishSettings', component: PublishSettingsViewComponent},
  { path: 'currentNews', component: CurrentNewsViewComponent},
  { path: 'createCustomerCompleted/:id', component: CreateCustomerCompletedViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
