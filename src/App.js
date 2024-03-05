import React, { Component } from 'react';

import classes from './App.module.css'; // import css classes

import Modal from './components/Modal/Modal';
import ButtonMenu from './components/UI/ButtonMenu/ButtonMenu';
import Board from './containers/Board/Board';
import Title from './components/UI/Title/Title';

class App extends Component {

    state = {
        editModalOpen: false,
        newModalOpen: false
    }

    editHandler = () => {
        this.setState({ editModalOpen: true })
        console.log("Open edit modal")
    }

    editCancelHandler = () => {
        this.setState({ editModalOpen: false })
        console.log("Close edit modal")
    }

    newHandler = () => {
        this.setState({ newModalOpen: true})
        console.log("Open new modal")
    }

    newCancelHandler = () => {
        this.setState({ newModalOpen: false })
        console.log("Close new modal")
    }

    render() {
        return (
            <main className={classes.App}>
                <Modal
                    show={this.state.editModalOpen}
                    closeMenu={this.editCancelHandler}
                    clicked={this.editCancelHandler}>Just modal things</Modal>
                <Modal
                    show={this.state.newModalOpen}
                    closeMenu={this.newCancelHandler}
                    clicked={this.newCancelHandler}>Are ya sure</Modal>
                <Title>monthly bingo</Title>
                <ButtonMenu openEditMenu={this.editHandler} openNewMenu={this.newHandler}/>
                <Board />
            </main>
        );
    }
}

export default App;
