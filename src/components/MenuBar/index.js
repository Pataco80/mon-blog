import React, { useState, useEffect } from "react"

// Import Components for App
import { Home } from "@styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2"
import { SunOutline as Sun } from "@styled-icons/evaicons-outline/SunOutline"
import { MoonOutline as Moon } from "@styled-icons/evaicons-outline/MoonOutline"
import { Grid } from "@styled-icons/boxicons-solid/Grid"
import { ArrowUp as Arrow } from "@styled-icons/entypo/ArrowUp"
import { List } from "@styled-icons/evaicons-solid/List"

// Import Styles
import * as S from "./styled"
import getThemeColor from "../../utils/getThemeColor"

// Component
const MenuBar = () => {
  // Variables pour la fonctionalité de theme

  // Utiliser useState avant le contrôle de la variable is"Name"theme
  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)
  const isDarkTheme = theme === "dark"
  const isListDisplay = display === "list"

  // Utiliser le useEffect remplace la fonctionalité componentDidMount. Laisser un array vide à la fin pour ne pas répéter la fonctionalité et causer une erreur.
  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)

    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
  }, [])

  // Render Component
  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink
          to="/"
          title="Aller à la page d'Acceuil"
          cover
          direction="right"
          duration={0.6}
          bg={getThemeColor()}
        >
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>
        <S.MenuBarLink
          to="/search/"
          title="Rechercher"
          cover
          direction="right"
          duration={0.6}
          bg={getThemeColor()}
        >
          <S.MenuBarItem>
            <Search />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Theme Light / Dark"
          onClick={() => {
            window.__setPreferredTheme(isDarkTheme ? "light" : "dark")
            if (window.DISQUS !== undefined) {
              window.setTimeout(() => {
                window.DISQUS.reset({
                  reload: true,
                })
              }, 300)
            }
          }}
          className={theme}
          isDarkTheme={isDarkTheme}
        >
          {isDarkTheme ? <Sun /> : <Moon />}
        </S.MenuBarItem>
        <S.MenuBarItem
          title="Affichage Liste ou Grille"
          onClick={() => {
            window.__setPreferredDisplay(isListDisplay ? "grid" : "list")
          }}
        >
          {isListDisplay ? <Grid /> : <List />}
        </S.MenuBarItem>
        <S.MenuBarItem title="Aller en haut">
          <Arrow />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar
