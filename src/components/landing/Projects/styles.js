import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);
  cursor: pointer;
    transition: all 0.3s linear;
  &:hover{
    box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.3);
    transform: scale(1.01);
  }

  h4 {
    margin-top:30px;
    text-align:center;
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
  }

  p {
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#c7c7c7')};
  }
`;

export const Content = styled.div`
  padding: 1rem 0;
  min-height: 200px;
  .stack{
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
  }
  .stack>span{
    font-size:0.8rem;
    padding:5px;
    margin:3px 3px;
    background-color:${({ theme }) => (theme === 'light' ? 'rgba(0,0,0,.05)' : '#B6A2F2')};
    border-radius:3px;
    color:${({ theme }) => (theme === 'light' ? '#444' : '#fff')}
  }
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    &:first-child {
      margin-right: 0.5rem;
    }

    img {
      margin: 0;
    }

    svg path {
      fill: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
    }

    span {
      color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
      margin-left: 0.5rem;
    }
  }
`;

export const Languages = styled.div`
  opacity: 0.5;
  font-size: 14px;
`;
