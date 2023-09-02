import PropTypes from 'prop-types';
import { Container, ContainerTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Container>
      <ContainerTitle>{title}</ContainerTitle>
      {children}
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
