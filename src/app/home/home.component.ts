import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { KiloMetersToMilesPipe } from '../kilo-meters-to-miles.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [KiloMetersToMilesPipe]
})
export class HomeComponent implements OnInit, DoCheck {

  inputVal: number;
  constructor(private kiloMetersToMilesPipe: KiloMetersToMilesPipe) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    console.log(this.kiloMetersToMilesPipe.transform(this.inputVal));
  }
}
