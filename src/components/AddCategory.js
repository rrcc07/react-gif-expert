import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length>2){
            setCategories(cats => [inputValue, ...cats,]);
            setInputValue('');
        }
    }
    return (
    <form onSubmit={handleSubmit}>
      <input
        className='inputSearch'
        type="text"
        value={inputValue}
        placeholder='Search gift'
        onChange={handleInputChange}
      />
    </form>
  )
}

AddCategory.protoTypes = {
    setCategories : PropTypes.func.isRequired    
}
