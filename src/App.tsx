import  { Component } from 'react';
import './App.css'
import ParamEditor from "./ParamEditor";


const data = {
    params: [
        {
            id: 1,
            name: 'Назначение',
            type: 'string',
        },
        {
            id: 2,
            name: 'Длина',
            type: 'string',
        },
    ],
    model: {
        paramValues: [
            {
                paramId: 1,
                value: 'повседневное',
            },
            {
                paramId: 2,
                value: 'макси',
            },
        ],
        colors: [
            {
                id: 1,
                name: 'Красный',
            },
            {
                id: 2,
                name: 'Синий',
            },
        ],
    },
};

class App extends Component<{},{}> {
    render() {
        return (
            <div className="App">
                <h1>Редактор параметров товара</h1>
                <ParamEditor data={data} />
                <button onClick={() => console.log(data.model)}>Получить Model</button>
            </div>
        );
    }
}

export default App;
