import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { ICountry } from 'src/app/models/country';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { IFilter } from 'src/app/models/filter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    FilterPipe
  ]
})
export class HomeComponent implements OnInit {
  public filters: IFilter = {
    query: "",
    region: ""
  }

  constructor(
    private countriesService: CountriesService,
    private filterPipe: FilterPipe
  ) { }

  ngOnInit(): void {
    if (this.countries.length == 0) {
      this.countriesService.fetchCountries().subscribe((countries) => {
        this.countriesService.setCountries(countries);
      });
    }
  }

  setQueryFilter(query: string) {
    this.filters.query = query;
  }

  setRegionFilter(region: string) {
    this.filters.region = region;
  }

  get countries(): ICountry[] { 
    let data = this.countriesService.countries;

    if (this.filters.region) {
      data = data.filter(
        (country) => country.region == this.filters.region
      );
    }

    return this.filterPipe.transform(data, this.filters.query);
  };

  get regions(): string[] {
    return [...new Set(this.countries.map<string>(country => country.region))];
  }
}
