import React from 'react';
import styled from 'styled-components';
import { Badge } from 'react-bootstrap';
import { colors } from '../../../../theme/styleVars';

const SpecialSkills = (skills_checkboxes: any, skills_manual: any) => {
  const primary_skills = skills_checkboxes['skills_checkboxes'];
  const secondary_skills = skills_checkboxes['skills_manual'];
  const all_skills = primary_skills.concat(secondary_skills);
  return (
    <Flex>
      {all_skills.length > 0 &&
        all_skills.map((skill: string) => (
          <SkillBadge key={`skills-primary-${skill}`}>{skill}</SkillBadge>
        ))}
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
