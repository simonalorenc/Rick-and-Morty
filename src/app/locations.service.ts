import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocationResult, Location } from './location';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  private API = 'https://rickandmortyapi.com/api'
  locationsArray!: Location[]
  locationsArraySubject: BehaviorSubject<Location[]> = new BehaviorSubject<Location[]>([])

  constructor(private http: HttpClient) {}

  getLocationsApi(): Observable<LocationResult> {
    const API_LOCATION = `${this.API}/location`
    return this.http.get<LocationResult>(API_LOCATION)
  }

  getAllLocations(): void {
    this.getLocationsApi().subscribe(
      (locationResult: LocationResult) => {
        const locations = locationResult.results
        this.locationsArray = locations
        console.log(locations)
        this.locationsArraySubject.next(locations)
      }
    )
  }

  getLocationsArray(): Observable<Location[]> {
    return this.locationsArraySubject.asObservable()
  }
}
