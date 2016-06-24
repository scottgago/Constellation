import React, {Component} from 'react';
import {connect} from 'react-redux';
import { POST_SIGN_IN_PATH, POST_SIGN_OUT_PATH } from '../auth/config';
//import actions

// const Root = ({children, onEnter})=> {
//   return (
//     <div>
//     <div> hi </div>
//     <div> {children}  </div>
//     </div>
//   )
// }
//
// export default Root;


export class App extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }
  componentWillReceiveProps(nextProps) {
    const { router } = this.context;
    const { auth } = this.props;

    if (auth.authenticated && !nextProps.auth.authenticated) {
      router.replace(POST_SIGN_OUT_PATH);
    }
    else if (!auth.authenticated && nextProps.auth.authenticated) {
      router.replace(POST_SIGN_IN_PATH);
    }
  }
  render() {
    const {auth, children} = this.props;
    return (
      <div>
        <main className="main">{children}</main>
      </div>
    );
  }
}
export default connect(state=>({
  auth:state.auth
}))(App);
