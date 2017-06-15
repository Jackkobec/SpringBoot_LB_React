import * as React from "react";
import { get } from '../config/backend';
import { UserTable } from "./UserTable";


type User = {
    id: number;
    name: string;
}

type UsersState = {
    users?: Array<User>;
    // users?: Array<any>; или без типизации
}

export class Users extends React.Component<any, UsersState> {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentWillMount() {
        get('/api/users')
            .then((users: Array<any>) => {
                this.setState({users})
            })
            .catch(e => console.log(e));
    }

    render() {
        const { users } = this.state;//так пишут если нужно много раз юзать и ретурн ниже

        // return (
        //     <UserTable users={ users }/>
        // );

        return (
            <UserTable users={ this.state.users }/>
        );
    }
}
