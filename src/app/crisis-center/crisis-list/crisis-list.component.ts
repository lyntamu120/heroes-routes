import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { CRISES, Crisis } from '../crisis.service';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {
  crises = CRISES;
  selectedId: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.selectedId = this.route.snapshot.params['id'];
  }

}
