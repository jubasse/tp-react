import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

export default class AddNoteModal extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            currentSubject: null,
            currentNote: null
        }
    }

    handleNoteFieldChange (e) {
        if (e.target.value) {
            const currentNote = Number(e.target.value)
            this.setState({
                currentNote
            })
        }
    }

    addNote()
    {
        const note = Number(this.state.currentNote)
        const subject = this.state.currentSubject ? String(this.state.currentSubject) : 'Math'
        this.props.onAddNote(subject, note)
        this.props.onClose()
        this.setState({
            currentSubject: null,
            currentNote: null
        })
    }

    render()
    {
        const actions = [
            <FlatButton key={1}
                label="Cancel"
                primary={true}
                onClick={(e) => this.props.onClose(e)}
            />,
            <FlatButton
                key={2}
                label="Add"
                primary={true}
                keyboardFocused={true}
                onClick={(e) => this.addNote(e)}
            />,
        ];
        return (
            <Dialog
                title="Dialog With Actions"
                actions={actions}
                modal={false}
                open={this.props.opened}
                onRequestClose={() => this.props.onClose()}
            >
                Ajouter une note : <br/>
                <TextField
                    defaultValue={0}
                    type="number"
                    onChange={(e) => this.handleNoteFieldChange(e)}
                />
            </Dialog>
        )
    }
}