import React from 'react';
import Image from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from '../../../../theme/styleVars';
import { Col, Row, Container } from 'react-bootstrap';
import { hasNonEmptyValues } from '../../../../utils/hasNonEmptyValues';

const Features = (features: any, type: string) => {
  const empty = !hasNonEmptyValues(features.features);
  return (
    <Container>
      {empty ? (
        <i>Add Features</i>
      ) : (
        <Row>
          {features.features.map((feature: any) => (
            <Col xs={12} md={6}>
              <FeatureContainer key={feature.id}>
                <ImageDisplay src={feature.imageUrl} />
                <Text>
                  <p>{feature.title}</p>
                  <p>{feature.year}</p>
                  <p>{feature.role}</p>
                </Text>
              </FeatureContainer>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

const FeatureContainer = styled.div`
  margin: 50px 0px 50px 0px;
`;

const ImageDisplay = styled.img`
  height: 225px;
  width: 150px;
  float: left;
`;

const Text = styled.div`
  margin-left: 10px;
`;

export default Features;
