import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocationResult } from './location';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  private API = 'https://rickandmortyapi.com/api'
  locationsArray!: []
  locationsArraySubject: BehaviorSubject<LocationResult[]> = new BehaviorSubject<LocationResult[]>([])

  constructor() { }
}
