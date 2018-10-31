import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CmsPageGuards } from '../../../cms/guards/cms-page.guard';
import { AuthGuard } from './../../../auth/guards/auth.guard';

import { OrderHistoryPageLayoutModule } from '../../layout/order-history-page-layout/order-history-page-layout.module';
import { OrderHistoryPageComponent } from './order-history-page.component';
import { ConfigurableRoutes } from '@spartacus/core';

const routes: ConfigurableRoutes = [
  {
    path: null,
    canActivate: [AuthGuard, CmsPageGuards],
    component: OrderHistoryPageComponent,
    data: {
      pageLabel: 'orders',
      cxConfigurable: { path: 'myAccount_orders' }
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    OrderHistoryPageLayoutModule
  ],
  declarations: [OrderHistoryPageComponent],
  exports: [OrderHistoryPageComponent]
})
export class OrderHistoryPageModule {}
