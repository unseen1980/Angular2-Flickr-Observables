import { Component} from '@angular/core';
import { FlickrService } from '../services/flickr.service';
import { FORM_PROVIDERS, FormBuilder, Validators} from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [FlickrService]
})
export class MainAppComponent {
  searchForm: any;
  model$: Observable<any>;
  photos: Array<string>;
  constructor(private _formBuilder: FormBuilder, private _flickrService: FlickrService) {
    this.searchForm = this._formBuilder.group({
      'search': ['', Validators.required]
    });
    this.model$ = this.searchForm.controls.search.valueChanges
      .debounceTime(500)
      .switchMap((query: string) => this._flickrService.getResult(query))
      .subscribe((val: any) => this.photos = val);
  }
}
