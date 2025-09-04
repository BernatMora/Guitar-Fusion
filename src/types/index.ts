export interface ContentBlock {
  type: 'heading' | 'subheading' | 'paragraph' | 'list' | 'highlight' | 'code';
  text: string;
  items?: string[];
}

export interface Section {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  content: ContentBlock[];
}

export interface Module {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  sections: Section[];
}