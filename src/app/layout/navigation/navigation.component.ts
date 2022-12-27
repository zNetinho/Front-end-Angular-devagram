import { Component, OnInit } from '@angular/core';
import { itemMenus } from '../types/itemMenu.types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

	mapRoutes: itemMenus = {
		home: {
			img:'home-2',
			routes: ['/']
		},
		publication: {
			img:'plus-square',
			routes: ['']
		},
		perfil: {
			img:'User',
			routes: ['']
		}
	}

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  obtainImage(menu: string): string {
	const route = this.mapRoutes[menu];
	const icon = route.routes.includes(this.router.url)
	? `${route.img}Ativo`
	: route.img;

	return `assets/icon/${icon}.svg`
  }

}
