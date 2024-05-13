import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserSearchComponent } from './user-search.component';

describe('UserSearchComponent', () => {
  let component: UserSearchComponent;
  let fixture: ComponentFixture<UserSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserSearchComponent],
      imports: [ HttpClientTestingModule ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call searchUser method with input value when search button is clicked', fakeAsync(() => {
    spyOn(component, 'searchUser'); // Spy on the searchUser method
    const searchButton = fixture.nativeElement.querySelector('button');
    const input = fixture.nativeElement.querySelector('input');
    const username = 'testuser';

    input.value = username;
    input.dispatchEvent(new Event('input')); // Update input value
    fixture.detectChanges();

    searchButton.click(); // Simulate click event

    tick();

    expect(component.searchUser).toHaveBeenCalledWith(username);
  }));
});