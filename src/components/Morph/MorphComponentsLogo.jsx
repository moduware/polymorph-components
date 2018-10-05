import React from 'react';
import styled from 'styled-components';

const MorphComponentsLogo = () => (
  <StyledMorphComponentsLogo class="morph-components-logo" version="1.0" xmlns="http://www.w3.org/2000/svg" width="625.000000pt" height="625.000000pt" viewBox="0 0 625.000000 625.000000" preserveAspectRatio="xMidYMid meet">
    <g id="morphComponentsLogo" transform="translate(0.000000,625.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
      <path class="path" d="M1265 4588 c2 -7 65 -215 139 -463 243 -811 286 -949 293 -956 5 -4 184 -71 398 -150 215 -78 395 -146 400 -150 7 -5 7 -69 1 -188 l-9 -181 55 -72 c30 -40 57 -78 61 -85 4 -6 -19 -46 -52 -91 l-60 -81 -3 -255 c-2 -140 0 -252 3 -248 3 4 82 180 174 392 93 212 226 513 297 669 l129 285 -23 21 c-13 12 -108 96 -213 186 -104 90 -275 238 -380 329 -104 91 -257 224 -340 295 -82 72 -206 179 -275 238 -69 60 -150 130 -180 156 -30 26 -137 118 -237 204 -101 87 -181 152 -178 145z"/>
      <path class="path" d="M4760 4404 c-124 -108 -286 -248 -360 -312 -332 -287 -671 -581 -740 -642 -41 -36 -160 -140 -265 -230 -104 -90 -200 -173 -213 -185 l-23 -21 129 -285 c71 -156 204 -457 297 -669 92 -212 171 -388 174 -392 3 -4 5 108 3 248 l-3 255 -60 81 c-33 45 -56 85 -52 91 4 7 31 45 61 85 l55 72 -9 181 c-6 119 -6 183 1 188 6 4 186 72 400 150 215 79 393 146 398 150 7 7 50 145 293 956 74 248 137 456 139 463 2 6 3 12 2 11 -1 0 -103 -88 -227 -195z"/>
    </g>
  </StyledMorphComponentsLogo>
);

const StyledMorphComponentsLogo = styled.svg`
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

export default MorphComponentsLogo;