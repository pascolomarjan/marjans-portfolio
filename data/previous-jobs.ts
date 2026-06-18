export interface JobDescription {
    readonly progressiveId: number;
    readonly years: string;
    readonly companyName: string;
    readonly jobTitle: string;
    readonly jobDescription: string;
}

export const jobList: JobDescription[] = [
    {
        progressiveId: 1,
        years: "2016 - 2022",
        companyName: process.env.NEXT_PUBLIC_COMPANY_NAME_1!,
        jobTitle: "Full Stack Developer",
        jobDescription: "Developed software for access control devices, including utilities, management software, and test tools, using various languages and frameworks (java, lua,python, c, php). Integrated hardware through standard interfaces (UART, I2C,displays) and implemented custom Linux drivers for non-standard interfaces(e.g., Wiegand). Also responsible for testing, documenting, and troubleshooting both hardware and software components."
    },
    {
        progressiveId: 2,
        years: "2022 - 2024",
        companyName: process.env.NEXT_PUBLIC_COMPANY_NAME_2!,
        jobTitle: "Backend and Embedded Developer",
        jobDescription: "Developed and optimized Spring Boot backend microservices with GIS functionality, deployed on Azure using Docker and Kubernetes. Created C applications for headless embedded devices and developed an Android app inKotlin. Also responsible for troubleshooting and maintaining system performance across all components."
    },
    {
        progressiveId: 3,
        years: "2024 - current",
        companyName: process.env.NEXT_PUBLIC_COMPANY_NAME_3!,
        jobTitle: "Backend Developer",
        jobDescription: "Developed cloud-native backend microservices for managing an IoT system, using technologies such as Node.js, MongoDB, Kafka, Spring Boot,Hibernate, Spring Data MongoDB, Docker, and Kubernetes."
    }
];