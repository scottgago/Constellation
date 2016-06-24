import { CLOSE_BLASTDOORS, USER_SUBMITANSWER, OPEN_BLASTDOORS, USER_SUBMITQUESTION, USER_OPEN_SUBMITQUESTION, USER_CLOSE_SUBMITQUESTION, ADMIN_EDIT_EDGES, ADMIN_SUBMIT_EDIT, TOGGLE_ADMIN, FETCH_NODES, ADMIN_CREATE_EDGES, ADMIN_OPEN_ADDARTICLE, ADMIN_CLOSE_ADDARTICLE, ADMIN_OPEN_ADDVIDEO, ADMIN_CLOSE_ADDVIDEO, ADMIN_CREATENODE, ADMIN_OPEN_VIEW, ADMIN_CLOSE_VIEW, ADMIN_OPENCREATE, ADMIN_CREATEDCOMPLETE, ADMIN_DELETENODE, ADMIN_ADDCONNECTIONS, USER_OPEN_MODULE, USER_CLOSE_MODULE,
		 ADMIN_ADDVIDEO, ADMIN_OPEN_EDIT, ADMIN_CLOSE_EDIT, ADMIN_ADDARTICLE, ADMIN_ADDDESCRIPTION, SELECT_NODE, REGISTER_CY, CLOSE_USER_VIEW } from './actionList'
import Firebase from 'firebase';

const Posts = new Firebase('https://constellations-3ccaa.firebaseio.com');
const nodesRef = Posts.child('elements')

export function openQuestion(){
	return {type: USER_OPEN_SUBMITQUESTION, payload: {questionPrompt: true}}
}

export function openBlastDoor(){
	return {type: OPEN_BLASTDOORS, payload: {closeBlastDoors: false}}
}

export function closeBlastDoor(){
	return {type: CLOSE_BLASTDOORS, payload: {closeBlastDoors: true}}
}

export function submitAnswer(currentNode){

	var nodeRef = new Firebase(currentNode._private.data.firebaseID + "/data")

	nodeRef.update({
		questions: currentNode._private.data.questions
	})

	return {type: USER_SUBMITANSWER, payload: {}}
}

export function submitQuestion(currentNode){

	var nodeRef = new Firebase(currentNode._private.data.firebaseID + "/data")

	var questionsObject = {
		question: currentNode._private.data.questions[currentNode._private.data.questions.length-1].question,
		subject: currentNode._private.data.questions[currentNode._private.data.questions.length-1].subject,
		answers: '[]'
	}

	var copy = currentNode._private.data.questions.slice()
	copy.pop()
	copy.push(questionsObject)

	nodeRef.update({
		questions: copy
	})

	return {type: USER_SUBMITQUESTION, payload: {questionPrompt: false}}
}

export function closeQuestion(){
	return {type: USER_CLOSE_SUBMITQUESTION, payload: {questionPrompt: false}}
}

export function submitEdit(currentNode){

	var nodeRef = new Firebase(currentNode._private.data.firebaseID + "/data/style")

	nodeRef.set({
		height: currentNode._private.style.height.value,
		width: currentNode._private.style.width.value,
		starType: currentNode._private.style['background-image'].strValue
	})
	

	return { type: ADMIN_SUBMIT_EDIT, payload: {}}
}

export function editEdges({selectedEdge}){

	var newEdge = nodesRef.push()

	var newEdgeObj = {selectedEdge}

	newEdgeObj.selectedEdge.data.firebaseID = newEdge.toString(),

	console.log(newEdgeObj.selectedEdge)

	newEdge.setWithPriority(newEdgeObj.selectedEdge, newEdgeObj.selectedEdge.data.id)
	return { type: ADMIN_EDIT_EDGES, payload: { edgesChanges: false} }
}

export function addVideo(currentNode){


	var nodeRef = new Firebase(currentNode._private.data.firebaseID + "/data")

	nodeRef.update({
		videos: currentNode._private.data.videos
	})
	

	return { type: ADMIN_ADDVIDEO, payload: {}}
}

export function addArticle(currentNode){

	var nodeRef = new Firebase(currentNode._private.data.firebaseID + "/data")

	nodeRef.update({
		articles: currentNode._private.data.articles
	})
	

	return { type: ADMIN_ADDARTICLE, payload: {}}
}

