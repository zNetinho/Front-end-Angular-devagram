import { Comments } from "./Comments.types"

export type Post = {
	_id: string,
	user?: {
		name: string,
		avatar: string
	},
	contentPost: string,
	description: string,
	likes: Array<string>,
	comments: Array<Comments>,
	likeDone?: boolean,
	amountLike?: number
}
