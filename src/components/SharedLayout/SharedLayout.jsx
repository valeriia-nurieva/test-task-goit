import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Container from 'components/Container';
import Loader from 'Loader';
import { Header, StyledLink } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <StyledLink to="/" end>
              Home
            </StyledLink>
            <StyledLink to="/tweets">Tweets</StyledLink>
          </nav>
        </Container>
      </Header>
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
