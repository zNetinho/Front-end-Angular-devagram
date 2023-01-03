import { Component, OnInit } from '@angular/core';
import { Post } from '../../types/post.types';
import { userLogged } from '../../authentication/authentication-service.service';
import { AuthenticationServiceService } from '../../authentication/authentication-service.service';
import { FeedService } from '../../services/feed.service';
import { ResponseApi } from '../../types/ResponseApi.types';

@Component({
	selector: 'app-feed',
	templateUrl: './feed.component.html',
	styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {

	public userAtive: userLogged | null = {} as userLogged
	public posts: Array<Post> = [];

	constructor(private authentication: AuthenticationServiceService,
				private feedService: FeedService) {
		this.userAtive = this.authentication.obtainUser();
	   }
	   usuario(): void {
		   return console.log(this.userAtive)
	   }

	ngOnInit(): void {
		this.loadingPost()
	 }




	async loadingPost() {
		try {
			let idUser = '';
			if(this.userAtive === null) {
				return;
			}
			else if (this.userAtive) {
				idUser = this.userAtive.id;
			}

			const postsApi = await this.feedService.loadingPosts(idUser);

			this.posts = postsApi.map(post => ({
				...post,
				user: post.user || {
					name: this.userAtive?.name,
					avatar: this.userAtive?.avatar
				},
				likeDone: post.likes.includes(this.userAtive?.id || ''),
				amountLike: post.likes.length
			}) as Post)

			console.log(this.posts)
		} catch (e: any) {
			console.log(e.error?.erro || 'Erro na função')
		}
	}
	}
