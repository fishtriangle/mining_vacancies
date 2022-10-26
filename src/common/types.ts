export interface getEnterprise {
  getEnterprise: {
    id: number;
    title?: string;
    logo?: string;
    description?: string;
    contacts?: string;
    vacancies?: {
      id: number;
      vacancy?: string;
      requirements?: string;
      docs?: string;
      salary?: string;
      authorId?: number;
    }[];
    photos: {
      id: number;
      small?: string;
      large?: string;
      alt?: string;
      authorId?: string;
    }[];
    marker?: {
      id: number;
      value?: string;
      top?: number;
      left?: number;
      corner?: string;
    };
  };
}

export interface getEnterpriseVars {
  pollInterval: number;
  id: number;
}
