import * as React from 'react'

import * as types from 'notion-types'
import { FcCalendar } from '@react-icons/all-files/fc/FcCalendar'
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'
import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'
import cs from 'classnames'
import { Breadcrumbs, Header, Search, useNotionContext } from 'react-notion-x'

import { isSearchEnabled, navigationLinks, navigationStyle } from '@/lib/config'
import { NavigationLink, NavlinkIconMap } from '@/lib/site-config'
import { useDarkMode } from '@/lib/use-dark-mode'

import styles from './styles.module.css'

const ToggleThemeButton = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  const onToggleTheme = React.useCallback(() => {
    toggleDarkMode()
  }, [toggleDarkMode])

  return (
    <div
      className={cs('breadcrumb', 'button', !hasMounted && styles.hidden)}
      onClick={onToggleTheme}
    >
      {hasMounted && isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
    </div>
  )
}

const linkIconMap: NavlinkIconMap = {
  calendar: <FcCalendar />
}
const RenderNavLinks = (link: NavigationLink, index: number) => {
  const { components, mapPageUrl } = useNotionContext()
  if (!link.pageId && !link.url) {
    return null
  }

  if (link.pageId) {
    return (
      <components.PageLink
        href={mapPageUrl(link.pageId)}
        key={index}
        className={cs(styles.navLink, 'breadcrumb', 'button')}
      >
        {linkIconMap[link.icon] || link.title}
      </components.PageLink>
    )
  } else {
    return (
      <components.Link
        href={link.url}
        key={index}
        className={cs(styles.navLink, 'breadcrumb', 'button')}
      >
        {link.title}
      </components.Link>
    )
  }
}

export const NotionPageHeader: React.FC<{
  block: types.CollectionViewPageBlock | types.PageBlock
}> = ({ block }) => {
  if (navigationStyle === 'default') {
    return <Header block={block} />
  }

  return (
    <header className='notion-header'>
      <div className='notion-nav-header'>
        <Breadcrumbs block={block} rootOnly={true} />

        <div className='notion-nav-header-rhs breadcrumbs'>
          {navigationLinks
            ?.map((link, index) => {
              return RenderNavLinks(link, index)
            })
            .filter(Boolean)}

          <ToggleThemeButton />

          {isSearchEnabled && <Search block={block} title={null} />}
        </div>
      </div>
    </header>
  )
}
