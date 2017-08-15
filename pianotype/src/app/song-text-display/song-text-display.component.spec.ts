import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongTextDisplayComponent } from './song-text-display.component';

describe('SongTextDisplayComponent', () => {
  let component: SongTextDisplayComponent;
  let fixture: ComponentFixture<SongTextDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongTextDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongTextDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
