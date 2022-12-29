import { Component, OnInit } from '@angular/core';
import { Post } from '../../types/post.types';
import { userLogged } from '../../authentication/authentication-service.service';
import { AuthenticationServiceService } from '../../authentication/authentication-service.service';

@Component({
	selector: 'app-feed',
	templateUrl: './feed.component.html',
	styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {

	public userAtive: userLogged | null = {} as userLogged
	posts: Array<Post> = [
		{
			contentPost:'https://cdn.fansshare.com/images/tumblrimages/nike-backgrounds-tumblr-wallpaper-996000756.jpg',
			description:'Esse comentario e somente para ter um mock e realizar a estilização antes de chamar da API!, e aqui estamos testando a função para esconder texto',
			amountLike: 258,
			comments: [{
				name:'Bruno',
				comment:'Lorem ipsum 123'
			},
			{
				name:'Bruno',
				comment:'Lorem ipsum 123'
			}],
			user: {
				name: 'Thiago',
				avatar:'https://i0.wp.com/www.multarte.com.br/wp-content/uploads/2018/01/1a57f58e84fe80c494bd2874ad55695b-wallpapers-tumblr-tumblr-wallpaper.jpg?resize=612%2C960&ssl=1'
			},
		} as Post
	];

	constructor(private authentication: AuthenticationServiceService) {
		this.userAtive = this.authentication.obtainUser();
	   }
	   usuario(): void {
		   return console.log(this.userAtive)
	   }

	ngOnInit(): void {
	}


 }
