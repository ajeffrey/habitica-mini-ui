import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  onSubmit(userId: string, userToken: string): any;
}

interface IState {
  userId: string;
  userToken: string;
}

export default function Login({ onSubmit }: IProps) {
  const [state, setState] = React.useState<IState>({ userId: '', userToken: '' });
  const setUserId = (userId: string) => setState({ ...state, userId });
  const setUserToken = (userToken: string) => setState({ ...state, userToken });
  const { userId, userToken } = state;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(userId, userToken);
  }

  return (
    <Glass>
      <Window onSubmit={handleSubmit}>
        <Logo data-v-08816424="" id="melior" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 61.91 64"><path data-v-08816424="" d="M61.82,64H51.59c-3.08,0-3.72.37-3.67-1,0.07-1.87.67-1.94,2.63-2.49,1.63-.45,1-3.35-0.8-5.88-1.28-1.76-3.89-3.81-7.31-2.22a10.75,10.75,0,0,0-4.56,3.52c-1.68,2.33-1.59,4.54,1,4.54s5.39-1.5,6.23.64c1,2.64.33,2.89-.18,2.89H28.55v0C19.77,64,11,63.93,9,58.38c-2.82-7.68,7.43-10.64,7.75-15.46,0.13-2-1-2.85-2.34-2.85h-6V36.41H4.7v-11H8.36V29.1H12v3.65h3.65v5.08a5.76,5.76,0,0,1,3.07,5.05c-0.17,5.51-9.5,8.57-7.79,14.35,1.56,5.29,13.37,4,13,.74L23.7,56.1c-0.06-2.62-.47-6.12.08-9.22C24.64,42,27.67,37.78,33,37.74c1,0,1.78-.21,1.78-1s-1.55-.84-2.64-0.95a23.35,23.35,0,0,1-12.56-5c-2.43-2-6.21-8.3-3.74-7.83a21.74,21.74,0,0,0,4.06.4c1.24,0,4.44-.35,4.44-1.11,0-1-1.85-.42-4.57-0.68C16.48,21.22,9.6,19.83,6,9.35,4.71,5.43,3.83-1.91,6,.46c12.46,13.7,16.69,11.47,23.84,16.16,3.15,2.06,5.19,7,7,6.58,1.2-.27.46-1.37,0.64-3.93C37.66,17,38.75,16.48,36,15.79c-3.26-.81-6.52-4.38-4.39-4.33a11.89,11.89,0,0,0,5.53-.76c1.87-.81,6.43-4.28,9.18-2.89s5.08-.6,6.94-0.25c2.71,0.51,3.41,4.24,3.05,6.42-0.22,1.38-.22,1.38-2,1.28-3.61-.21-4.53,2.67-2,4.25,3.87,2.42,5.51,4.23,6.56,9.58,0.51,2.6.1,3.2-.76,2.72s-2.34-.72-0.29,4-1.29,10.28-2.39,10.9a1.3,1.3,0,0,0-.91,1.34c0,11.42,0,12.27,1.92,12.48,2.9,0.31,4.14-1.44,5.27.06C63.29,62.73,63.41,64,61.82,64ZM4.7,21.28H1v3.65H4.7V21.28Z" transform="translate(-1.05)" fill="#fff"></path></Logo>
        <Textbox type="text" placeholder="User ID" value={userId} onChange={event => setUserId(event.target.value)} />
        <Textbox type="text" placeholder="API Token" value={userToken} onChange={event => setUserToken(event.target.value)} />
        <Button type="submit">Sally Forth!</Button>
      </Window>
    </Glass>
  );
}

const Glass = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.svg`
  align-self: center;
  width: 70.9px;
  height: 4rem;
  margin-bottom: 30px;
`;

const Window = styled.form`
  width: 100%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Textbox = styled.input`
  display: block;
  background: white;
  font-weight: 300;
  font-family: "Open Sans", sans-serif;
  border: none;
  font-size: 16px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25);
  line-height: 2em;
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 10px;
  border-radius: 3px;
  padding: 0 10px;
`;

const Button = styled.button`
  display: block;
  background: #24CC8F;
  color: white;
  font-weight: 400;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 1);
  font-family: "Open Sans", sans-serif;
  border: none;
  font-size: 16px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 1);
  line-height: 2em;
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 10px;
  border-radius: 3px;
  padding: 0 10px;
`;