import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CmsPageGuards } from '../../../cms/guards/cms-page.guard';
import { AuthGuard } from './../../../auth/guards/auth.guard';
import { OrderConfirmationPageLayoutModule } from '../../layout/order-confirmation-page-layout/order-confirmation-page-layout.module';
import { OrderConfirmationPageComponent } from './order-confirmation-page.component';
import { OrderConfirmationPageGuard } from '../../../checkout/guards/order-confirmation-page.guard';
import { ConfigurableRoutes } from '@spartacus/core';

const routes: ConfigurableRoutes = [
  {
    path: null,
    canActivate: [AuthGuard, CmsPageGuards, OrderConfirmationPageGuard],
    component: OrderConfirmationPageComponent,
    data: {
      pageLabel: 'orderConfirmationPage',
      cxConfigurable: { path: 'orderConfirmation' }
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    OrderConfirmationPageLayoutModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrderConfirmationPageComponent],
  exports: [OrderConfirmationPageComponent]
})
export class OrderConfirmationPageModule {}
