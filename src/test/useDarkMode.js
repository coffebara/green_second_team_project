import { useState } from "react";

export default function useDarkMode() {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');

    }
    return (
        [theme, toggleTheme]
    );
}