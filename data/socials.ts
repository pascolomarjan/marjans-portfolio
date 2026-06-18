export type SocialsLink = Record<string, string>;

export const socialsLinks: SocialsLink = {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_LINK!,
    github: process.env.NEXT_PUBLIC_GITHUB_LINK!,
}