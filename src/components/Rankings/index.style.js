import styled from 'styled-components';

export const RankingContainer = styled('div')`
  .table-center {
    width: 60%;
    margin: auto;
    min-width: 950px;
  }
  .table {
    text-align: center;
  }
  .groups {
    background-color: #eeeee4;
    font-style: initial;
    padding-top: 50px;
  }
  #group-team {
    background-color: #c6cccd99;
  }
  .icon {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin: 0px 10px 0px 10px;
  }
  .line {
    width: 100%;
    height: 0px;
    border: 0.5px solid rgba(224, 27, 27, 0.778);
    margin: 15px;
    display: inline-block;
  }
  th.pointer {
    cursor: pointer;
    text-align: left;
    width: 25%;
  }
  li {
    list-style-type: none;
  }
  .icon {
    border-radius: 15%;
  }
`;
