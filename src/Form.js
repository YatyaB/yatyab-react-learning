import React, { Component } from 'react';

class Form extends Component {
  initialState = {
    name: '',
    job: '',
    age: '',
  };

  state = this.initialState;

  // Метод для обработки изменения значений в полях формы
  handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'age') {
      // Проверка, чтобы значение age было целым числом
      const intValue = value === '' ? '' : parseInt(value, 10);
      if (value === '' || (!isNaN(intValue) && Number.isInteger(intValue))) {
        this.setState({
          [name]: value === '' ? '' : intValue,
        });
      }
    } else {
      this.setState({
        [name]: value,
      });
    }
  };

  // Метод для обработки отправки формы
  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {
    const { name, job, age } = this.state;

    // Стиль для полей ввода
    const inputStyle = {
        color: '#080808', // белый цвет текста
    };

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange}
          style={inputStyle} // Применение стиля
        />
        <label htmlFor="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          id="age"
          value={age}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;
