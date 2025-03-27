export interface Resume {
    basics: {
      name: string;
      label: string;
      email: string;
      phone: string;
      location: {
        city: string;
        country: string;
      };
      summary: string;
    };
    experience: {
      company: string;
      position: string;
      startDate: string;
      endDate: string;
      highlights: string[];
    }[];
    education: {
      institution: string;
      degree: string;
      field: string;
      startDate: string;
      endDate: string;
      gpa?: string;
    }[];
    skills: {
      category: string;
      items: string[];
    }[];
    projects: {
      name: string;
      description: string;
      technologies: string[];
      link?: string;
    }[];
    languages: {
      language: string;
      proficiency: string;
    }[];
}