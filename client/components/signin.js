import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
//import { authActions } from '../auth/actions';
import {signInWithGoogle} from '../auth/actions';
import {Link} from 'react-router';


function SignIn({signInWithGoogle}) {
  return (
    <div className="g-row sign-in">
      <div className="g-col">
        <img className='hat' src = {'./assets/imgs/astronaut.jpg'}/>
        <h1 className="sign-in__heading">Sign in</h1>
        <button className="sign-in__button" onClick={signInWithGoogle} type="button">Google</button>
        {/*<Link to='/realapp'> go to ReaApp </Link>*/}
      </div>
    </div>
  );
}

//SignIn.propTypes = {
  //signInWithGithub: PropTypes.func.isRequired,
  //signInWithGoogle: PropTypes.func.isRequired,
  //signInWithTwitter: PropTypes.func.isRequired
//};
const mapDispatchToProps = (dispatch) => {
  return {
    signInWithGoogle: () => dispatch(signInWithGoogle())
  }
}

export default connect(null, mapDispatchToProps)(SignIn);
