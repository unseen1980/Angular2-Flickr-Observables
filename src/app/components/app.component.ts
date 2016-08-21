import { Component, OnInit} from '@angular/core';
import { FlickrService } from '../services/flickr.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  //Angular-cli doesn't like moduleId'
  //moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [FlickrService]
})
export class MainAppComponent implements OnInit {
  //searchForm :FormGroup;
  searchControl = new FormControl();


  model$: Observable<any>;
  photos: any;
  constructor(private _formBuilder: FormBuilder, private _flickrService: FlickrService) {
  }
  ngOnInit() {
    this.searchControl.valueChanges
      .debounceTime(500)
      .switchMap((query: string) => this._flickrService.getResult(query))
      .subscribe(value => {
        this.photos = value;
      });
  }
}
