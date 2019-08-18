import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import Table from "antd/lib/table";
import {Stadt} from "./model/Stadt";

interface AppState {
    staedte: Stadt[];
}

const defaultStaedte : Stadt[] = [
    {
        name: 'Hamburg',
        einwohnerzahl: 100,
    },
    {
        name: 'Hannover',
        einwohnerzahl: 50,
    },
    {
        name: 'Bremen',
        einwohnerzahl: 60,
    }
];


interface AppProps {}

class App extends React.Component<AppProps, AppState> {


    public constructor(props: AppProps) {
        super(props)
    }

    state : AppState = {
        staedte: defaultStaedte,
    };

    render() {
        const { staedte } = this.state;
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: 'Einwohnerzahl',
                dataIndex: 'einwohnerzahl',
                key: 'einwohnerzahl',
            }
        ];

        return (
            <div style={{ width: 400, margin: '100px auto' }}>
                <Table dataSource={staedte} columns={columns} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
