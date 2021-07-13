import { COLORS } from '../BaseTheme'

//* Light theme colors
export const lightColors = {
    //* Base colors
    PRIMARY: COLORS.PRIMARY,     //* purple
    SECONDARY: COLORS.SECONDARY,   //* purple

    DEFAULT: COLORS.DARK_GRAY,
    BACKGROUND: COLORS.WHITE,

    WHITE: COLORS.WHITE,
    BLACK: COLORS.BLACK,
};

//* Dark theme colors
export const darkColors = {
    //* Base colors
    PRIMARY: COLORS.PRIMARY,     //* purple
    SECONDARY: COLORS.SECONDARY,   //* purple

    DEFAULT: COLORS.DARK_GRAY,
    BACKGROUND: COLORS.BLACK,

    WHITE: COLORS.WHITE,
    BLACK: COLORS.BLACK,
};

export type Colors = typeof lightColors;