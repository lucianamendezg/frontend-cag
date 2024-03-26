import React from 'react';
import Image from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from '../../../../theme/styleVars';
import { Col, Row, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

const Features: React.FC<{
  features: any;
  editMode: boolean;
  emptyPlaceholder: string;
}> = ({ features, editMode, emptyPlaceholder }) => {
  console.log(features);
  return (
    <Container>
      {editMode ? (
        <i>Edit Mode</i>
      ) : features.length === 0 ? (
        <i>{emptyPlaceholder}</i>
      ) : (
        <Row>
          {features.map((feature: any) => (
            <Col xs={12} md={4}>
              <FeatureContainer key={feature.id}>
                {feature.imageUrl !== undefined ? (
                  <ImageDisplay src={feature.imageUrl} />
                ) : (
                  <PlaceholderImage>
                    <FontAwesomeIcon
                      className="bod-icon"
                      icon={faCamera}
                      size="lg"
                    />
                  </PlaceholderImage>
                )}
                <Text>
                  <h5>{feature.title}</h5>
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
  margin: 25px 0px 25px 0px;
`;

const ImageDisplay = styled.img`
  height: 150px;
  width: 100px;
  float: left;
  background: ${colors.lightGrey};
  font-size: 68px;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0 0 8px 4px ${colors.black05a};
  margin-right: 10px;
`;

const PlaceholderImage = styled.div`
  height: 150px;
  width: 100px;
  float: left;
  background: ${colors.lightGrey};
  color: white;
  font-size: 32px;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  box-shadow: 0 0 8px 4px ${colors.black05a};
  text-align: center;
  justify-content: center;
  margin-right: 10px;
`;

const Text = styled.div`
  padding-left: 20px;
`;

export default Features;
