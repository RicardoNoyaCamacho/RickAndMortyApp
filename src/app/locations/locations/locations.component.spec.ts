import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LocationsComponent } from './locations.component';
import { Store, StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Subscription } from 'rxjs';
import { appReducers } from '../../store/app.reducers';

describe('LocationsComponent', () => {
  let component: LocationsComponent;
  let fixture: ComponentFixture<LocationsComponent>;

  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        StoreModule.forRoot(appReducers),
      ],
      declarations: [LocationsComponent],
      providers: [provideMockStore()],
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', inject([Store], (store: any) => {
    expect(store).toBeTruthy();
  }));

  it('debe de llamarse el metodo list', () => {
    const l = {
      id: 0,
      name: '',
      type: '',
      dimension: '',
      residents: [''],
      url: '',
      created: new Date(),
    };

    const epsia = spyOn(component, 'list').and.callFake((resp) => of(resp));

    component.list(l);

    expect(epsia).toHaveBeenCalled();
  });

  it('unsubscribes cuando ejecute ngOnDestoy', () => {
    component.locationsSubs = new Subscription();

    spyOn(component.locationsSubs, 'unsubscribe');
    component.ngOnDestroy();

    expect(component.locationsSubs.unsubscribe).toHaveBeenCalledTimes(1);
  });

  it('ejecutar dispatch', () => {
    let fixture = TestBed.createComponent(LocationsComponent);
    let app = fixture.debugElement.componentInstance;

    var mockStore = fixture.debugElement.injector.get(Store);
    var storeSpy = spyOn(mockStore, 'dispatch').and.callFake(function () {
      console.log('dispatching from the spy!');
    });
  });
});
