// import { Component, OnInit, EventEmitter,ElementRef,Output } from '@angular/core';
import { SearchResult } from '../you-tube-search/search-result.model';
import { YouTubeSearchService } from '../you-tube-search/you-tube-search.service';
// import { Observable } from 'rxjs/Observable';

import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef
} from '@angular/core';

// By importing just the rxjs operators we need, We're theoretically able
// to reduce our build size vs. importing all of them.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/count';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();
  constructor(private searchService: YouTubeSearchService,
    private el: ElementRef) { }

  ngOnInit() {

    // console.log(Observable.fromEvent(this.el.nativeElement, 'keyup').count());

    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value)
      .filter((text: string) => text.length > 1)
      .debounceTime(250)
      .do(() => this.loading.emit(true))
      .map((query: string) => this.searchService.search(query))
      .switch()
      .subscribe(
      (result: SearchResult[]) => {
        this.loading.emit(false);
        this.results.emit(result);
      },
      (err: any) => {
        console.log(err);
        this.loading.emit(false);
      },
      () => {
        this.loading.emit(false);
      }
      );
  }

}
