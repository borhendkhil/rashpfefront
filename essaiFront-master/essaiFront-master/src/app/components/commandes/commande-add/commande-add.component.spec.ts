import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeAddComponent } from './commande-add.component';

describe('CommandeAddComponent', () => {
  let component: CommandeAddComponent;
  let fixture: ComponentFixture<CommandeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommandeAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
