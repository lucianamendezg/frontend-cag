import React from 'react';
import styled from 'styled-components';
import { colors } from '../../theme/styleVars';

const QandA = (props: any) => {
  const { id, question, answer } = props;

  return (
    <div className="" key={props.id}>
      <Section>
        <Question>{props.question}</Question>
        <p>{props.answer}</p>
      </Section>
    </div>
  );
};

const Section = styled.div`
  margin-top: 4rem;
`;

const Question = styled.div`
  font-weight: 700;
  font-color: ${colors.dark};
  text-transform: uppercase;
`;

export default QandA;
