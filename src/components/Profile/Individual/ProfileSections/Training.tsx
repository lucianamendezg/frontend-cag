import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../../../theme/styleVars';
import { Container } from 'styled-bootstrap-grid';

const Training: React.FC<{
  trainingInstitutions: any;
  editMode: boolean;
}> = ({ trainingInstitutions, editMode }) => {
  const trainingIsEmpty = trainingInstitutions.length == 0 ? true : false;
  console.log(trainingInstitutions);
  console.log(editMode);
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
