import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits.jsx';
import Navbar from './components/navbar.jsx';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Runnig', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };
  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits: habits });
  };
  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });

    this.setState({ habits: habits });
  };
  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits.splice(habits[index], 1);
    this.setState({ habits: habits });
  };
  handleAdd = (name) => {
    const habits = [
      ...this.state.habits,
      { id: this.state.habits.length + 1, name: name, count: 0 },
    ];
    // const newHabit = { id: habits.length + 1, name: name, count: 0 };
    // habits.push(newHabit);
    this.setState({ habits: habits });
  };
  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count != 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });

    // const habits = [...this.state.habits];
    // habits.map((habit) => {
    //   habit.count = 0;
    // });

    this.setState({ habits: habits });
  };

  render() {
    return (
      <>
        <Navbar totalCount={this.state.habits.filter((item) => item.count > 0).length} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
