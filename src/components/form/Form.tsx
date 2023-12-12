import {FC, FormEvent, useCallback} from 'react';
import './Form.css';


const Form: FC = () => {

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    console.log(e)
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <input type={'text'}/>
      <input type={'email'}/>
      <textarea/>
      <button type={'submit'}>send</button>
    </form>
  )
};

export default Form;
