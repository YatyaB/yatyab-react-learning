import React from 'react';

// Компонент Table (Функциональный)
const Table = ({ data, removeCharacter }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
            <td>{row.age}</td>
            {/* Кнопка для удаления персонажа из списка */}
            <td>
              <button onClick={() => removeCharacter(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
