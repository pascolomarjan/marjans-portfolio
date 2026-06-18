export interface ParagraphData {
    readonly title: string,
    readonly icon?: string,
    readonly content: string,
}

export const aboutMeParagraphs: ParagraphData[] = [
    {
        title: "Highschool",
        icon: "resistor",
        content: `I'm a professional developer since 10 years, \
        but my passion about programming started earlier in high scholl. \
        I studied electronics and telecommunications, and one of the course was c development, \
        which made me very interested about the world of programming, \
        even more than electronics itslef.`
    },
    {
        title: "University",
        icon: "mortarboard",
        content: `Once graduate in high school, I attended computer science at the local university, \
        where I got my bachelor degree. In university I learned more high level programming languages \
        such as java and python, and got the basics of sql, networking, oop and web development.`
    },
    {
        title: "First job",
        icon: "microchip",
        content: `After the bachelor degree I started working at an access control company, \
        where I was able to put to work the skills I got at schools, \
        and develop new in all direction. Work was very different, \
        since was involving different tasks, from kernel/dts patching, \
        to api management and user portal development.`
    },
    {
        title: "Recent jobs",
        icon: "cloud",
        content: `I started getting interested about cloud development as well, \
        which I had the chance to dig and practice into the recent companies I've worked for \
        by learning and getting familiar with the most common cloud tools and technologies.`
    }
]