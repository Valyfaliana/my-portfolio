"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Theme = "light" | "dark";
type ThemeMode = Theme | "system";

type ThemeContextValue = {
  theme: ThemeMode;
  resolvedTheme: Theme;
  setTheme: (theme: ThemeMode) => void;
};

type ThemeProviderProps = {
  children: ReactNode;
  attribute?: string;
  defaultTheme?: ThemeMode;
  enableSystem?: boolean;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function resolveThemeValue(theme: ThemeMode, enableSystem: boolean): Theme {
  if (theme === "system" && enableSystem) {
    return typeof window === "undefined" ? "dark" : getSystemTheme();
  }

  return theme === "light" || theme === "dark" ? theme : "dark";
}

export function ThemeProvider({
  children,
  attribute = "data-theme",
  defaultTheme = "dark",
  enableSystem = true,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") return defaultTheme;
    return (window.localStorage.getItem("theme") as ThemeMode | null) ?? defaultTheme;
  });

  const resolvedTheme = useMemo(
    () => resolveThemeValue(theme, enableSystem),
    [enableSystem, theme],
  );

  useEffect(() => {
    document.documentElement.setAttribute(attribute, resolvedTheme);

    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", theme);
    }
  }, [attribute, resolvedTheme, theme]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      resolvedTheme,
      setTheme: (nextTheme: ThemeMode) => setThemeState(nextTheme),
    }),
    [resolvedTheme, theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    return {
      theme: "dark",
      resolvedTheme: "dark",
      setTheme: () => {},
    } satisfies ThemeContextValue;
  }

  return context;
}
