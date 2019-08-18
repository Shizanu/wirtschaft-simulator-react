import React from "react";
import {Stadt} from "./model/Stadt";

export interface StadtManagerProps {
    stadt : Stadt;
}

export interface StadtManagerState {

}

export class StadtManager extends React.Component<StadtManagerProps, StadtManagerState> {
    public constructor (props: StadtManagerProps) {
        super(props);
    }

    render() {
        return (
            <p>
                'Stadtmanager für Stadt: ' {this.props.stadt.name}
            </p>
        );
    }
}