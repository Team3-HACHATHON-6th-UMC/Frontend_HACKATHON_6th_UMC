
import React, { useState } from "react";
import styled from "styled-components";
import NewPlant from "../components/NewPlant";
import ex from "./Ex"; // ex 데이터를 가져옵니다.
import PlantModal from "../components/PlantModal";
import glass from "../assets/images/glass.png";

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

  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState(null);

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
    <>
      {!showModal ? (
        <Body>
          <Title>식물 추가하기</Title>
          <img src={glass} alt="" />
          <Input
            type="text"
            placeholder="식물을 검색해 보세요."
            value={searchTerm}
            onChange={handleSearch}
          />
          <Container>
            {filteredPlants.map((plant) => (
              <NewPlant
                key={plant.id}
                name={plant.name}
                image={plant.imageUrl}
                onClick={() => handlePlantClick(plant)}
              />
            ))}
          </Container>
        </Body>
      ) : (
        selectedPlant && (
          <PlantModal onClick={handleCloseModal} plant={selectedPlant} />
        )
      )}
    </>

  );
};

export default AddPlant;
