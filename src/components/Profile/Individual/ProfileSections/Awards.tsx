import React, { useState } from 'react';
import styled from 'styled-components';
import { Badge } from 'react-bootstrap';
import { colors } from '../../../../theme/styleVars';
import { hasNonEmptyValues } from '../../../../utils/hasNonEmptyValues';
import { Container } from 'styled-bootstrap-grid';

const Awards = (awards: any) => {
  const awardArray = awards.awards;
  const empty = !hasNonEmptyValues(awardArray);

  return (
    <Container>
      {empty ? (
        <i>Add Awards Recognition</i>
      ) : (
        awardArray.map((award: any) => (
          <AwardContainer>
            <Bold>{award.title}</Bold>
            <Bold>{award.year}</Bold>
          </AwardContainer>
        ))
      )}
    </Container>
  );
};

const AwardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;

const Bold = styled.p`
  font-weight: bolder;
`;

export default Awards;
