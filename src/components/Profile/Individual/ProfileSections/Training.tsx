import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../../../theme/styleVars';
import { Container } from 'styled-bootstrap-grid';

const Training: React.FC<{
  institution: string;
  degree: string;
  year: string;
  editMode: boolean;
}> = ({ institution, degree, year, editMode }) => {
  return (
    <Container>
      {editMode ? (
        <i>Edit Mode</i>
      ) : institution === undefined ? (
        <i>Empty</i>
      ) : (
        <div>
          <DegreeInformation>
            <Bold>{institution}</Bold>
            <Bold>{year}</Bold>
          </DegreeInformation>
          <Degree>{degree}</Degree>
        </div>
      )}
    </Container>
  );
};

const DegreeInformation = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;

const Bold = styled.p`
  font-weight: bolder;
`;

const Degree = styled.p`
  font-size: 20px;
`;

export default Training;
