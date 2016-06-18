import { ADMIN_CREATENODE, ADMIN_DELETENODE, ADMIN_OPENCREATE, ADMIN_CLOSECREATE } from '../actions/actionList';

const INITIAL_STATE = {
  newNodeName: '',
  width: 100,
  length: 100,
  starType: "./assets/imgs/star (1).png",
  error: false,
  selectedConnections: [],
  selectedEdges: [],
  markdownDescription: '',
  create: false,
}


export default function(state = INITIAL_STATE, action) {
	switch(action.type){
    case ADMIN_OPENCREATE:
      return {...state, create: true}
    case ADMIN_CLOSECREATE:
      return {...state, create: false}
		case ADMIN_CREATENODE:

			var newNode = action.payload.cy.add([{
          		group: 'nodes',
          		data: {
            		id : action.payload.id,
            		admins: ['scott'],
            		description: action.payload.markdownDescription,
            		videos: [],
            		articles: [],
            		styles: {
              			width: action.payload.width,
              			height: action.payload.height,
              			type: action.payload.type
            		}
          		},
        	}])['0']
				.style({
      				'backgroundImage' : action.payload.type,
        			'width'           : action.payload.width,
        			'height'          : action.payload.height
      			})

      		action.payload.connections.forEach((edge) => {
        		action.payload.cy.add({
          			group : 'edges',
          			data  : {
            			id     : edge+action.payload.id,
            			source : action.payload.id,
            			target : edge
          			}
        		})
      		})

      		return {...state, cy: cy, currentNode: newNode};

	default:
			return state;
	}
}

//Object.assign({}, state, { cy: action.payload.tasks })