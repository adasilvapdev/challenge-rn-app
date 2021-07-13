import { Dimensions, PixelRatio } from "react-native"
const { width, height } = Dimensions.get("window")
export const scaleFont = (size: any) => size * PixelRatio.getFontScale()

export const COLORS = {
    //* Base colors palette
    PRIMARY: "#9570dd",     //* purple
    SECONDARY: "#9f05c5",   //* purple

    PURPLE: "#502989",
    PURPLE2: "#693699",
    PURPLE3: "#7c40a9",
    PURPLE4: "#730c99",

    //* Colors
    BLACK: "#000000",
    ALMOST_BLACK: "#1E1F20",

    WHITE: "#FFFFFF",
    LIGHT_WHITE: "#f7f7f9",
    LIGHT_WHITE2: "#e2e2e5",

    LIGHT_GRAY: "#ebebf4",
    LIGHT_GRAY2: "#F6F6F7",
    LIGHT_GRAY3: "#EFEFF1",
    LIGHT_GRAY4: "#F8F8F9",
    LIGHT_GRAY5: "#464665",

    TRANSPARENT: "transparent",
    DARK_GRAY: "#898C95",
    DARK_GRAY2: "#383859",

    SUNNY_YELLOW: "#ea9f17",
    MOONY_YELLOW: "#ea9f17",

    //* Pop up messages
    DANGER: "#ff0f0f",
    WARNING: "#ffae42",
    INFO: "#408fff",
    SUCCESS: "#4BB543",
}

export const SIZES = {
    //* Global sizes
    BASE: 8,
    FONT: 14,
    RADIUS: 30,
    PADDING: 10,
    PADDING_2: 12,

    //* Font sizes
    EXTRA_LARGE_TITLE: scaleFont(50),
    LARGE_TITLE: scaleFont(38),
    H1: scaleFont(25),
    H2: scaleFont(22),
    H3: scaleFont(20),
    H4: scaleFont(18),
    H5: scaleFont(16),
    H6: scaleFont(14),
    PARAGRAPH: scaleFont(12),
    BODY: scaleFont(10),

    //* App dimensions
    WIDTH: width,
    HEIGHT: height
}

export const FONTS = {
    //* FONT FAMILY
    FONT_FAMILY_REGULAR: "Montserrat-Regular",
    FONT_FAMILY_BOLD: "Montserrat-Bold",

    //* FONT STYLE
    FONT_STYLE_NORMAL: "normal",
    FONT_STYLE_ITALIC: "italic",

    //* FONT WEIGHT
    FONT_WEIGHT_REGULAR: "400",
    FONT_WEIGHT_BOLD: "bold",

    //* LINE HEIGHT
    LINE_HEIGHT_24: scaleFont(24),
    LINE_HEIGHT_20: scaleFont(20),
    LINE_HEIGHT_16: scaleFont(16),
}

const appTheme = { COLORS, SIZES, FONTS }

export default appTheme
