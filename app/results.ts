import { Component} from '@angular/core';
import { FlickrService } from './flickr.service';
import { FORM_PROVIDERS, FormBuilder, Validators} from '@angular/common';
import { Observable} from 'rxjs/Observable';
import 'rxjs/RX';

@Component({
  selector: 'results',
  templateUrl: 'results.template.html',
  providers: [FlickrService]
})
export class Results {
  searchForm: any;
  model$: Observable<any>;
  photos: Array<string>;
  constructor(private _formBuilder: FormBuilder, private _flickrService: FlickrService) {
    this.searchForm = this._formBuilder.group({
      'search' : ['', Validators.required]
    });
    this.model$ = this.searchForm.controls.search.valueChanges
      .debounceTime(500)
      .switchMap((query: string) => this._flickrService.getResult(query))
      .subscribe((val: any) => this.photos = val);
  }
}
