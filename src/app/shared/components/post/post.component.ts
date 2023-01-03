import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../types/post.types';
import { AuthenticationServiceService } from '../../authentication/authentication-service.service';
import { userLogged } from '../../authentication/authentication-service.service';
import { DevagramApiService } from './../../services/devagram-api.service';
import { FeedService } from '../../services/feed.service';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
	showBoxComment: boolean = true;
	limitCaracterDescriptionPost: number = 90;
	amountLines: number = 1;
	commentNow: string = '';
	estaFazendoRequisicaoParaBackend: boolean = false;

	@Input() post: Post = {} as Post;
	@Input() userAtive: userLogged | null = null;

	constructor(
		private authentication: AuthenticationServiceService,
		private feedService: FeedService
	) {
		this.userAtive = this.authentication.obtainUser();
	}

	ngOnInit(): void {}

	obtainFullDescription(): void {
		this.limitCaracterDescriptionPost = 999999999;
	}

	verifyAmountLine(): void {
		this.commentNow.length > 0
			? (this.amountLines = 2)
			: (this.amountLines = 1);
	}

	public validarComentario(): boolean {
		return (
			!this.estaFazendoRequisicaoParaBackend &&
			this.commentNow.trim().length >= 3
		);
	}

	public async comment() {
		if (this.commentNow.length >= 1) {
			if (!this.validarComentario()) {
				return;
			}

			this.estaFazendoRequisicaoParaBackend = true;

			try {
				await this.feedService.publicComment(
					this.post._id,
					this.commentNow
				);

				this.post.comments.push({
					comments: this.commentNow,
					name: this.userAtive?.name!,
					avatar: this.userAtive?.avatar!
				});

				this.commentNow = '';
				this.alternateComment();
			} catch (error) {
				console.log(error);
			}

			this.estaFazendoRequisicaoParaBackend = false;
		}
	}

	alternateComment(): void {
		this.showBoxComment = !this.showBoxComment;
	}

	obtainIcon(): string {
		const iconbase = this.showBoxComment ? 'commentAtivo' : 'comment';
		return `assets/icon/${iconbase}.svg`;
	}

	public async alternateLike(): Promise<void> {
		try {
			const postLiked = await this.feedService.alternateLike(this.post._id);

			postLiked.likes.push(this.userAtive?.id)

			if(this.post.likeDone) {
				this.post.amountLike!--

			} else {
				this.post.amountLike!++

			}

		} catch (error) {

		}
	}

	likeOrUnlike(): string {
 		const iconbase = this.post.likeDone ? 'heart-full' : 'heart';
		return `assets/icon/${iconbase}.svg`;
	}

}
