import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { ICountry } from 'src/app/models/country';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public loading: boolean = false;
  public country!: ICountry;
  public borderCountries!: ICountry[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private countriesService: CountriesService
  ) { }

  ngOnInit(): void {
    this.loading = true;

    this.route.params.pipe(
      switchMap(({ code }) => this.countriesService.fetchCountryByCode(code)),
      tap((country) => {
        if ('status' in country) {
          this.router.navigate(['/not-found']);
        } else {
          this.country = country;
        }
      }),
      switchMap(country => this.countriesService.fetchCountryByCodeList(country.borders)),
      tap((borderCountries) => this.borderCountries = borderCountries)
    ).subscribe(() => {
      this.loading = false;
    });
  }

  back() {
    this.location.back();
  }

  listToString(list: any[] = [], field: string): string {
    return list?.map<string>((i: any) => i[`${field}`]).join(', ');
  }
}
