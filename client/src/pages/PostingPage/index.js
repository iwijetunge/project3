import React from 'react';
import Header from "../../components/Header/";
import NavShell from "../../components/NavShell/";
import PostForm from "../../components/PostForm/";
import API from '../../util/API';


export default class PostingPage extends React.Component {
   

 //   componentDidMount () {
 //   ();
 //  }

    render () {
        return (
            <View>
                <Header>
                </Header>
                <NavShell>
                    <PostForm></PostForm>
                </NavShell>
            </View>
        );
    }
};