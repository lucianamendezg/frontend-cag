import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../../../theme/styleVars';
import { Container } from 'styled-bootstrap-grid';

const Bio = (bio: any, editMode: boolean) => {
  return (
    <Container>
      {bio.bio === undefined ? (
        <i>Add a Bio</i>
      ) : editMode ? (
        <div>Edit Mode</div>
      ) : (
        <div>Bio</div>
      )}
    </Container>
  );
};

export default Bio;
