import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionhomeComponent } from './collectionhome.component';

describe('CollectionhomeComponent', () => {
  let component: CollectionhomeComponent;
  let fixture: ComponentFixture<CollectionhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
