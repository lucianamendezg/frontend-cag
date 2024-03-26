import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../../../theme/styleVars';
import { Container } from 'styled-bootstrap-grid';

const Bio: React.FC<{
  bio: any;
  editMode: boolean;
}> = ({ bio, editMode }) => {
  return (
    <Container>
      {editMode ? (
        <i>Edit Mode</i>
      ) : bio === undefined ? (
        <i>Add a Bio</i>
      ) : (
        <div>{bio}</div>
      )}
    </Container>
  );
};

export default Bio;
