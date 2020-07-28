import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';

export default props => {
  const [value, setValue] = useState('')
  const valueChangeHandler = event => {

    setValue(event.target.value)

      }

  return (
    <>
      <TextField
        onChange={valueChangeHandler}
        value={value}
      />
   
  <button
    onClick={() => props.onSearch(value)}
    >
      Поиск
      </button>
    
  </>
    )
  }