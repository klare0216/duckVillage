import React from 'react';

const InputUi = props => {
  return (
    <div className={ props.className + " bottom-line-input" }>
      <label>{ props.label }</label>
      <input 
        
        type={ props.type } 
        onChange={ event => props.onChange(event) }/>
    </div>
  );
}

const ButtonUi = props => {
  return (
    <div>
      <button onClick={ (props.onClick) ? (event => props.onClick(event)) : (()=> {}) }>
        { props.value }
      </button>
    </div>
  );
}

const Toolbar = props => {
	return (
		<div className='toolbar'>
			{props.children}
		</div>
	);
}

export { InputUi, ButtonUi, Toolbar };
