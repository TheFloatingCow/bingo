import React, { Component } from 'react';

import classes from './App.module.css'; // import css classes

import Modal from './components/Modal/Modal';
import ButtonMenu from './components/UI/ButtonMenu/ButtonMenu';
import Board from './containers/Board/Board';
import Title from './components/UI/Title/Title';
import EditModal from './containers/EditModal/EditModal';
import NewModal from './containers/NewModal/NewModal';

class App extends Component {

    state = {
        editModalOpen: false,
        newModalOpen: false,
        editUpdateBoard: true,
        types: {
            time: "year",
            general: true,
            academic: true,
            driving: true,
            sports: true,
            cooking: true,
            work: true
        }
    }

    editHandler = () => {
        this.setState({ editModalOpen: true })
    }

    editCancelHandler = () => {
        this.setState({ editModalOpen: false })
    }

    newHandler = () => {
        this.setState({ newModalOpen: true })
    }

    newCancelHandler = () => {
        this.setState({ newModalOpen: false })
    }

    newBoardHandler = () => {
        this.setState({ editUpdateBoard: true })
        this.newCancelHandler()
    }

    newBoardCancelHandler = () => {
        this.setState({ editUpdateBoard: false })
    }

    render() {
        return (
            <main className={classes.App}>
                <Modal
                    id="NewModal"
                    show={this.state.newModalOpen}
                    closeMenu={this.newCancelHandler}
                    clicked={this.newCancelHandler}>
                    <NewModal closeMenu={this.newCancelHandler} newBoard={this.newBoardHandler} />
                </Modal>
                <Modal
                    id="EditModal"
                    show={this.state.editModalOpen}
                    closeMenu={this.editCancelHandler}
                    clicked={this.editCancelHandler}>
                    <EditModal types={this.state.types} />
                </Modal>
                <Title>monthly bingo</Title>
                <ButtonMenu
                    menuType="Main"
                    button1Func={this.newHandler}
                    button2Func={this.editHandler}
                    button1Text="NEW"
                    button2Text="EDIT" />
                <Board
                    types={this.state.types}
                    updateBoard={this.state.editUpdateBoard}
                    cancelUpdateBoard={this.newBoardCancelHandler} />
            </main>
        );
    }
}

export default App;
