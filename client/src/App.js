import React, { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import './App.css';
import ToggleDark from './components/ToggleDark';
import Passwords from './components/Passwords.js';

export default function App() {

    const [colorScheme, setColorScheme] = useLocalStorage < ColorScheme > ({
        key: 'mantine-color-scheme',
        defaultValue: 'light',
    });

    const toggleColorScheme = (ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));



    return (

        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{ colorScheme }}>

            <Passwords />

            <ToggleDark toggleDark={toggleColorScheme}/>

            </MantineProvider>

        </ColorSchemeProvider>
    );

};