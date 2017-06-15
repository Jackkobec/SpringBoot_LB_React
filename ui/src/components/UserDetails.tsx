import * as React from "react";
import {get} from '../config/backend';

export class UserDetails extends React.Component<any, any> {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentWillMount() {
        console.log(this.props)

        get(`/api/users/detail/${this.props.params.userId}`)
            .then((user: any) => {
                this.setState({ user })
            })
            .catch(e => console.log(e));
    }

    render() {
        return (
            <div>
                { this.state.user && <div>
                <span>
                    { this.state.user.id }
                </span>
                    <br/>
                    <span>
                    { this.state.user.name }
                </span>
                </div>
                }
            </div>
        );
    }
}