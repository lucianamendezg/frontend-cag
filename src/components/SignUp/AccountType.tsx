import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Image } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import Group from '../../images/icons-signup/group.svg';
import Individual from '../../images/icons-signup/individual.svg';
import { colors, fonts } from '../../theme/styleVars';
import { Tagline, Title } from '../layout';
import { CardHeading, StyledCard, CardText } from './SignUpStyles';
import type { AccountTypeOptions } from './types';

type Card = {
  icon: string;
  className: string;
  name: string;
  text: React.ReactNode;
  enabled: boolean;
};

const cards: Card[] = [
  {
    icon: Individual,
    className: 'green-shadow-hover',
    name: 'individual',
    text: (
      <>
        <CardHeading>Individual Artist</CardHeading>{' '}
        <p>Show off your skills and experience</p>
      </>
    ),
    enabled: true
  },
  {
    icon: Group,
    className: 'red-shadow-hover',
    name: 'company',
    text: (
      <>
        <CardHeading>Theatre Group</CardHeading>
        <p>Tell prospective cast and crew about your company</p>
      </>
    ),
    enabled: false
  }
];

type Props = {
  accountType: string | null;
  flag: string | (string | null)[] | null;
  setAccountType: (x: AccountTypeOptions | null) => void;
};

const AccountType: React.FC<Props> = ({
  accountType,
  flag,
  setAccountType
}) => {
  return (
    <Container className="margin-container">
      <Row>
        <Col lg={12}>
          <Title>BUILD CONNECTIONS TODAY</Title>
          <Tagline>Join the community today for new opportunities.</Tagline>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <SelectDirections>Select one to continue</SelectDirections>
        </Col>
      </Row>
      <Row>
        <Col lg={7}>
          <Row style={{ flexWrap: 'nowrap' }}>
            {cards.map(({ className, icon, text, name, enabled }: any) => (
              <StyledCard
                key={name}
                className={clsx(
                  className,
                  accountType === name && 'selected',
                  !enabled && flag !== name && 'disabled'
                )}
                lg="5"
                onClick={() =>
                  (enabled || flag === name) && setAccountType(name)
                }
              >
                <Image alt="" src={icon} />
                <CardText>{text}</CardText>
              </StyledCard>
            ))}
          </Row>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <LoginLink>
            Already a member? <Link to="/login">Log in here</Link>
          </LoginLink>
        </Col>
      </Row>
    </Container>
  );
};

const SelectDirections = styled.p`
  text-align: left;
  font-size: 14px/18px;
  letter-spacing: 0.14px;
  font: ${fonts.montserrat};
`;

const LoginLink = styled.p`
  text-align: left;
  font-size: 14px/18px;
  font-style: italic;
  letter-spacing: 0.14px;
  margin-top: 40px;
  margin-bottom: -40px;

  a {
    color: ${colors.salmon};
  }
`;

export default AccountType;
