import React, { useState } from 'react';
import styled from 'styled-components';
import NewPlant from '../components/NewPlant';
import ex from './Ex';  // ex 데이터를 가져옵니다.


const Body = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

const Title = styled.div`
width: 200px;
margin-top: 20px;
  font-size: 20px;
  font-weight: 600;
`

const Input = styled.input`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 350px;
  height: 35px;
  border-radius: 20px;
  border: none;
  box-shadow: 0px 4px 8px 0px #3e7a3b4d;
  text-indent: 5%;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const AddPlant = () => {
  const [plants, setPlants] = useState(ex);
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  /*
  useEffect(() => {
    // API 요청 함수
    const fetchPlants = async () => {
      try {
        const response = await axios.get('https://api.example.com/plants'); // 실제 API URL로 변경
        setPlants(response.data);
      } catch (error) {
        console.error('Failed to fetch plants', error);
      }
    };

    fetchPlants();
  }, []);
  */

  return (
    <Body>
      <Title>식물 추가하기</Title>
      <Input type="text" placeholder="식물을 검색해 보세요." value={searchTerm} onChange={handleSearch}/>
      <Container>
        {filteredPlants.map((plant) => (
          <NewPlant key={plant.id} name={plant.name} image={plant.imageUrl} />
        ))}
      </Container>
    </Body>
  );
};

export default AddPlant;
