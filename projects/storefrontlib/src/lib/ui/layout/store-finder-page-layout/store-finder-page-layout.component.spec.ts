import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { combineReducers, StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { StoreFinderPageLayoutComponent } from './store-finder-page-layout.component';
import { StoreFinderPagingComponent } from '../../../store-finder/components/store-finder-paging/store-finder-paging.component';
import { StoreFinderListComponent } from '../../../store-finder/components/store-finder-list/store-finder-list.component';
import { StoreFinderSearchComponent } from '../../../store-finder/components/store-finder-search/store-finder-search.component';
import { MaterialModule } from '../../../material.module';
import {
  StoreFinderService,
  StoreDataService
} from '../../../store-finder/services';
import { OccE2eConfigurationService } from '../../../occ/e2e/e2e-configuration-service';
/* tslint:disable */
import { StoreFinderListItemComponent } from '../../../store-finder/components/store-finder-list/store-finder-list-item/store-finder-list-item.component';
/* tslint:enable */
import { StoreFinderMapComponent } from '../../../store-finder/components/store-finder-map/store-finder-map.component';

import { ConfigService } from '../../../occ/config.service';
import * as fromCmsReducer from '../../../cms/store/reducers';
import * as fromStore from '../../../store-finder/store';
import * as fromRoot from '../../../routing/store';

describe('StoreFinderPageLayoutComponent', () => {
  let component: StoreFinderPageLayoutComponent;
  let fixture: ComponentFixture<StoreFinderPageLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MaterialModule,
        CommonModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        StoreModule.forRoot({
          ...fromRoot.getReducers(),
          stores: combineReducers(fromStore.reducers),
          cms: combineReducers(fromCmsReducer.getReducers())
        })
      ],
      declarations: [
        StoreFinderPageLayoutComponent,
        StoreFinderPagingComponent,
        StoreFinderListItemComponent,
        StoreFinderListComponent,
        StoreFinderSearchComponent,
        StoreFinderMapComponent
      ],
      providers: [
        StoreFinderService,
        OccE2eConfigurationService,
        ConfigService,
        StoreDataService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreFinderPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
