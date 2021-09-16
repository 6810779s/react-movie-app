import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Spinner = () => {
  return (
    <LoadingContainer>
      <Loader type="Puff" color="#00BFFF" height={150} width={150} />
    </LoadingContainer>
  );
};

export default Spinner;
