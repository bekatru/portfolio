import {FC} from 'react';
import {Email, LinkedIn, Telegram} from '@mui/icons-material';
import {ThemeProvider} from '@mui/material';
import {createTheme} from '@mui/material/styles';
import {Form} from '../../components';

import './Contacts.css';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const CONTACT_LIST = [
  {
    Icon: Email,
    link: 'mailto:hithisisbeka@gmail.com'
  },
  {
    Icon: LinkedIn,
    link: 'https://www.linkedin.com/in/bekzat-amatakhunov/'
  },
  {
    Icon: Telegram,
    link: 'https://t.me/tuemorrow'
  },
]

const Contacts: FC = () => {

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={'contacts-content'}>
        <div className={'contacts-link-icons'}>
          {CONTACT_LIST.map(({Icon, link}) =>
            <Icon key={link} fontSize={'large'} color={'action'} onClick={() => window.open(link)}/>
          )}
        </div>
        <Form/>
      </div>
    </ThemeProvider>
  );
};

export default Contacts;
