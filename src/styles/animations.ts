import { css, keyframes } from 'styled-components';

// Keyframe animations
export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const bounceIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

// Animation mixins
export const fadeInUpAnimation = css`
  animation: ${fadeInUp} 0.8s ease-out both;
`;

export const fadeInDownAnimation = css`
  animation: ${fadeInDown} 0.8s ease-out both;
`;

export const fadeInLeftAnimation = css`
  animation: ${fadeInLeft} 0.8s ease-out both;
`;

export const fadeInRightAnimation = css`
  animation: ${fadeInRight} 0.8s ease-out both;
`;

export const fadeInScaleAnimation = css`
  animation: ${fadeInScale} 0.8s ease-out both;
`;

export const slideInUpAnimation = css`
  animation: ${slideInUp} 0.8s ease-out both;
`;

export const bounceInAnimation = css`
  animation: ${bounceIn} 0.8s ease-out both;
`;

export const pulseAnimation = css`
  animation: ${pulse} 2s infinite;
`;

// Staggered animations with delays
export const staggeredFadeInUp = (delay: number = 0) => css`
  animation: ${fadeInUp} 0.8s ease-out ${delay}s both;
`;

export const staggeredFadeInScale = (delay: number = 0) => css`
  animation: ${fadeInScale} 0.8s ease-out ${delay}s both;
`;

// Hover animations
export const hoverLift = css`
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

export const hoverScale = css`
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const hoverGlow = css`
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
    filter: brightness(1.1);
  }
`;
