import './App.css';
import ChatBot from 'react-simple-chatbot';
import React from 'react';
import { ThemeProvider } from 'styled-components';


const theme = {
  background: ' #EDECED',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#84012F',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#84012F',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

function App() {

  const steps = [
    {
      id: '1',
      message: 'Oi, qual o seu nome?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: '{previousValue}, seja muito bem vindo! Por favor selecione uma opção a baixo!',
      trigger: '4',
    },
    {
      id: '4',
      options: [
        { value:'Proximos', label: 'Próximos jogos', trigger:'Proximos'},
        { value:'Tabela', label: 'Tabela', trigger:'Tabela'},
        { value:'Onde', label: 'Onde Assistir', trigger:'Onde'},
      ],
    },
    {
      id:'Proximos',
      message: 'https://ge.globo.com/agenda/#/todos',
      trigger: '5',
    },
    {
      id:'Tabela',
      message: 'https://ge.globo.com/futebol/copa-do-mundo/2022/',
      trigger: '5',
    },
    {
      id:'Onde',
      message: 'https://www.youtube.com/c/cazetv',
      trigger: '5',
    },
    {
      id: '5',
      message: 'Espero ter ajudado, estou a disposição!',
      end: true,
    },
  ]

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <ChatBot steps={steps} />
      </ThemeProvider>
    </div>
  );
}

export default App;
