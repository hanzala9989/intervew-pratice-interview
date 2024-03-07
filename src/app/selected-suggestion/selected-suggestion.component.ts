import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, debounceTime, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-selected-suggestion',
  templateUrl: './selected-suggestion.component.html',
  styleUrls: ['./selected-suggestion.component.scss']
})
export class SelectedSuggestionComponent implements OnInit {
  @ViewChild('hanzalaInput') hanzalaInput!: ElementRef;
  userInput: any;
  responseArray: any[] = [];
  selectedPillArray: any[] =[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.selectedPillArray = [];
  }

  onChangeName(event) {
    this.userInput = event;
    this.searchApi(this.userInput).subscribe(data => {
      console.log(data);
      this.responseArray = data?.users;
      if (this.userInput == '') {
        this.responseArray = [];
      }
    });
  }

  selectItem(item) {
    const object = {
      name: item.firstName + ' ' + item.lastName,
      image: item.image
    }
    this.selectedPillArray.push(object);
    this.userInput = '';
    this.responseArray = [];
    this.focusInput();
  }

  searchApi(query: string): Observable<any> {
    const apiUrl = `https://dummyjson.com/users/search?q=${query.trim()}`;
    return this.http.get(apiUrl).pipe(
      debounceTime(300) // Adjust the debounce time as per your requirements
    );
  }

  removeItem(element) {
    const selectedPillArray = this.selectedPillArray.filter(ele=> ele.name !== element.name)
    this.selectedPillArray = selectedPillArray;    
    this.focusInput();
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Backspace' && this.userInput == '') {
      this.removeItem(this.selectedPillArray[this.selectedPillArray.length - 1]);
    }
    this.focusInput();
  }

  focusInput() {
    this.hanzalaInput.nativeElement.focus();
  }
}
