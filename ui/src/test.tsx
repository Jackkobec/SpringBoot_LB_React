import * as React from "react";
import {Hello} from "./components/Hello";

export class Test extends React.Component<any, { text?: string }> {
    state: any = { text: 'Ooooo' };

    render() {
        return (
            <Hello
                lala={ this.state.text }
                />
        );
    }
}