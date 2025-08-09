export interface UICategory {
  id: string;
  title: string;
  description: string;
  image: string;
  featured?: boolean;
}

export interface UIPrincipleDetail {
  id: string;
  title: string;
  category: string;
  description: string;
  content: string;
  image: string;
  examples: string[];
  keyPoints: string[];
  citations: Citation[];
}

export interface Citation {
  id: number;
  text: string;
  url: string;
}

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  type: 'category' | 'principle';
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  preferences: {
    favoriteCategories: string[];
    completedPrinciples: string[];
    learningGoals: string[];
  };
}