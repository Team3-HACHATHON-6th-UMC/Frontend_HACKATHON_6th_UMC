import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faPlus } from "@fortawesome/free-solid-svg-icons";

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px;
  height: 45px;
`;

const Logo = styled.span`
  font-size: 40px;
  color: #7db49d;
  font-family: Inter;
  font-weight: 600;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
`;

const LeftColumn = styled.div`
  margin-left: auto;
`;

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <NavContainer>
      <Logo onClick={() => navigate("/")}>
        <span style={{ fontSize: "20px", color: "#428066" }}>&#9829;</span>{" "}
        green
      </Logo>
      <LeftColumn>
        <Button onClick={() => navigate("/cal")}>
          <FontAwesomeIcon icon={faCalendarDays} />
        </Button>
        <Button onClick={() => navigate("/add")}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </LeftColumn>
    </NavContainer>
  );
};

export default NavBar;
