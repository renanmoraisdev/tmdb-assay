import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 84rem; // 1200px
  margin: 0 auto;
  position: relative;
  display: block;
`;

export const TitleHidden = styled.h1`
  font: 0/0 a;
  text-shadow: none;
  color: transparent;
`;

export const Title = styled.h1`
  display: block;
  color: #fff;
  font-size: 22px;
  font-family: 'Roboto', sans-serif;
  margin: 20px 0px;
`;

export const CodeSpan = styled.span`
  display: block;
  text-align: center;
  color: #fff;
  font-size: 22px;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
`;

export const SectionWrapper = styled.section`
  display: block;
  width: 100%;
  margin: 20px 0px;
`;

export const FlexStart = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const BlockCode = styled.div`
  min-width: 88.2px;
  padding: 30px;
  margin: 0px 15px 15px 0px;
  border-radius: 8px;
  background: #3ec8ec;
  cursor: pointer;
`;

export const BlockCodeThin = styled(BlockCode)`
  padding: 15px;
`;

export const WrapperFullCentralized = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

type AspectRatioContentProps = {
  fixHeight?: string;
  aspectRatio?: number;
};

export const AspectRatioContent = styled.div<AspectRatioContentProps>`
  ${({ fixHeight, aspectRatio = 9 / 16 }) => css`
    width: 100%;
    overflow: hidden;
    position: relative;
    display: block;

    height: ${fixHeight || 'auto'};
    padding-top: ${fixHeight ? 'auto' : `${aspectRatio * 100}%`};

    box-shadow: inset 0 0 10px 0 rgb(0, 0, 0, 0.1);
    background: #cccccc;

    img {
      object-fit: cover;
    }

    iframe,
    img,
    object,
    video {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
    }
  `}
`;

export const BoxOverlay = styled.div`
  &:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
    z-index: 1;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0),
      rgba(0, 0, 0, 0.4) 40%,
      rgba(0, 0, 0, 0.1)
    );
  }
`;
