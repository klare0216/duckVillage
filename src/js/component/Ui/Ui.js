import React from 'react';

const InputUi = props => {
  return (
    <div className="bottom-line-input">
      <label>{ props.label }</label>
      <input type={ props.type } />
    </div>
  );
}

const ButtonUi = props => {
  return (
    <div>
      <button>{ props.value }</button>
    </div>
  );
}

export { InputUi, ButtonUi };
