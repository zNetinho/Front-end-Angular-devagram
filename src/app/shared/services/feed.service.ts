import { Injectable } from '@angular/core';
import { DevagramApiService } from './devagram-api.service';

import { Post } from '../types/post.types';
import { ResponseApi } from '../types/ResponseApi.types';

@Injectable({
  providedIn: 'root'
})
export class FeedService extends DevagramApiService {


	async loadingPosts(idUser?: string): Promise<Array<Post>> {
		return this.get( 'feed' + (idUser ? `id=${idUser}` : ''))
	}

	async publicComment(idPost: string, comment: string): Promise<ResponseApi>{
		return this.put(`comment?id=${idPost}`, { comment })
	}

	async alternateLike(idPost: string) {
		return this.put(`like?id=${idPost}`, {})
	}

}
