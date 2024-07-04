import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Body = styled.div`
  padding-right: 40px;
  padding-left: 40px;
  background: #f2f6f3;
  height: 100%;
`;

const Title = styled.div`
  font-size: 20px;
  color: #1a1a1ab2;
  font-weight: 600;
  padding-top: 50px;
`;

const SubTitle = styled.div`
  font-size: 35px;
  color: #7db49d;
  font-weight: 700;
  margin-top: 5px;
`;

const Log = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-top: 150px;
`;

const Id = styled.div`
  font-size: 20px;
  margin-top: 60px;
`;

const Input = styled.input`
  width: 300px;
  border-width: 0 0 1px;
  margin-top: 10px;
  border-color: #b0b0b0;
  cursor: pointer;
  background-color: transparent;

  :focus {
    outline: none;
  }
`;

const Password = styled.div`
  font-size: 20px;
  margin-top: 20px;
`;

const Button = styled.button`
  font-size: 20px;
  color: white;
  background: linear-gradient(90deg, #d2cd64 0%, #6ead6b 100%);
  width: 300px;
  height: 45px;
  margin-top: 30px;
  border-width: 0px;
  border-radius: 20px;
  cursor: pointer;
`;

const Div = styled.div`
  font-size: 13px;
  font-weight: 500;
  margin-top: 20px;
  cursor: pointer;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = {
      userName: id,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://3.38.247.228:8080/users/sign_in",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/home");
    } catch (error) {
      console.error("Error:", error.message);
      if (error.response) {
        console.error("Server responded with:", error.response.data);
      }
    }
  };

  return (
    <Body>
      <Title>반려식물 라이프 스타일 서비스</Title>
      <SubTitle>Green Step</SubTitle>
      <Log>로그인하기</Log>
      <Id>ID</Id>
      <Input label="ID" type="text" value={id} onChange={handleIdChange} />
      <Password>Password</Password>
      <Input
        label="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button onClick={handleLogin}>Log in</Button>
      <Flex>
        <Div>Sign Up </Div>
        <Div>Find Email | Find Password</Div>
      </Flex>
    </Body>
  );
};

export default Login;
