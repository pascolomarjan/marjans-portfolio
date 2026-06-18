export interface TechnichalSkill {
    readonly area: string;
    readonly icon?: string;
    readonly skills: string[];
}

export const techSkills: TechnichalSkill[] = [
    {
        area: "Backend",
        icon: "console",
        skills: ["Java", "Springboot", "Node.js", "Typescript", "Python", "Kafka", "Camel", "C#/.NET", "Lua"]
    },
    {
        area: "Frontend",
        icon: "window",
        skills: ["Html", "CSS", "Javascript", "React", "PHP", "Angular.js"]
    },
    {
        area: "Databases",
        icon: "database",
        skills: ["SQL", "Postgresql", "Sqlserver", "MySql", "Mongodb"]
    },
    {
        area: "DevOps",
        icon: "cloud",
        skills: ["Docker", "Kubernetes", "Helm"]
    },
    {
        area: "Embedded",
        icon: "microchip",
        skills: ["C", "Bash", "Linux Drivers", "Device Tree", "Arduino", "Raspberry Pi"]
    },

]