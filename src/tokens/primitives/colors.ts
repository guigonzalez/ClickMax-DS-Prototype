/**
 * Primitive Color Tokens
 * Raw values - NEVER use directly in components
 * These form the base for semantic tokens
 */

export const colors = {
  // Neutral palette - Base grayscale
  neutral: {
    0: '#FFFFFF',
    50: '#FAFAFA',
    100: '#F4F5F5',
    200: '#EDEEEF',
    300: '#DEE0E2',
    400: '#B9BDC1',
    500: '#989EA4',
    600: '#697077',
    700: '#565C61',
    800: '#3A3D41',
    900: '#1F2123',
    950: '#131416',
    1000: '#000000',
  },
  // Fluor - Brand primary (yellow-green fluorescent)
  fluor: {
    50: '#FAFFE7',
    100: '#F2FEC2',
    200: '#E7FD97',
    300: '#D7F433',
    400: '#DDFC68',
    500: '#D4FF00', // Brand primary
    600: '#C8EB00',
    700: '#B9D400',
    800: '#AABC00',
    900: '#929300',
  },
  // Azure - Primary blue
  azure: {
    50: '#E1F6FF',
    100: '#B4E7FF',
    200: '#82D7FF',
    300: '#4FC7FF',
    400: '#27BBFF',
    500: '#00AEFF',
    600: '#03A0F0',
    700: '#058DDB',
    800: '#057BC7',
    900: '#065BA5',
  },
  // Purplish - Primary purple
  purplish: {
    50: '#F1E6FF',
    100: '#D8C1FE',
    200: '#BD97FF',
    300: '#A069FF',
    400: '#8741FF',
    500: '#6A00FF',
    600: '#5C00F9',
    700: '#4506E0',
    800: '#290AC2',
    900: '#0A0AB8',
  },
  // Cadmium - Secondary yellow/gold
  cadmium: {
    50: '#FFFDE5',
    100: '#FFF9BF',
    200: '#FFF493',
    300: '#FFF066',
    400: '#FDEB3D',
    500: '#FFEA00',
    600: '#FED600',
    700: '#FEBD00',
    800: '#FEA400',
    900: '#FD7700',
  },
  // Torch - Red/Pink for errors and alerts
  torch: {
    50: '#FFE4EA',
    100: '#FFBBCB',
    200: '#FF8EA9',
    300: '#FF5F86',
    400: '#FF376C',
    500: '#FF0052',
    600: '#EE0051',
    700: '#D9004E',
    800: '#C5004C',
    900: '#A30049',
  },
  // Gradients for backgrounds
  background: {
    base: 'linear-gradient(180deg, #F5F5F4 0%, #FAFAFA 100%)',
    soft: 'linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 100%)',
  },
} as const;

export type Colors = typeof colors;
