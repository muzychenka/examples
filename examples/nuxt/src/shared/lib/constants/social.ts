import { z } from 'zod'

export const socialsEnum = z.enum(['linkedin', 'github', 'telegram', 'instagram'])

export const SOCIAL_LINKS = [
    {
        name: socialsEnum.enum.linkedin,
        url: 'https://github.com/feature-sliced'
    },
    {
        name: socialsEnum.enum.github,
        url: 'https://github.com/feature-sliced'
    },
    {
        name: socialsEnum.enum.telegram,
        url: 'https://github.com/feature-sliced'
    },
    {
        name: socialsEnum.enum.instagram,
        url: 'https://github.com/feature-sliced'
    }
]
