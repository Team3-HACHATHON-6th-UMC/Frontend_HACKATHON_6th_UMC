import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NewPlant from "../components/NewPlant";
import axios from "axios"; 
import PlantModal from "../components/PlantModal";

const Body = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

const Title = styled.div`
  width: 150px;
  margin-top: 20px;
  font-size: 20px;
  font-weight: 600;
`;

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
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState(null);

  useEffect(() => {
    // API 요청 함수
    const fetchPlants = async () => {
      try {
        
        const response = await axios.get('http://3.38.247.228:8080/plants'); 
        //console.log('Responseeee:', response); // 디버깅 정보 추가
        
        if (response.data.isSuccess) { // 성공 여부 확인
          setPlants(response.data.result.plants); // API 응답 형식에 맞게 데이터 설정
          
          console.log("Success:", response.data.result);
        } else {
          console.error('Failed: ', response.data.message);
        }
      } catch (error) {
        console.error('Failed to fetch plants:', error);
      }
    };

    fetchPlants();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePlantClick = (plant) => {
    setSelectedPlant(plant); // 선택된 식물 설정
    setShowModal(true); // 모달 표시
  };

  const handleCloseModal = () => {
    setShowModal(false); // 모달 숨김
  };

  return (
    <>
      {!showModal ? (
        <Body>
          <Title>식물 추가하기</Title>
          <Input
            type="text"
            placeholder="식물을 검색해 보세요."
            value={searchTerm}
            onChange={handleSearch}
          />
          <Container>
            {filteredPlants.map((plant) => (
              <NewPlant
                key={plant.id} // API에서의 고유 식별자 사용
                name={plant.name}
                imageUrl={plant.imageUrl} // API의 이미지 URL 속성명에 맞게 수정
                onClick={() => handlePlantClick(plant)}
              />
            ))}
          </Container>
        </Body>
      ) : (
        selectedPlant && (
          <PlantModal onClick={handleCloseModal} selectedPlant={selectedPlant} />
        )
      )}
    </>
  );
};

export default AddPlant;
