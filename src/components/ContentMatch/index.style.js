import styled from 'styled-components';

export const MatchContainer = styled('div')`
  .container {
    margin: auto;
    margin-top: 6em;
    margin-bottom: 6em;
    width: 100%;
    font-weight: 500;
    //background-color: coral;
  }

  .show-matches-each-day {
    width: 100%;
    font-size: 16px;
    margin: auto;
    margin-top: 1em;
    //background-color: hsl(0, 100%, 50%);
    .title-each-day {
      color: #fff;
      margin: auto;
      padding: 1em 0em;
      max-width: 1000px;
      height: auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      //background-color: coral;
    }
    .content-matches-each-day {
      margin: auto;
      width: 100%;
      max-width: 1000px;
      height: auto;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      justify-items: center; 
      align-items: center;
      //background-color: #0000ff;
    }
    @media (min-width: 1000px) {
      .content-matches-each-day {
        grid-template-columns: repeat(2, 1fr);
        //background-color: #0000ff;
      }
    }
  }

  .content-match {
    margin: auto;
    position: relative;
    min-width: 500px;
    margin: 1em 1em;
  }

  @media (max-width: 600px) {
    .container {
      margin-top: 4em;
      margin-bottom: 4em;
    }
    .show-matches-each-day {
      margin-top: 0.5em;
      .title-each-day {
        padding: 0.5em 0;
        grid-template-columns: repeat(1, 1fr);
        text-align: center;
      }
      .content-matches-each-day {
        grid-template-columns: repeat(1, 1fr);
      }
    }
    .content-match {
      min-width: unset;
      margin: 0.5em 0;
      
    }
  }
`;