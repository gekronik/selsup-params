import  { Component } from 'react';

interface Param {
    id: number;
    name: string;
    type: 'string';
}

interface ParamValue {
    paramId: number;
    value: string;
}

interface Color {
    id: number;
    name: string;
}

interface Model {
    paramValues: ParamValue[];
    colors: Color[];
}

interface ParamEditorProps {
    data: {
        params: Param[];
        model: Model;
    };
}

interface ParamEditorState {
    editedParamValues: { [paramId: number]: string };
}

class ParamEditor extends Component<ParamEditorProps, ParamEditorState> {
    constructor(props: ParamEditorProps) {
        super(props);

        const editedParamValues: { [paramId: number]: string } = {};
        props.data.params.forEach((param) => {
            const paramValue = props.data.model.paramValues.find((pv) => pv.paramId === param.id);
            if (paramValue) {
                editedParamValues[param.id] = paramValue.value;
            } else {
                editedParamValues[param.id] = '';
            }
        });

        this.state = {
            editedParamValues,
        };
    }


    handleParamValueChange = (paramId: number, value: string) => {
        this.setState((prevState) => ({
            editedParamValues: {
                ...prevState.editedParamValues,
                [paramId]: value,
            },
        }));
    };


    getModel(): Model {
        const { editedParamValues } = this.state;
        const paramValues: ParamValue[] = Object.keys(editedParamValues).map((paramId) => ({
            paramId: parseInt(paramId, 10),
            value: editedParamValues[paramId],
        }));
        return { paramValues, colors: this.props.data.model.colors };
    }

    render() {
        const { params } = this.props.data;
        const { editedParamValues } = this.state;

        return (
            <div>
                {params.map((param) => (
                    <div key={param.id}>
                        <label>{param.name}:</label>
                        <input
                            type="text"
                            value={editedParamValues[param.id]}
                            onChange={(e) => this.handleParamValueChange(param.id, e.target.value)}
                        />
                    </div>
                ))}
            </div>
        );
    }
}
export default ParamEditor;