import React, { useState } from 'react';
import styled from 'styled-components';
import { fonts, colors } from '../../../theme/styleVars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons';
import { hasNonEmptyValues } from '../../../utils/hasNonEmptyValues';

const DetailSection: React.FC<{
  title: string;
  section: string;
  children: React.ReactNode;
}> = ({ title, section, children }) => {
  const [editMode, setEditMode] = useState(false);

  const editFunction = () => {
    setEditMode(!editMode);
  };

  return (
    <DetailsSection>
      <TitleSection>
        <DetailSectionTitle>{title}</DetailSectionTitle>
        <a href="#!" onClick={() => editFunction()}>
          <FontAwesomeIcon
            icon={editMode ? faXmark : faPenToSquare}
            color={colors.darkGreen}
          />
        </a>
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
