import { COLORS } from '../BaseTheme'

//* Light theme colors
export const lightColors = {
    //* Base colors
    PRIMARY: COLORS.PRIMARY,     //* purple
    SECONDARY: COLORS.SECONDARY,   //* purple

    BACKGROUND: COLORS.WHITE,
};

//* Dark theme colors
export const darkColors = {
    //* Base colors
    PRIMARY: COLORS.PRIMARY,     //* purple
    SECONDARY: COLORS.SECONDARY,   //* purple

    BACKGROUND: COLORS.BLACK,
};

export type Colors = typeof lightColors;