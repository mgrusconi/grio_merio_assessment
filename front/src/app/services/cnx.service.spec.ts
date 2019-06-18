import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CnxService } from './cnx.service';
import { Configs } from '../config';

describe('CnxService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CnxService
    ],
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: CnxService = TestBed.get(CnxService);
    expect(service).toBeTruthy();
  });

  it('should return a resolved Promise', async(inject([CnxService], (service: CnxService) => {
    service.getRepos(Configs.backends[1].url).then((data) => {
      expect(data.length).toEqual(30);
    });
  })));
});
