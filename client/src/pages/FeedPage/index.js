import React from 'react';
import Header from "../../components/Header";
import NavShell from "../../components/NavShell";
import ResultsCard from "../../components/ResultsCard";
import ViewResults from "../../components/ViewResults";
import API from '../../util/API';


class FeedPage extends React.Component {
    // state={
    //     : []
    // }

    componentDidMount () {
        console.log("Reached Feedpage Mount");       
    }

    render () {
        return (
            <div>
                <Header>
                </Header>
                <NavShell>
                    <ViewResults>
                        <ResultsCard></ResultsCard>
                    </ViewResults>
                </NavShell>
            </div>
        );
    }
};
export default FeedPage
