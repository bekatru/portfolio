import {FC, FormEvent, useCallback} from 'react';
import './Form.css';
import {Button, TextField, ThemeProvider} from '@mui/material';
import {Send} from '@mui/icons-material';
import {createTheme} from '@mui/material/styles';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const Form: FC = () => {

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    console.log(e);
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
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
    </ThemeProvider>
  );
};

export default Form;
