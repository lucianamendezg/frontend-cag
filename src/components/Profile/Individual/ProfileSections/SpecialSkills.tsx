import React from 'react';
import styled from 'styled-components';
import { Badge } from 'react-bootstrap';
import { colors } from '../../../../theme/styleVars';

const SpecialSkills = (skills_checkboxes: any, skills_manual: any) => {
  const primary_skills = skills_checkboxes['skills_checkboxes'];
  const secondary_skills = skills_checkboxes['skills_manual'];
  const all_skills = primary_skills.concat(secondary_skills);
  return (
    <div>
      {all_skills.length > 0 &&
        all_skills.map((skill: string) => (
          <Badge pill bg="primary" key={`skills-primary-${skill}`} text="white">
            {skill}
          </Badge>
        ))}
    </div>
  );
};

export default SpecialSkills;
