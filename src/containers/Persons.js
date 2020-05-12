import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import { connect } from 'react-redux';

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.personAddedHandler} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.personDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons: state.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        personAddedHandler: () => {
            const newPerson = {
                id: Math.random(),
                name: 'Max',
                age: Math.floor( Math.random() * 40 )
            }
            dispatch({ type: 'ADD_PERSON', value: newPerson})
        },
        personDeletedHandler: (personId) => {
            dispatch({ type: 'DELETE_PERSON', value: personId})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);