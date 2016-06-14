import { 
	ADMIN_CREATENODE, ADMIN_DELETENODE } from './actionList'

export function createNode({ id, name, video, links }) {
	console.log("in createNode")
	return { type: ADMIN_CREATENODE, payload: { id, name, video, links }};
}

console.log("sup")
