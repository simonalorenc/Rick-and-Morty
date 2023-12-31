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
  residentsArray: string[] = []
  pageNumber: number = 1

  constructor(private locationsService: LocationsService) {}

  ngOnInit(): void {
    this.locationsService.getAllLocations()
    this.locationsService.getLocationsArray().subscribe(
      (locations: Location[]) => {
        this.locationsArray = locations
      }
    )
  }

  addPageNumber(): void {
    this.pageNumber = this.pageNumber + 1;
    if (this.pageNumber > 7) {
      this.pageNumber = 7;
    }
  }

  removePageNumber(): void {
    this.pageNumber = this.pageNumber - 1;
    if (this.pageNumber < 1) {
      this.pageNumber = 1;
    }
  }

  getPageNumber(): void {
    this.locationsService.getPage(this.pageNumber).subscribe({
      next: (response) => {
        this.locationsArray = response.results;
        this.locationsService.locationsArray = this.locationsArray
      },
      error: (error) => console.log('GetLocation error: ' + error),
      complete: () => console.log('GetLocation complete'),
    });
  }

}
