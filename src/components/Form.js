import styled from 'styled-components';

const Card = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-style: solid;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #033d5b;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  background-color: #92d7f8
`;

const Button = styled.button`
  background: linear-gradient(to bottom, #90d3f4, #033d5b);
  border-color: #92d7f8;
  border-radius: 3px;
  padding: 1rem;
  color: #ffffff;
  font-weight: 700;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 0.8rem;
`;

const ProfileThumb = styled.img`
  border-radius: 50%;
  height: 68.5px;
  width: 68.5px;
`;

const Error = styled.div`
  background-color: red;
`;

const styleFontBlue = {
  color: "#033d5b"
};

const styleFontRed = {
  color: "#88001b"
};

const styleFontGold = {
  color: "#ffca18"
}

const styleImg = {
  width: "100%"
};

export { Form, Input, Button, Card, ProfileThumb, Error, styleFontBlue, styleFontRed, styleFontGold, styleImg };