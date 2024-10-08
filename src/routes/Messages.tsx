import React from 'react';
import { useParams } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PageContainer from '../components/layout/PageContainer';
import { Title } from '../components/layout/Titles';
import MessagesContainer from '../components/Messages/MessagesContainer';
import { useFirebaseContext } from '../context/FirebaseContext';
import { MessageProvider } from '../context/MessageContext';

const Messages = () => {
  const { firebaseFirestore } = useFirebaseContext();
  const { threadId } = useParams();

  return (
    <MessageProvider firestore={firebaseFirestore} threadIdParam={threadId}>
      <PageContainer>
        <Row>
          <Col lg={12}>
            <Title>Messages</Title>
            <MessagesContainer />
          </Col>
        </Row>
      </PageContainer>
    </MessageProvider>
  );
};

export default Messages;
