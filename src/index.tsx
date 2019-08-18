import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import Table from "antd/lib/table";
import {Stadt} from "./model/Stadt";
import {StadtManager} from "./StadtManager";

interface AppState {
    staedte: Stadt[];
    selectedStadt: Stadt;
}

const defaultStaedte : Stadt[] = [
    {
        name: 'Hamburg',
        einwohnerzahl: 100,
        gebaeude: [],
    },
    {
        name: 'Hannover',
        einwohnerzahl: 50,
        gebaeude: [],
    },
    {
        name: 'Bremen',
        einwohnerzahl: 60,
        gebaeude: [],
    }
];

interface AppProps {}

class App extends React.Component<AppProps, AppState> {


    public constructor(props: AppProps) {
        super(props)
    }

    state : AppState = {
        staedte: defaultStaedte,
        selectedStadt: defaultStaedte[0],
    };

    private stadtSelected(name: String) {
        let selected = this.state.staedte.find(stadt => stadt.name === name);
        if(selected == null) {
            return;
        }
        this.setState({
            staedte: this.state.staedte,
            selectedStadt: selected,
        });
    }

    render() {
        const { staedte } = this.state;
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                render: (name: String) => (
                    <button onClick={() => this.stadtSelected(name)} >
                        {name}
                    </button>
                )
            },
            {
                title: 'Einwohnerzahl',
                dataIndex: 'einwohnerzahl',
                key: 'einwohnerzahl',
            }
        ];

        return (
            <div>
                <div style={{ width: 400, margin: '100px auto' }}>
                    <Table dataSource={staedte} columns={columns} />
                </div>
                <div style={{ width: 400, margin: '100px auto' }}>
                    <StadtManager stadt={this.state.selectedStadt} />
                </div>
            </div>
        );
    }


}

ReactDOM.render(<App />, document.getElementById('root'));
