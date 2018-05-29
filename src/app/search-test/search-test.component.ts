import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SearchBoxComponent } from '../search-box/search-box.component';
import { YouTubeSearchComponent } from '../you-tube-search/you-tube-search.component';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-search-test',
  templateUrl: './search-test.component.html',
  styleUrls: ['./search-test.component.css']
})
export class SearchTestComponent implements OnInit, AfterViewInit {


  @ViewChild('search') searchbox : ElementRef
  @ViewChild(YouTubeSearchComponent) searchboxcom : YouTubeSearchComponent

  SearchResult: any[]
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.searchbox.nativeElement.placeholder = "asd";
    //this.searchbox.nativeElement.style.backgroundColor = "red"
    Observable.fromEvent(this.searchbox.nativeElement, 'keyup')
    .map(((e:any) => e.target.value))
    .debounceTime(1000)
    .subscribe(res => console.log(res))
  }
  as(){
    this.searchboxcom.updateResults(this.SearchResult);
  }

}
