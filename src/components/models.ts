export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface GuestData {
  RIID_: string
  LAST_NAME: string;
  FIRST_NAME: string;
  EMAIL_ADDRESS_: string
  EMAIL_DELIVERABILITY_STATUS_: string
  EMAIL_PERMISSION_STATUS_: string
  MEMBERSHIP_LEVEL: string
}

export interface GuestDataRetVal {
  data: null | GuestData;
  success: boolean;
  error: null | {} | string;
}
