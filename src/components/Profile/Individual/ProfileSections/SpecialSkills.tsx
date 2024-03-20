import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../theme/styleVars';
import { Container } from 'styled-bootstrap-grid';

const SpecialSkills: React.FC<{
  checkboxes: string[];
  manual: string[];
  editMode: boolean;
}> = ({ checkboxes, manual, editMode }) => {
  const skills = checkboxes.concat(manual);
  return (
    <Flex>
      {editMode ? (
        <i>Edit Mode</i>
      ) : skills.length === 0 ? (
        <Container>
          <i>Add Skills</i>
        </Container>
      ) : (
        skills.map((skill: string) => (
          <SkillBadge key={`skills-primary-${skill}`}>{skill}</SkillBadge>
        ))
      )}
    </Flex>
  );
};

const SkillBadge = styled.div`
  color: ${colors.white};
  background-color: ${colors.orange};
  padding: 10px 15px 10px 15px;
  text-align: center;
  border-radius: 20px;
  margin-left: 10px;
`;

const Flex = styled.div`
  display: flex;
`;

export default SpecialSkills;
