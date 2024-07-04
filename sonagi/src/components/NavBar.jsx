import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faPlus } from '@fortawesome/free-solid-svg-icons';

const NavContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 15px;
    height: 45px;
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
        <Button onClick={() => navigate('/')}>식집사</Button>
        <LeftColumn>
            <Button onClick={() => navigate('/cal')}>
                <FontAwesomeIcon icon={faCalendarDays} />
            </Button>
            <Button onClick={() => navigate('/add')}>
                <FontAwesomeIcon icon={faPlus} />
            </Button>
        </LeftColumn>
    </NavContainer>
  );
};

export default NavBar;
