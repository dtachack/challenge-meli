import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  public search = new FormControl('');

  constructor(
    private router: Router
  ) { }

  public onSearch(event?: Event) {
    event?.preventDefault();
    if (!!this.search.value)
      this.router.navigate([`items`], { queryParams: { search: this.search.value } });
  }

  public home(): void {
    this.router.navigate(['/']);
  }

}