export function createNode({cy, currentNode, id, description, styles, admins, width, height, type, connections}) {


		var nodeName = {id: id}.id
		var height = {height: height}.height
		var width = {width: width}.width
		var starType = {type: type}.type

		var newNode = nodesRef.push()

		console.log(newNode)

		newNode.setWithPriority({
			group: 'nodes',
        	data: { 
        		firebaseID: newNode.toString(),
	          	id: nodeName,
	          	videos: '[]',
	          	articles: '[]',
	          	description: "",
	          	questions: '[]',
	          	quizzes: '[]',
	          	style: {
	          		width: width,
	          		height: height,
	          		starType: starType
	          	}
        	}
      	}, nodeName)

      	if(!{connections}.connections.length){
      		nodesRef.push({
      			group: 'edges',
      			data: {
      				id: nodeName + {currentNode}.currentNode._private.data.id,
      				source: nodeName,
      				target: {currentNode}.currentNode._private.data.id
      			}
      		})
      	}


      	for(var i = 0; i < {connections}.connections.length; i++){
      		nodesRef.push({
      			group: 'edges',
      			data: {
      				id: nodeName + {connections}.connections[i],
      				source: nodeName,
      				target: {connections}.connections[i]
      			}
      		})
      	}
	
	
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

export function toggleAdmin({adminMode}) {
	return { type: TOGGLE_ADMIN, payload: {adminMode: adminMode}}
}


export function fetchNodes(callback) {

  return dispatch => {
    Posts.once('value', snapshot => {
      dispatch({
        type: FETCH_NODES,
        payload: {nodes: snapshot.val()}
      });
      var arr = []
      for(var key in snapshot.val().elements){
      	if(snapshot.val().elements[key].group === "nodes"){
	      	var newObj = {
				group: snapshot.val().elements[key].group,
	        	data: { 
		          	id: snapshot.val().elements[key].data.id,
		          	firebaseID: snapshot.val().elements[key].data.firebaseID,
		          	description: snapshot.val().elements[key].data.description,
		          	style: snapshot.val().elements[key].data.style
	        	}
	      	}
	    } else {
	    	arr.push(snapshot.val().elements[key])
	    	continue
	    }
      	
      	newObj.data.description = snapshot.val().elements[key].data.description
      	if(snapshot.val().elements[key].data.articles === "[]" || snapshot.val().elements[key].data.articles === undefined){
      		newObj.data.articles = []
      	} else {
      		newObj.data.articles = snapshot.val().elements[key].data.articles
      	}
      	if(snapshot.val().elements[key].data.videos === '[]' || snapshot.val().elements[key].data.videos === undefined){
      		newObj.data.videos = []
      	} else {
      		newObj.data.videos = snapshot.val().elements[key].data.videos
      	}
      	if(snapshot.val().elements[key].data.questions === '[]' || snapshot.val().elements[key].data.questions === undefined ){
      		newObj.data.questions = []
      	} else {
      		newObj.data.questions = snapshot.val().elements[key].data.questions
      		for(var i = 0; i < newObj.data.questions.length; i++){
      			console.log(newObj.data.questions[i])
      			if(newObj.data.questions[i].answers === '[]' || newObj.data.questions[i].answers === undefined){
      				newObj.data.questions[i].answers = []
      			}
      		}
      	}
      	if(snapshot.val().elements[key].data.quizzes === '[]' || snapshot.val().elements[key].data.quizzes === undefined ){
      		newObj.data.quizzes = []
      	} else {
      		newObj.data.quizzes = snapshot.val().elements[key].data.quizzes
      	}
      	arr.push(newObj)
      }

      callback(arr)
    });
  };
}

export function openEdit(){
	return { type: ADMIN_OPEN_EDIT, payload: { edit: true }}
}

export function addConnection(connection){
	nodesRef.push(connection)
}

export function registerEdge({selectedEdges}){
	return { type: ADMIN_CREATE_EDGES, payload: { edgesChanged: true, selectedEdges: selectedEdges}}
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

export function selectNode({moduleDescription, currentQuestions, currentNode, previousNode, openUserView, currentArticles, currentVideos}){
	return { type: SELECT_NODE, payload :  {currentQuestions: currentQuestions, moduleDescription: moduleDescription, currentArticles: currentArticles, currentVideos: currentVideos, currentNode: currentNode, previousNode: previousNode, openUserView : openUserView} }
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

