export const mapMenu = (menu = {}) => {
  const {
    open_in_new_tab: newTab = false,
    logo_text: text = '',
    logo_link: link = '',
    menu: links = [],

  } = menu

  const srcImg = menu.logo && menu.logo.url ? menu.logo.url : ''
  return {
    newTab,
    text,
    link,
    srcImg,
    links: mapManuLinks(links),
  }
}

export const mapManuLinks = (links = []) => {
  return links.map(item => {
    const {
      open_in_new_tab: newTab,
      link_text: children,
      url: link = '',
    } = item

    return {
      newTab,
      children,
      link,

    }
  })
}
