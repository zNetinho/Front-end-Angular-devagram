import { Component, OnInit } from '@angular/core';
import { Post } from '../../types/post.types';

@Component({
	selector: 'app-feed',
	templateUrl: './feed.component.html',
	styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
	public posts: Array<Post> = [
		{
			contentPost:'https://cdn.fansshare.com/images/tumblrimages/nike-backgrounds-tumblr-wallpaper-996000756.jpg',
			description:'Esse comentario e somente para ter um mock e realizar a estilização antes de chamar da API',
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
		} as Post,
		{
			contentPost:'https://pbs.twimg.com/media/DVSNLLmVQAARRoo.jpg',
			description:'Esse comentario e somente para ter um mock e realizar a estilização antes de chamar da API',
			amountLike: 2,
			comments: [{
				name:'Bruno',
				comment:'Lorem ipsum 123'
			}],
			user: {
				name: 'Bruno',
				avatar:'https://i0.wp.com/www.multarte.com.br/wp-content/uploads/2018/01/6322828-tumblr-pictures.jpg?resize=660%2C1200&ssl=1'
			},
		} as Post,
		{
			contentPost:'https://www.blogderocha.com.br/wp-content/uploads/2016/02/Imagens-Tumblr-Notas-de-musicas-20120802-tumblr_lhn2sikgjl1qcmnr3o1_500.jpg',
			amountLike: 2,
			comments: [{
				name:'Bruno',
				comment:'Lorem ipsum 123'
			}],
			description:'Esse comentario e somente para ter um mock e realizar a estilização antes de chamar da API',
			user: {
				name: 'Neto',
				avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgA8q2wmiY7tf9DFYiOug25mqSyEdwAGo3RA&usqp=CAU'
			},
		} as Post,
		{
			contentPost:'https://www.blogderocha.com.br/wp-content/uploads/2016/02/Imagens-Tumblr-Notas-de-musicas-20120802-tumblr_lhn2sikgjl1qcmnr3o1_500.jpg',
			amountLike: 2,
			comments: [{
				name:'Bruno',
				comment:'Lorem ipsum 123'
			}],
			description:'Esse comentario e somente para ter um mock e realizar a estilização antes de chamar da API',
			user: {
				name: 'Neto',
				avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgA8q2wmiY7tf9DFYiOug25mqSyEdwAGo3RA&usqp=CAU'
			},
		} as Post,
	];

	constructor() {}

	ngOnInit(): void {}
}
