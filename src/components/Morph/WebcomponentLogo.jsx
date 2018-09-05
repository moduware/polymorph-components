import React from 'react';
import styled from 'styled-components';

const WebcomponentLogo = () => (
  <StyledWebcomponentLogo className="web-component-logo" xmlns="http://www.w3.org/2000/svg" width="249.126" height="165.191" viewBox="0 0 249.126 165.191" overflow="visible">
      <path className="path shield logo" fill="#E44D26" d="M85.003 164.563l-47.391-129.659 130.145-34.813 23.674 135.994-49.344 29.016z" />
      <path className="path shield-shadow logo" fill="#F16529" d="M139.144 153.796l39.867-23.457-20.236-116.216-53.189 14.229z" />
      <path className="path right-arm logo" fill="#EFEFEF" d="M229.654 67.17l6.064 20.864-46.424 13.117s0 27.922-22.529 39.022c-22.527 11.101-40.027 1.688-40.027 1.688l-2.802-8.074 33.417-9.086 7.396-28.6-21.529-21.176-30.948 9.36-2.687-7.345s14.46-31.959 57.186-13.782c0 0 13.463 8.401 16.482 15.81l46.401-11.798zM235.718 65.603l7.397-2.131 5.951 21.306-7.742 2.348z" />
      <path className="path right-arm-shadow logo" fill="#BCBCBC" d="M238.324 64.662l4.791-1.19 5.951 21.306-7.742 2.348-2.028-7.134 3.09-1.209zM224.535 68.475l5.119-1.305 6.064 20.864-46.424 13.117s-.5 24.363-16.656 35.395c-16.129 11.023-34.307 10.691-45.906 5.316l-1.293-3.723s31.568 7.422 47.199-16.297c9.426-15.637 9.26-26.911 9.26-26.911l46.584-12.611-3.947-13.845zM109.579 76.927l27.249-7.908 6.38 5.893-30.942 9.36z" />
      <path className="path left-arm logo" fill="#EFEFEF" d="M13.516 91.714l5.47 21.024 46.586-12.477s14.294 23.98 39.336 21.983c25.049-1.996 35.254-19.034 35.254-19.034l-1.727-8.368-33.354 9.296-20.993-20.774 7.658-29.228 31.384-7.793-1.453-7.69s-28.772-20.059-56.188 17.416c0 0-7.256 14.102-6.072 22.01l-45.901 13.635zM7.508 93.474l-7.448 1.951 5.791 21.344 7.857-1.939z" />
      <path className="path left-arm-shadow logo" fill="#BCBCBC" d="M4.789 93.991l-4.729 1.434 5.791 21.344 7.857-1.939-1.901-7.173-3.288.545zM18.596 90.216l-5.08 1.498 5.47 21.024 46.586-12.477s12.905 20.666 32.426 21.882c19.502 1.203 34.941-8.369 42.164-18.933l-.787-3.858s-23.334 22.535-48.907 10.154c-16.098-8.611-21.716-18.395-21.716-18.395l-46.483 13.014-3.673-13.909zM121.677 38.66l-27.448 7.14-2.476 8.337 31.383-7.793z" />
  </StyledWebcomponentLogo>
);

const StyledWebcomponentLogo = styled.svg`
  width: 30px;
  height: 30px;
  &:hover .path.shield {
    fill: #BCBCBC;
  }
  &:hover .path.shield-shadow {
    fill: #EFEFEF;
  }
  &:hover .right-arm,
  &:hover .left-arm {
    fill: #f58d61;
  }
  &:hover .right-arm-shadow,
  &:hover .left-arm-shadow {
    fill: #E44D26;
  }
`;

export default WebcomponentLogo;