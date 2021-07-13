import React from 'react';
import { Appearance } from 'react-native';
import {
    lightColors,
    darkColors,
    Colors
} from './ColorsTheme';

export interface Theme {
    isDark: boolean;
    THEME: Colors;
    setScheme: (val: 'dark' | 'light') => void;
}

export const ThemeContext = React.createContext<Theme>({
    isDark: false,
    THEME: lightColors,
    setScheme: () => { },
});

export const ThemeProvider: React.FC<{}> = (props) => {
    const colorScheme = Appearance.getColorScheme();
    const [isDark, setIsDark] = React.useState<boolean>(colorScheme === "dark");

    const defaultTheme: Theme = {
        isDark,
        THEME: isDark ? darkColors : lightColors,
        setScheme: (scheme) => setIsDark(scheme === "dark"),
    };

    return (
        <ThemeContext.Provider value={defaultTheme}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => React.useContext(ThemeContext);