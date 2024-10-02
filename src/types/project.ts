export type Project = {
    logo: string,
    title: string,
    description: string,
    techStack: string[],
    link?: string,
    source: string
};

export interface I_Heading {
    title: string
}

export interface I_Education {
    institute_link?: string,
    institute_logo: string,
    course_title: string,
    ending_date: string,
    institute_name: string,
    cgpa: number,
    description: string
}

export interface I_Experience {
    company_link: string,
    company_logo: string,
    company_name: string,
    duration: string,
    job_title: string,
    description: string
}

export interface DarkModeContextType {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}