import React from 'react';
import styled from 'styled-components';
import { fonts, colors } from '../../../theme/styleVars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const DetailSection: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children
}) => {
  return (
    <DetailsSection>
      {/*Title Section*/}
      <TitleSection>
        <DetailSectionTitle>{title}</DetailSectionTitle>
        <FontAwesomeIcon icon={faPenToSquare} />
      </TitleSection>
      <TitleUnderline />
      {children}
    </DetailsSection>
  );
};

const DetailsSection = styled.div`
  margin-top: 39px;
`;

const DetailSectionTitle = styled.h3`
  font-family: ${fonts.montserrat};
  color: ${colors.darkGreen};
  font-style: normal;
  font-weight: bolder;
  font-size: 24px;
  line-height: 10px;
`;

const TitleUnderline = styled.hr`
  background-color: ${colors.darkGreen};
  width: 100px;
  height: 5px;
  border-radius: 7px 7px 7px 7px;
  margin-left: 0px;
`;

const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.darkGreen};
`;

export default DetailSection;
