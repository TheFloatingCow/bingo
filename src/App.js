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
        backgroundColour: {
            h: 207,
            s: 100,
            l: 71
        },
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
    editThemeHandler = (newTheme) => {
        this.setState({ theme: newTheme }, () => {
            this.toggleBackgroundLightnessLevel();
        });
    }

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
        return {
            h: Math.round(360 * Math.random()),
            s: Math.round(30 + 65 * Math.random()),
            l: Math.round((this.state.theme === "dark" ? 10 : 80) + 10 * Math.random())
        }
        
        /*
        "hsl(" +
                Math.round(360 * Math.random()) + "," +
                Math.round(30 + 65 * Math.random()) + "%," + 
                Math.round((this.state.theme === "dark" ? 10 : 80) + 10 * Math.random()) + "%)";
        */
    }

    toggleBackgroundLightnessLevel = () => {
        console.log("HERE");

        const newLightnessValue = this.state.theme === "dark"
            ? this.state.backgroundColour.l - 70
            : this.state.backgroundColour.l + 70;

        this.setState(prevState => ({
            backgroundColour: {
                ...prevState.backgroundColour,
                l: newLightnessValue
            }
        }));
    }

    componentDidMount() {
        this.setState({backgroundColour: this.getRandomColour()});
    }

    render() {
        return (
            <main className={`${classes.Light}
                              ${this.state.theme === "dark" ? classes.Dark : classes.Light}`}
                              style={{backgroundColor:
                                "hsl(" +
                                this.state.backgroundColour.h + "," +
                                this.state.backgroundColour.s + "%," + 
                                this.state.backgroundColour.l + "%)"}}>
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
                    <EditModal state={this.state} closeMenu={this.editCancelHandler} editTypes={this.editTypeHandler} editTheme={this.editThemeHandler} />
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
                    button2Text="EDIT"
                    theme={this.state.theme} />
                <Board
                    state={this.state}
                    updateBoard={this.state.editUpdateBoard}
                    cancelUpdateBoard={this.newBoardCancelHandler}
                    openErrorModal={this.errorModalHandler} />
            </main>
        );
    }
}

export default App;
