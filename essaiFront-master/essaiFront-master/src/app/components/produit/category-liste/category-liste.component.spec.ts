import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListeComponent } from './category-liste.component';

describe('CategoryListeComponent', () => {
  let component: CategoryListeComponent;
  let fixture: ComponentFixture<CategoryListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
