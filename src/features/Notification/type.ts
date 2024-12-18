export interface Notification {
  id?: number;
  user: {
    id: number;
    first_name: string;
    last_name: string;
    phone: string;
  };
  message: string;
  is_read: boolean;
  created_at: string;
}
