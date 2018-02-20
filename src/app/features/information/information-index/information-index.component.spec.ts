import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {InformationIndexComponent} from './information-index.component';

describe('FtrInfoIndexComponent', () => {
  let component: InformationIndexComponent;
  let fixture: ComponentFixture<InformationIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
