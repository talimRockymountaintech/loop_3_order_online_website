"use client";
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material';
import { Poppins } from 'next/font/google';
import React, { Children } from 'react'
const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
const ThemeRegistry = ({ children }: {
    children: React.ReactNode;
}) => {
    const themeOptions: ThemeOptions = {
        typography: {
            // fontSize: 16,
            fontFamily: poppins.style.fontFamily,
            h6: {
                color: "#000",
            },
            h5: {
                color: "#000",
            },
        },
        palette: {
            primary: {
                main: "#7A1CAC",
                contrastText: '#fff',
            },
            text: {
                primary: "#7A1CAC",
                secondary: `#535353`,
                disabled: 'rgba(60, 72, 88, 0.38)',
            },
        },
        components: {
            MuiSkeleton: {
                defaultProps: {
                    animation: 'wave'
                }
            }
        }
    };
    const theme = createTheme(themeOptions);
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default ThemeRegistry