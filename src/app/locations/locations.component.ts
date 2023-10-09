import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../locations.service';
import { Location } from '../location';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit{
  locationsArray!: Location[]

  constructor(private locationsService: LocationsService) {}

  ngOnInit(): void {
    this.locationsService.getAllLocations()
    this.locationsService.getLocationsArray().subscribe(
      (locations: Location[]) => {
        this.locationsArray = locations
      }
    )
  }

}
