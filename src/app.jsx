/* eslint-disable no-undefined */
import React, { Component } from 'react';
import '../styles/index.scss';
import AddNoteModal from './components/addNoteModal';
import AppBar from 'material-ui/AppBar';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { Table,TableBody,TableHeader,TableHeaderColumn,TableRow,TableRowColumn } from 'material-ui/Table';

export default class App extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            modalOpened: false,
            subjects: [
                'Math', 'Gestion de projet', 'Finance',
                'Gestion de contrats', 'Dev Web', 'Anglais'
            ],
            notes: [
                { subject: 'Math', note: 12},
                { subject: 'Anglais', note: 14},
                { subject: 'Finance', note: 11},
            ]
        }
    }

    addNote(subject, note)
    {
        const notes = this.state.notes.concat({ subject, note })
        this.setState({
            notes
        })
        console.log(this.state)
    }

    openModal()
    {
        this.setState({
            modalOpened: true
        })
    }

    closeModal()
    {
        this.setState({
            modalOpened: false
        })
    }

    getStyle()
    {
        return {
            marginRight: 20,
        }
    }

    render() {
        const notes = this.state.notes.map((note, key) =>
            <TableRow key={key}>
                <TableRowColumn >{note.subject}</TableRowColumn>
                <TableRowColumn >{note.note}</TableRowColumn>
            </TableRow>
        )
        console.log(this.state.notes)
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title="Mon app"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                    />
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHeaderColumn>Matière</TableHeaderColumn>
                                <TableHeaderColumn>Note</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {notes}
                        </TableBody>
                    </Table>
                    <FloatingActionButton style={this.getStyle()} onClick={(e) => this.openModal(e)}>
                        <ContentAdd />
                    </FloatingActionButton>
                    <AddNoteModal
                        opened={this.state.modalOpened}
                        onClick={(e) => this.openModal(e)}
                        onClose={() => this.closeModal()}
                        onAddNote={(s, n) => this.addNote(s, n)}
                    ></AddNoteModal>
                </div>
            </MuiThemeProvider>
        )
    }
}
