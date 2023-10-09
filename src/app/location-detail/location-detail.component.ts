import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationsService } from '../locations.service';
import { Location } from '../location';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss'],
})
export class LocationDetailComponent implements OnInit {
  location!: Location;
  residentsArray!: string[]

  constructor(
    private route: ActivatedRoute,
    private locationsService: LocationsService
  ) {}

  ngOnInit(): void {
    this.getLocation()
  }

  getLocation(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.locationsService.getLocation(id).subscribe((location) => {
      this.location = location;
      this.residentsArray = this.location.residents
      console.log(this.residentsArray)
    });
  }
}
