import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../types/post.types';
import { AuthenticationServiceService } from '../../authentication/authentication-service.service';
import { userLogged } from '../../authentication/authentication-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

	like: boolean = false
	showBoxComment: boolean = true
	limitCaracterDescriptionPost: number = 90;
	amountLines: number = 1;
	commentNow: string = '';

@Input() post: Post = {} as Post
@Input() userAtive: userLogged | null = null;

  constructor() {

   }

  ngOnInit(): void {
  }

  obtainFullDescription(): void {
	this.limitCaracterDescriptionPost = 999999999
  }

  verifyAmountLine(): void {
	this.commentNow.length > 0 ? this.amountLines = 2 : this.amountLines = 1
  }

  comment() {
	console.log('Ola teste de comentario')
  }

  alternateComment(): void {
	this.showBoxComment = !this.showBoxComment;
  }

  obtainIcon(): string {
	const iconbase = this.showBoxComment ? 'commentAtivo' : 'comment';
	return `assets/icon/${iconbase}.svg`
  }

  alternateLike(): void {
	this.like = !this.like;
  }

  likeOrUnlike(): string {
	const iconbase = this.like ? 'heart-full' : 'heart';
	return `assets/icon/${iconbase}.svg`
  }

}
