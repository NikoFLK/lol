import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerFormComponent } from './summoner-form.component';

describe('SummonerFormComponent', () => {
  let component: SummonerFormComponent;
  let fixture: ComponentFixture<SummonerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummonerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
