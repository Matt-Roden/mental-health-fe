//Landing Page types
//some of this data might be shared
export interface SearchResult {
  text: string;
  suggestions: Tag[];
}

export interface Tag {
  id: number;
  name: string;
}

export interface Question {
  id: number;
  title: string;
  responses: number;
  tags: string[];
}


