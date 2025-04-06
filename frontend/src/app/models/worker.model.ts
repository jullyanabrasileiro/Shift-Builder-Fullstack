export interface Worker {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    position: string;
    isAdmin: boolean;
    shiftsCount?: number; 
  }
  