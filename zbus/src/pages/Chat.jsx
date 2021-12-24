import ChatBot from 'react-simple-chatbot';

export const Chat = () => {
 

  return (
    <ChatBot
  steps={[
    {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you!',
      trigger: '4',
    },
    {
        id: '4',
        message: 'how can i help you?',
        trigger: '5',
      },
      {
        id: '5',
        user: true,
        trigger: '6',
      },
      {
        id: '6',
        message: 'you can connect with us via 190900',
        end: true,
      },
  ]}
/>)
}