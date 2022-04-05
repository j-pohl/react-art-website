import styled from "styled-components";

export const GalleryContainer = styled.div`
  margin: 0;
  display: inline flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
  background-color: #282c34;
  font-size: calc(10px + 2vmin);
  color: rgb(216, 200, 165);
  min-height: 100vh;
`;

export const ImageContainer = styled.img`
  diplay: inline flex;
  padding: 30px;
  max-width: 300px;
`;
