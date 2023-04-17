import styled from 'styled-components';

export const MatchContainer = styled('div')`
  .container {
    margin: auto;
    margin-top: 5vh;
    margin-bottom: 5vh;
    width: 80vw;
    font-weight: 500;
  }

  .loop {
    width: 100%;
  }

  .loop1 {
    color: #fff;
    font-size: 1.2rem;
    padding-top: 1.2rem;
    padding-left: 1.5rem;
  }

  .loop2 {
    max-width: 30rem;
    height: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .home-info {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .loop21 {
    position: relative;
    width: 30rem;
  }

  .avatar {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
  }

  .loop21Item1 {
    text-decoration: none;
  }

  .loop21Item1Frame {
    position: relative;
    margin: auto;
    width: 29rem;
    height: 12rem;
    margin-top: 1rem;
    border: 1px solid #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .home {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    padding: 1rem 2rem;
    
  }

  .loop21Item1Frame:hover {
    background-color: #c6cccd99;
  }

  .frameChild {
    position: absolute;
    color: #fff;
    top: 1rem;
    left: 1.5rem;
  }

  .frameChild1 {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    margin-left: 1.5rem;
    margin-right: 2rem;
  }

  .frameChildItem1 {
    display: flex;
    margin-bottom: 0.5rem;
  }

  .frameChildItem11 {
    width: 2.25rem;
  }

  .frameChildItem12 {
    color: #fff;
    margin-left: 1rem;
  }

  .frameChildItem2 {
    margin-bottom: 0.5rem;
    color: #fff;
  }

  .frameChildItemKT {
    color: #fff;
    margin-right: -0.25rem;
  }

  /* link highlight */
  .loop21Item2 {
    position: absolute;
    right: 1.5rem;
    bottom: 1.375rem;
    width: 5rem;
    height: 2.875rem;
  }

  .loop21Item2Img {
    width: 5rem;
    height: 2.875rem;
  }
`;