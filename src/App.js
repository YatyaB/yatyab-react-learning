import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
  state = {
    characters: []
  };

  // Метод для удаления персонажа из списка
  removeCharacter = (index) => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((character, i) => i !== index),
    });
  };

  // Метод для обработки отправки формы и добавления персонажа в список
  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    return (
      <div className="App">
        {/* Компонент таблицы, отображающий список персонажей */}
        <Table data={this.state.characters} removeCharacter={this.removeCharacter} />
        {/* Компонент формы для добавления нового персонажа */}
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
