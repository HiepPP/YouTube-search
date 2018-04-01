// import { Injectable, Inject } from "@angular/core";
// import { Http } from '@angular/http';
// import { inject } from "@angular/core/src/render3/instructions";
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx';
// import { SearchResult } from './search-result.model';
// import { Response } from "@angular/http/src/static_response";

import {
    Injectable,
    Inject
  } from '@angular/core';
  import { Http, Response } from '@angular/http';
  import { Observable } from 'rxjs/Observable';
  import { SearchResult } from './search-result.model';
  import 'rxjs/add/operator/map';
  
export const YOUTUBE_API_KEY: string = "AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk";
export const YOUTUBE_API_URL: string = "https://www.googleapis.com/youtube/v3/search";


@Injectable()
export class YouTubeSearchService {
    constructor(private http: Http,
        @Inject(YOUTUBE_API_KEY) private apiKey: string,
        @Inject(YOUTUBE_API_URL) private apiURL: string
    ) {

    }

    search(query: string): Observable<SearchResult[]> {
        const params: string = [
            `q=${query}`,
            `key=${this.apiKey}`,
            `part=snippet`,
            `type=video`,
            `maxResults=10`
        ].join('&');

        const queryUrl = `${this.apiURL}?${params}`;

        return this.http.get(queryUrl).map(
            (response: Response) => {
                return (<any>response.json()).items.map(item => {
                    return new SearchResult({
                        id: item.id.videoId,
                        title: item.snippet.title,
                        description: item.snippet.description,
                        thumbnailUrl: item.snippet.thumbnails.high.url
                    })
                })
            }
        )
    }
}