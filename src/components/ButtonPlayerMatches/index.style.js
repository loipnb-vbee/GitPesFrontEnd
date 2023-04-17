import styled from 'styled-components';

export const ButtonStyle = styled('div')`
  .button {
    width: 85%;
    display: flex;
    font-size: 16px;
    max-width: 500px;
    padding: 0.5em 2em;
    justify-content: space-between;
    align-items: center;
    border: 0.5em solid #fff;

  }

  .avatar {
    width: 2em;
    height: 2em;
    border-radius: 50%;
  }

  .information {
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .name {
    padding: 0.6em 0.4em;
  }

  @media (min-width: 1000px) {
    .button {
      margin: auto;
      justify-content: none;
      
    }
  }
`;