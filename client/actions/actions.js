import Firebase from 'firebase';

import { 
	ADMIN_CREATENODE, ADMIN_DELETENODE, FETCH_NODES } from './actionList'

const Posts = new Firebase('https://node-test-1-2087b.firebaseio.com/constellationsV1');

export function createNode({ id, name, video, links }) {
	console.log("in createNode")
	return { type: ADMIN_CREATENODE, payload: { id, name, video, links }};
}

export function fetchNodes() {
  console.log("inside fetchNodes");
  return dispatch => {
    Posts.on('value', snapshot => {
      console.log("inside posts dispatch");
      dispatch({
        type: FETCH_NODES,
        payload: snapshot.val()
      });
    });
  };
  //return {type: 'test', payload: null};
}

console.log("sup")
