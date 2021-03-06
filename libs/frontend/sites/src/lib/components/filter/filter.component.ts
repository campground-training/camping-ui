import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectFilter, selectNumberOfFilteredSites } from '../../state';
import { FilterState } from '../../state/reducers/filter.reducer';
import * as commands from '../../state/actions/filter.commands';
@Component({
  selector: 'camping-sites-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent implements OnInit {
  filter$!: Observable<FilterState>;
  count$!: Observable<{
    total: number;
    withWater: number;
    withElectrical: number;
    hasRvParking: number;
    hasLakefront: number;
  }>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.filter$ = this.store.select(selectFilter);
    this.count$ = this.store.select(selectNumberOfFilteredSites);
  }

  showAll() {
    this.store.dispatch(commands.filterShowAll());
  }
  showPrimitive() {
    this.store.dispatch(commands.filterShowPrimitive());
  }

  showElectricity(payload: boolean | null) {
    this.store.dispatch(commands.filterShowElectricity({ payload }));
  }

  showWater(payload: boolean | null) {
    this.store.dispatch(commands.filterShowWater({ payload }));
  }

  showLakefront(payload: boolean | null) {
    this.store.dispatch(commands.filterShowLakefront({ payload }));
  }
  showRvParking(payload: boolean | null) {
    this.store.dispatch(commands.filterShowRvParking({ payload }));
  }
}
