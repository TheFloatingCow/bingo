import React, { Component } from 'react';

import HomeItem from '../../components/HomeItems/HomeItem/HomeItem';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import HomeItems from '../../components/HomeItems/HomeItems';

class Home extends Component {
    state = {
        date: {
            value: '',
            elementConfig: {
                type: 'text',
                placeholder: 'Today\'s date is'
            }
        },
        template: {
            location: {
                value: 'Creekside',
                elementConfig: {
                    placeholder: 'Favourite Location',
                    type: 'text'
                }
            },
            sport: {
                value: 'Running',
                elementConfig: {
                    placeholder: 'Favourite Sport',
                    type: 'text'
                }
            },
            rpe: {
                value: 7,
                elementConfig: {
                    placeholder: 'Average RPE',
                    type: 'text'
                }
            },
            duration: {
                value: 45,
                elementConfig: {
                    placeholder: 'Average Duration',
                    type: 'text'
                }
            },
            distance: {
                value: 7409,
                elementConfig: {
                    placeholder: 'Average Distance',
                    type: 'text'
                }
            },
            averageHR: {
                value: 146,
                elementConfig: {
                    placeholder: 'Average Heart Rate',
                    type: 'text'
                }
            },
            peakHR: {
                value: 189,
                elementConfig: {
                    placeholder: 'Average Peak Heart Rate',
                    type: 'text'
                }
            }
        },
        origin: {
            location: {
                value: '',
                elementConfig: {
                    placeholder: 'Favourite Location',
                    type: 'text'
                }
            },
            sport: {
                value: 'Running',
                elementConfig: {
                    placeholder: 'Favourite Sport',
                    type: 'text'
                }
            },
            rpe: {
                value: 7,
                elementConfig: {
                    placeholder: 'Average RPE',
                    type: 'text'
                }
            },
            duration: {
                value: 45,
                elementConfig: {
                    placeholder: 'Average Duration',
                    type: 'text'
                }
            },
            distance: {
                value: 7409,
                elementConfig: {
                    placeholder: 'Average Distance',
                    type: 'text'
                }
            },
            averageHR: {
                value: 146,
                elementConfig: {
                    placeholder: 'Average Heart Rate',
                    type: 'text'
                }
            },
            peakHR: {
                value: 189,
                elementConfig: {
                    placeholder: 'Average Peak Heart Rate',
                    type: 'text'
                }
            }
        }
    }

    inputChangedHandler = () => {
        console.log('this does nothing lol')
    }

    render () {
        let today = new Date();
//        const dd = String(today.getDate()).padStart(2, '0');
//        const mm = String(today.getMonth() + 1).padStart(2, '0');
        today = new Date().toISOString().slice(0, 10);
        let date = (
            <Aux>
                <HomeItem
                    key={this.state.date.key}
                    elementType={this.state.date.elementConfig.type}
                    elementConfig={this.state.date.elementConfig}
                    value={today} />
            </Aux>
        )
        const homeElementsArray = [];
        for (let key in this.state.template) {
            homeElementsArray.push({
                id: key,
                item: this.state.template[key]
            });
        }
        let home = (
            <Aux>
                {homeElementsArray.map(homeElement => (
                    <HomeItem
                        key={homeElement.id}
                        elementType={homeElement.item.elementConfig.type}
                        elementConfig={homeElement.item.elementConfig}
                        value={homeElement.item.value}
                        clicked={this.inputChangedHandler} />
                ))}
            </Aux>
        );
        return (
            <Aux>
                <HomeItems>
                    {date}
                    {home}
                </HomeItems>
            </Aux>
        )
    }
}

export default Home;