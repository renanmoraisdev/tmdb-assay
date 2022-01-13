import dark from './colors/dark';
import light from './colors/light';

const theme = {
  color: light,
  colors: { light, dark },
  gradient: {
    default: 'linear-gradient(to right, #1f2932, #394d58)',
  },
  fontSizes: {
    default: '1.4rem',
    large: '1.6rem',
    small: '1.2rem',
    tiny: '1rem',
  },
  spacing: {
    default: '1.6rem',
    vertical: '1.6rem 0',
    horizontal: '0 1.6rem',
    large: '2.4rem',
  },
  border: {
    default: '1px solid #394d58',
  },
  transition: {
    default: '180ms ease-in-out',
  },
  radii: {
    default: '0.8rem',
    small: '0.4rem',
    smallTop: '0.4rem 0.4rem 0 0',
    smallBottom: '0 0 0.4rem 0.4rem',
    tiny: '0.2rem',
  },
  shadows: {
    default: '0 0.5rem 2rem rgba(0, 0, 0, 0.08)',
    flat: '0 0.2rem 0.2rem rgba(0, 0, 0, 0.08)',
  },
} as const;

export default theme;
