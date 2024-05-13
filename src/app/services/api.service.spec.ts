
import { TestBed ,inject} from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';


describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
   

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve user data from GitHub API', inject([ApiService, HttpTestingController],
    (service: ApiService, httpMock: HttpTestingController) => {
      const mockUserData = {
        login: 'testuser',
        id: 123456,
        name: 'Test User',
        // Add more properties as per your actual API response
      };

      const username = 'testuser';
      service.getUser(username).subscribe(user => {
        expect(user).toEqual(mockUserData);
      });

      const req = httpMock.expectOne(`https://api.github.com/users/${username}`);
      expect(req.request.method).toEqual('GET');
      req.flush(mockUserData);
      httpMock.verify();
    }));

  it('should retrieve repositories data from GitHub API', inject([ApiService, HttpTestingController],
    (service: ApiService, httpMock: HttpTestingController) => {
      const mockReposData = [
        { id: 1, name: 'repo1' },
        { id: 2, name: 'repo2' },
        // Add more repositories as per your actual API response
      ];

      const username = 'testuser';
      const page = 1;
      const perPage = 10;
      service.getRepos(username, page, perPage).subscribe(repos => {
        expect(repos).toEqual(mockReposData);
      });

      const req = httpMock.expectOne(`https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${page}`);
      expect(req.request.method).toEqual('GET');
      req.flush(mockReposData);
      httpMock.verify();
    }));
  
});



