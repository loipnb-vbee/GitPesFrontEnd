import styled from 'styled-components';

export const HeaderContainer = styled('div')`
  .header {
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100px;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #00155f;
  }
  .header-float {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100px;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0037ff;
  }
  .hidden {
    display: none;
  }
  .button-Item-Type-2 {
    text-align: center;
    flex: 1;
    font-size: 16px;
    padding-top: 13px;
    font-weight: 500;
    //color: #ffffff;
    text-decoration: none;
  }
  .button-Item-Type-1 {
    text-align: center;
    flex: 1;
    font-size: 16px;
    padding-top: 13px;
    font-weight: 500;
    color: #ffffff;
    text-decoration: none;
    background-color: #00155f;
  }
  .headerLogoTitle {
    display: flex;
    align-items: center;
    height: 50px;
    text-decoration: none;
  }
  .logoWC {
    height: 40px;
  }
  .title {
    margin: 0;
    padding-left: 4px;
    color: #fff;
  }
  .title:hover {
    color: rgb(238, 233, 229);
  }
`;
