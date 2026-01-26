/**
 * Primitive Color Tokens
 * Raw values - NEVER use directly in components
 * These form the base for semantic tokens
 */

export const colors = {
  yellow: {
    50: '#FFFEF0',
    100: '#FEFCE8',
    200: '#FEF9C3',
    300: '#FEF08A',
    400: '#FDE047',
    500: '#E4FF00', // Brand primary
    600: '#D1E600',
    700: '#A3B71C',
    800: '#7A8A15',
    900: '#5C6810',
  },
  gray: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E8E9EB',
    300: '#C5C7CC',
    400: '#8B8F96',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#3F4248',
    900: '#2A2D31',
    950: '#1A1D21',
  },
  white: '#FFFFFF',
  black: '#000000',
  red: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
  },
  orange: {
    50: '#FFFBEB',
    100: '#FEF3C7',
    500: '#F59E0B',
    600: '#D97706',
  },
  green: {
    50: '#ECFDF5',
    100: '#D1FAE5',
    500: '#10B981',
    600: '#059669',
  },
  blue: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    500: '#3B82F6',
    600: '#2563EB',
  },
} as const;

export type Colors = typeof colors;
