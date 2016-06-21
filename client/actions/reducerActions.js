import { TOGGLE_ADMIN, FETCH_NODES, ADMIN_CREATE_EDGES, ADMIN_OPEN_ADDARTICLE, ADMIN_CLOSE_ADDARTICLE, ADMIN_OPEN_ADDVIDEO, ADMIN_CLOSE_ADDVIDEO, ADMIN_CREATENODE, ADMIN_OPEN_VIEW, ADMIN_CLOSE_VIEW, ADMIN_OPENCREATE, ADMIN_CREATEDCOMPLETE, ADMIN_DELETENODE, ADMIN_ADDCONNECTIONS, USER_OPEN_MODULE, USER_CLOSE_MODULE,
		 ADMIN_ADDVIDEO, ADMIN_OPEN_EDIT, ADMIN_CLOSE_EDIT, ADMIN_ADDARTICLE, ADMIN_ADDDESCRIPTION, SELECT_NODE, REGISTER_CY, CLOSE_USER_VIEW } from './actionList'
import Firebase from 'firebase';

const Posts = new Firebase('https://node-test-1-2087b.firebaseio.com/nodesTest2');

export function createNode({cy, currentNode, id, description, styles, admins, width, height, type, connections}) {

		var nodesRef = Posts.child('elements')

		var nodeName = {id: id}.id

		console.log({connections}.connections, "lolololol")

		nodesRef.push({

			group: 'nodes',
        	data: { 
	          	id: nodeName,
	          	videos: [{
	            	name: "Introduction into Javascript",
	            	key: "jkTzHEtHd54",
	            	video: "jkTzHEtHd54",
	            	markdown: "# Non neu sive \n## Venite longos ambiguum tollere reliquit quia Phocaica\nLorem markdownum cacumina es corpus belloque forma haberet videri, pendere saepe, talem nomine invictus quiete *quae*: mors. Metuit quod, non de suo tui consolante orbem, qui per indulgere linquit fera; umbra. Enim sentit laqueosque hastam Bacchei. Ante census observata ipsum, e quamvis quod invitus firmas; sunt, ille venerem si: Iuppiter visa trahendo. \n Nimbos populo dicitur. Haustis tuas, sum resilire illa certa! **Quod Quodsi** labefecit venefica tecta hoc [me pendebat](http://seenly.com/) natura quae! Quoniam fetus movit sororum aliorum indueret et virtute laetis primo Phoebe, deorum haud, ire, esse. \n ## Sit saxa vates indoctum \n et auro ecce Discedens illa, [sanguine supersint](http://example.com/) confusaque duae, innixa? Huic habenti huic. Non leves umeris *sola dea oppositas* corpora restant Quae tangi exstabant in caeso cingens pervenit! Non parvo loquenti; ecce sic \n ## Venite longos ambiguum tollere reliquit quia \nPhocaica Lorem markdownum cacumina es corpus belloque forma haberet videri, pendere popularis fera videri. Discedentem stratum remitti iuvenes sociati secutae"
	          	},
	          	{
	            	name: "10 Things",
	            	video: "6MaOPdQPvow",
	            	key: "E6MaOPdQPvow",
	            	markdown:""
	          	}],
	          	articles: [],
	          	description: "JavaScript® (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well. It is a prototype-based, multi-paradigm scripting language that is dynamic, and supports object-oriented, imperative, and functional programming styles. JavaScript runs on the client side of the web, which can be used to design / program how the web pages behave on the occurrence of an event. JavaScript is an easy to learn and also powerful scripting language, widely used for controlling web page behaviour. Contrary to popular misconception, JavaScript is not 'Interpreted Java'. In a nutshell, JavaScript is a dynamic scripting language supporting prototype based object construction. The basic syntax is intentionally similar to both Java and C++ to reduce the number of new concepts required to learn the language. Language constructs, such as if statements, for and while loops, and switch and try ... catch blocks function the same as in these languages (or nearly so.) JavaScript can function as both a procedural and an object oriented language. Objects are created programmatically in JavaScript, by attaching methods and properties to otherwise empty objects at run time, as opposed to the syntactic class definitions common in compiled languages like C++ and Java. Once an object has been constructed it can be used as a blueprint (or prototype) for creating similar objects. JavaScript's dynamic capabilities include runtime object construction, variable parameter lists, function variables, dynamic script creation (via eval), object introspection (via for ... in), and source code recovery (JavaScript programs can decompile function bodies back into their source text). For a more in depth discussion of JavaScript programming follow the JavaScript resources links below."
        	}
      	})

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

	// var nodesRef = Posts.child('elements')
	// nodesRef.set({
	// 	"Nodes" : {
 //        group: 'nodes',
 //        data: { 
	//           id: 'JavaScript',
	//           videos: [{
	//             name: "Introduction into Javascript",
	//             key: "jkTzHEtHd54",
	//             video: "jkTzHEtHd54",
	//             markdown: "# Non neu sive \n## Venite longos ambiguum tollere reliquit quia Phocaica\nLorem markdownum cacumina es corpus belloque forma haberet videri, pendere saepe, talem nomine invictus quiete *quae*: mors. Metuit quod, non de suo tui consolante orbem, qui per indulgere linquit fera; umbra. Enim sentit laqueosque hastam Bacchei. Ante census observata ipsum, e quamvis quod invitus firmas; sunt, ille venerem si: Iuppiter visa trahendo. \n Nimbos populo dicitur. Haustis tuas, sum resilire illa certa! **Quod Quodsi** labefecit venefica tecta hoc [me pendebat](http://seenly.com/) natura quae! Quoniam fetus movit sororum aliorum indueret et virtute laetis primo Phoebe, deorum haud, ire, esse. \n ## Sit saxa vates indoctum \n et auro ecce Discedens illa, [sanguine supersint](http://example.com/) confusaque duae, innixa? Huic habenti huic. Non leves umeris *sola dea oppositas* corpora restant Quae tangi exstabant in caeso cingens pervenit! Non parvo loquenti; ecce sic \n ## Venite longos ambiguum tollere reliquit quia \nPhocaica Lorem markdownum cacumina es corpus belloque forma haberet videri, pendere popularis fera videri. Discedentem stratum remitti iuvenes sociati secutae"
	//           },
	//           {
	//             name: "10 Things",
	//             video: "6MaOPdQPvow",
	//             key: "E6MaOPdQPvow",
	//             markdown:""
	//           }],
	//           articles: [],
	//           description: "JavaScript® (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well. It is a prototype-based, multi-paradigm scripting language that is dynamic, and supports object-oriented, imperative, and functional programming styles. JavaScript runs on the client side of the web, which can be used to design / program how the web pages behave on the occurrence of an event. JavaScript is an easy to learn and also powerful scripting language, widely used for controlling web page behaviour. Contrary to popular misconception, JavaScript is not 'Interpreted Java'. In a nutshell, JavaScript is a dynamic scripting language supporting prototype based object construction. The basic syntax is intentionally similar to both Java and C++ to reduce the number of new concepts required to learn the language. Language constructs, such as if statements, for and while loops, and switch and try ... catch blocks function the same as in these languages (or nearly so.) JavaScript can function as both a procedural and an object oriented language. Objects are created programmatically in JavaScript, by attaching methods and properties to otherwise empty objects at run time, as opposed to the syntactic class definitions common in compiled languages like C++ and Java. Once an object has been constructed it can be used as a blueprint (or prototype) for creating similar objects. JavaScript's dynamic capabilities include runtime object construction, variable parameter lists, function variables, dynamic script creation (via eval), object introspection (via for ... in), and source code recovery (JavaScript programs can decompile function bodies back into their source text). For a more in depth discussion of JavaScript programming follow the JavaScript resources links below."
 //        }
 //      	}
	// })


  return dispatch => {
    Posts.on('value', snapshot => {
      dispatch({
        type: FETCH_NODES,
        payload: {nodes: snapshot.val()}
      });
      var arr = []
      for(var key in snapshot.val().elements){
      	arr.push(snapshot.val().elements[key])
      }

      console.log(arr)

      callback(arr)
    });
  };
}

export function openEdit(){
	return { type: ADMIN_OPEN_EDIT, payload: { edit: true }}
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

export function selectNode({moduleDescription, currentNode, previousNode, openUserView, currentArticles, currentVideos}){
	console.log("in selectnode", {currentNode})
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

