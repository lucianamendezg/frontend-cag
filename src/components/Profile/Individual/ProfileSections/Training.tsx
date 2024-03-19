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
  const trainingIsEmpty = institution.length == 0 ? true : false;
  return (
    <Container>
      {editMode ? (
        <i>Edit Mode</i>
      ) : trainingIsEmpty ? (
        <i>Add Training</i>
      ) : (
        <i>Training</i>
      )}
    </Container>
  );
};

export default Training;
