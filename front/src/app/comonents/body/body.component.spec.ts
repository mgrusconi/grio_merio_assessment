import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../../material.modules';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CnxService } from '../../services/cnx.service';
import { BodyComponent } from './body.component';

describe('BodyComponent', () => {
  let component: BodyComponent;
  let fixture: ComponentFixture<BodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BodyComponent],
      imports: [
        MaterialModule,
        HttpClientModule,
        NoopAnimationsModule
      ],
      providers: [CnxService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render body title', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.body-title').textContent).toContain('Symfony Repositories');
  }));

});
