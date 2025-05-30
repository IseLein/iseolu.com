import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'iselein dot com',
  description: 'we are making attempts boys, get in, essay',
  href: 'https://iseolu.com',
  author: 'iseoluwa',
  locale: 'en-US',
  featuredPostCount: 5,
  postsPerPage: 15,
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/IseLein',
    label: 'GitHub',
  },
  {
    href: 'https://twitter.com/iselein_sh',
    label: 'Twitter',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
