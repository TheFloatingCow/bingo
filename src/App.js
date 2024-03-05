import React, { Component } from 'react';

import classes from './App.module.css'; // import css classes

import Modal from './components/Modal/Modal';
import ButtonMenu from './components/UI/ButtonMenu/ButtonMenu';
import Board from './containers/Board/Board';
import Title from './components/UI/Title/Title';

class App extends Component {

    state = {
        editModalOpen: false
    }

    editHandler = () => {
        this.setState({ editModalOpen: true })
        console.log("Open modal")
    }

    editCancelHandler = () => {
        this.setState({ editModalOpen: false })
        console.log("Close modal")
    }

    render() {
        return (
            <main className={classes.App}>
                <Modal
                    show={this.state.editModalOpen}
                    closeMenu={this.editCancelHandler}
                    clicked={this.editCancelHandler}></Modal>
                <Title>monthly bingo</Title>
                <ButtonMenu openMenu={this.editHandler} closeMenu />
                <Board />
            </main>
        );
    }
}

export default App;
