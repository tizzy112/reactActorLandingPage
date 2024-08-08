import React, { useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
  padding: 10px;
  margin: 30px 10px 20px 10px;
`;
const HeadStyle = styled.div`
  font-size: 20px;
  text-align: center;
  color: #333;
`;

const ActorCard = styled.div`
  border: 1px solid #333;
  padding: 10px;
  border-radius: 8px;
  color: #333;

  .imageCon img {
    width: 250px;
    height: 400px;
  }
`;
const ActorPage = () => {
  //setting our state using usestate
  const [actors, setActors] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchActors = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://freetestapi.com/api/v1/actors");
      const data = await response.json();
      console.log(data);
      setActors(data);
      setIsLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchActors();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <HeadStyle>
        <h2>Actors</h2>
      </HeadStyle>
      <Wrapper>
        {actors.map((actor) => {
          return (
            <ActorCard key={actor.id}>
              <div className="imageCon">
                <img src={actor.image} alt="" />
              </div>
              <h3>{actor.name}</h3>
              <p>{actor.biography}</p>
              <p>{actor.nationality}</p>
              <p>{actor.birth_year}</p>
            </ActorCard>
          );
        })}
      </Wrapper>
    </>
  );
};

export default ActorPage;
