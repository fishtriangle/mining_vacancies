export interface marker {
  id: number;
  value?: string;
  top?: number;
  left?: number;
  corner?: string;
}

export interface photo {
  id: number;
  small?: string;
  large?: string;
  alt?: string;
  authorId?: string;
}

export interface enterprice {
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
  photos: photo[];
  marker?: marker;
}

export interface getEnterprise {
  getEnterprise: enterprice;
}

export interface getEnterpriseVars {
  pollInterval: number;
  id: number;
}

export interface inputPhoto {
  img: string | ArrayBuffer | null;
  alt?: string;
}

export interface getNews {
  getNews: {
    id: number;
    title?: string;
    date?: string;
    description?: string;
    photos: {
      id: number;
      small?: string;
      large?: string;
      alt?: string;
      authorId?: string;
    }[];
  };
}

export interface getNewsVars {
  pollInterval: number;
  id: number;
}
