import { defineThemeConfig } from '@utils/defineThemeConfig'
import previewImage from '@assets/img/social-preview-image.png'
import logoImage from '@assets/img/logo.svg'

export default defineThemeConfig({
  name: 'Kariana Ninoska Rivas Rojas',  
  id: 'Portafolio Kariana Rivas',
  logo: logoImage,
  seo: {
    title: 'Kariana Rivas | Portafolio',
    description:
  'Portafolio personal de Kariana Rivas, estudiante de Ingeniería de Sistemas en la Universidad El Bosque, interesada en tecnología, desarrollo de software, bases de datos y sistemas de información.',
    author: 'Kariana Rivas',
    image: previewImage, // Can also be a string e.g. '/social-preview-image.png',
  },
  colors: {
    primary: '#d648ff',
    secondary: '#00d1b7',
    neutral: '#b9bec4',
    outline: '#ff4500',
  },
navigation: {
  darkmode: true,

  items: [
    {
      type: 'link',
      label: 'Home',
      href: '/',
    },
    {
      type: 'link',
      label: 'Portfolio',
      href: '/portfolio',
    },
    {
      type: 'link',
      label: 'Evidencias',
      href: '/evidencias',
    },
    {
      type: 'link',
      label: 'Contacto',
      href: '/contact',
    },
    {
      type: 'link',
      label: 'GitHub',
      href: 'https://github.com/Karilin27',
      icon: 'lucide:github',
      external: true,
      excludeFromLauncher: true,
    },
  ],
},
  socials: [
  {
    label: 'GitHub',
    href: 'https://github.com/Karilin27',
    icon: 'lucide:github',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/573053990509',
    icon: 'lucide:message-circle',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/karianarivas/',
    icon: 'lucide:instagram',
  },
],
})
