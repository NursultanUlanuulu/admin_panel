export interface StoryCrud {
  id: number;
  image?: string;
  video?: string;
  link?: string;
  is_active?: boolean;
  created?: string;
  main_story?: number;
  user_views: any[];
}
