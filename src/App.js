import React, { Component } from 'react';

import classes from './App.module.css'; // import css classes

import Modal from './components/Modal/Modal';
import ButtonMenu from './components/UI/ButtonMenu/ButtonMenu';
import Board from './containers/Board/Board';
import Title from './components/UI/Title/Title';
import EditModal from './containers/EditModal/EditModal';
import NewModal from './containers/NewModal/NewModal';
import ErrorModal from './containers/ErrorModal/ErrorModal';

class App extends Component {

    /*
    Data types:
    Monthly, Yearly
    General, Academic, Driving, Sports, Cooking, Work, Gym, Gaming, Voice Lines
    */
   
    state = {
        theme: "light",
        backgroundColour: "#6abcff",
        editModalOpen: false,
        newModalOpen: false,
        errorModalOpen: false,
        editUpdateBoard: true,
        types: {
            time: "month",
            general: true,
            academic: true,
            driving: true,
            sports: true,
            cooking: true,
            work: true,
            gym: true,
            gaming: true,
            voiceline: true
        }
    }

    // Modals
    editHandler = () => {
        this.setState({ editModalOpen: true });
    }

    editCancelHandler = () => {
        this.setState({ editModalOpen: false });
    }

    newHandler = () => {
        this.setState({ newModalOpen: true });
    }

    newCancelHandler = () => {
        this.setState({ newModalOpen: false });
    }

    errorModalHandler = () => {
        this.setState({ errorModalOpen: true });
    }

    errorModalCancelHandler = () => {
        this.setState({ errorModalOpen: false });
    }

    // State
    editTypeHandler = (newTypes) => {
        this.setState({ types: newTypes });
    }

    // Board
    newBoardHandler = () => {
        this.setState({ editUpdateBoard: true });
        this.setState({backgroundColour: this.getRandomColour()});
        this.newCancelHandler()
    }

    newBoardCancelHandler = () => {
        this.setState({ editUpdateBoard: false });
    }

    getRandomColour = () => {
        return "hsl(" + 360 * Math.random() + "," +
                (30 + 65 * Math.random()) + "%," + 
                (80 + 10 * Math.random()) + "%)";
    }

    componentDidMount() {
        this.setState({backgroundColour: this.getRandomColour()});
    }

    render() {
        return (
            <main className={classes.App} style={{backgroundColor: this.state.backgroundColour}}>
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
                    <EditModal state={this.state} closeMenu={this.editCancelHandler} editTypes={this.editTypeHandler} />
                </Modal>
                <Modal
                    id="ErrorModal"
                    show={this.state.errorModalOpen}
                    closeMenu={this.errorModalCancelHandler}
                    clicked={this.errorModalCancelHandler}>
                    <ErrorModal closeMenu={this.errorModalCancelHandler} />
                </Modal>
                <Title>{this.state.types.time}ly bingo</Title>
                <ButtonMenu
                    menuType="Main"
                    button1Func={this.newHandler}
                    button2Func={this.editHandler}
                    button1Text="NEW"
                    button2Text="EDIT" />
                <Board
                    types={this.state.types}
                    updateBoard={this.state.editUpdateBoard}
                    cancelUpdateBoard={this.newBoardCancelHandler}
                    openErrorModal={this.errorModalHandler} />
            </main>
        );
    }
}

export default App;
