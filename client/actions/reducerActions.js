import { ADMIN_OPEN_ADDARTICLE, ADMIN_CLOSE_ADDARTICLE, ADMIN_OPEN_ADDVIDEO, ADMIN_CLOSE_ADDVIDEO, ADMIN_CREATENODE, ADMIN_OPEN_VIEW, ADMIN_CLOSE_VIEW, ADMIN_OPENCREATE, ADMIN_CREATEDCOMPLETE, ADMIN_DELETENODE, ADMIN_ADDCONNECTIONS, USER_OPEN_MODULE, USER_CLOSE_MODULE,
		 ADMIN_ADDVIDEO, ADMIN_OPEN_EDIT, ADMIN_CLOSE_EDIT, ADMIN_ADDARTICLE, ADMIN_ADDDESCRIPTION, SELECT_NODE, REGISTER_CY, CLOSE_USER_VIEW } from './actionList'

export function createNode({cy, currentNode, id, description, styles, admins, width, height, type, connections}) {
	
	return { type: ADMIN_CREATENODE, payload: {
				cy: cy,
				currentNode : currentNode,
				id : id,
				name : name,
				description: description,
				styles : styles,
				admins: admins,
				width: width,
				height: height,
				type: type, 
				connections: connections
			}
	}    
}

export function openEdit(){
	return { type: ADMIN_OPEN_EDIT, payload: { edit: true }}
}

export function openAddArticle(){
	return { type: ADMIN_OPEN_ADDARTICLE, payload: {addArticle: true}}
}

export function closeAddArticle(){
	return { type: ADMIN_CLOSE_ADDARTICLE, payload: {addArticle: false}}
}

export function openAddVideo(){
	return { type: ADMIN_OPEN_ADDVIDEO, payload: {addVideo: true}}
}

export function closeAddVideo(){
	return { type: ADMIN_CLOSE_ADDVIDEO, payload: {addVideo:false}}
}

export function closeEdit(){
	return { type: ADMIN_CLOSE_EDIT, payload: {edit: false}}
}

export function openAdmin(){
	return { type: ADMIN_OPEN_VIEW, payload : { openAdminView: true }}
}

export function closeAdmin(){
	return { type: ADMIN_OPEN_VIEW, payload : { openAdminView: false }}
}

export function openCreate(){
	return { type: ADMIN_OPENCREATE , payload : { create: true }}
}

export function closeCreate(){
	return { type: ADMIN_CREATEDCOMPLETE , payload : { create: false }}
}

export function selectNode({moduleDescription, currentNode, previousNode, openUserView, currentArticles, currentVideos}){
	return { type: SELECT_NODE, payload :  {moduleDescription: moduleDescription, currentArticles: currentArticles, currentVideos: currentVideos, currentNode: currentNode, previousNode: previousNode, openUserView : openUserView} }
}

export function registerCY({cy}){
	return { type: REGISTER_CY, payload : {cy: cy} }
}

export function closeUserView(){
	return {type: CLOSE_USER_VIEW, payload: { openUserView: false } }
}

export function openModule(){
	return {type: USER_OPEN_MODULE, payload : { openModuleView: true, openUserView: false } }
}

export function closeModule(){
	return {type: USER_CLOSE_MODULE, payload : { openModuleView: false } }
}

