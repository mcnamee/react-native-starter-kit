import React from 'react';
import Loading from './UI/Loading';
import {Text, View} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

class Launch extends React.Component {

    componentWillMount() {
        this.props.isLoggedIn()
        .then(() => Actions.main())
        .catch(() => Actions.login());
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                <Loading/>
            </View>
        );
    }
    

}

const mapStateToProps = state => ({
    member: state.member || {},
});
  
const mapDispatchToProps = dispatch => ({
    isLoggedIn: dispatch.member.isLoggedIn,
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Launch);

