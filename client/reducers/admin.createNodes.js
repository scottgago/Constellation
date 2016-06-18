import { ADMIN_CREATENODE, ADMIN_DELETENODE } from '../actions/actionList';

const INITIAL_STATE = {
	cy: {},
	currentNode :{}
}


export default function(state = INITIAL_STATE, action) {
	switch(action.type){
		case ADMIN_CREATENODE:

			var newNode = action.payload.cy.add([{
          		group: 'nodes',
          		data: {
            		id : action.payload.name,
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
            			id     : edge+action.payload.name,
            			source : newNodeName,
            			target : action.payload.name
          			}
        		})
      		})

      		return {...state, cy: cy, currentNode: newNode};

	default:
			return state;
	}
}

//Object.assign({}, state, { cy: action.payload.tasks })