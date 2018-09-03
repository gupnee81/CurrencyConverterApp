import styled from 'styled-components';

 

const LoadingContainer = styled.div`
  position: relative;
  margin: 0px auto;
  width: 64px;
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

const SVG = styled.svg`
  background-color: transparent;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  -webkit-transform-origin: center center;
  transform-origin: center center;
  -webkit-animation: rotate 2s linear infinite;
  animation: rotate 2s linear infinite;
`;

const Innercircle = styled.circle`
  stroke: #000;
  stroke-width: 6%;
  stroke-dasharray: 0;
  stroke-dashoffset: 0;
  stroke-linecap: round;
 `;

 

const Outercircle = styled.circle`
  stroke: #fff;
  stroke-width: 6%;
  stroke-dasharray: 1,200;
  stroke-dashoffset: 0;
  -webkit-animation: dash 1.5s ease-in-out infinite;
  animation: dash 1.5s ease-in-out infinite;
  stroke-linecap: round;
  @-webkit-keyframes dash {
    0% {
        stroke-dasharray: 1,200;
        stroke-dashoffset: 0
    }
    50% {
        stroke-dasharray: 89,200;
        stroke-dashoffset: -35px
    }
    100% {
        stroke-dasharray: 89,200;
        stroke-dashoffset: -124px
    }
  }

  @keyframes dash {
    0% {
        stroke-dasharray: 1,200;
        stroke-dashoffset: 0
    }
    50% {
        stroke-dasharray: 89,200;
        stroke-dashoffset: -35px
    }
    100% {
        stroke-dasharray: 89,200;
        stroke-dashoffset: -124px
    }
  }
`;

 

const LoaderBackgroundHolder = styled.div`
  border-width: 0px;
  left: 0px;
  top: 0px;
  width: 98px;
  height: 92px;
  background: inherit;
  background-color: #ccc;
  border: none;
  border-radius: 5px;
`;

 

const LoaderCenterAlign = styled.div`
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
`;

 

const content = styled.p`
  margin: 0;
  font-size: 12px;
`;

 

export default {
  LoadingContainer,
  LoaderBackgroundHolder,
  LoaderCenterAlign,
  content,
  SVG,
  Innercircle,
  Outercircle,
};
