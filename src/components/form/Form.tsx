import {FC, FormEvent, useCallback} from 'react';
import './Form.css';
import {Button, TextField} from '@mui/material';
import {Send} from '@mui/icons-material';


const Form: FC = () => {

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    console.log(e);
  }, []);

  return (
      <form onSubmit={handleSubmit}>
        <TextField id="standard-basic" label="name" variant="standard" margin={'dense'}/>
        <TextField id="standard-basic" label="email" variant="standard" margin={'dense'}/>
        <TextField
          id="standard-textarea"
          label="message"
          multiline
          variant="standard"
          margin={'dense'}
          rows={8}
        />
        <Button variant="text" endIcon={<Send/>}>Send</Button>
      </form>
  );
};

export default Form;
