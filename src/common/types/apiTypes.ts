type FieldError = {
  error: string;
  field: string;
};

export type BaseResponce<D = {}> = {
  resultCode: number;
  messages: Array<string>;
  data: D;
  fieldsErrors: FieldError[];
};

export type Photos = {
  small: null | string;
  large: null | string;
};
export type User = {
  followed: boolean;
  id: number;
  name: string;
  Photos: Photos;
  status: null | any;
  uniqueUrlName: null | any;
};

export type UserResponse = {
  items: User[];
  totalCount: number;
  error: null | string;
};
type Contacts = {
  facebook: null | string;
  website: null | string;
  vk: null | string;
  twitter: null | string;
  instagram: null | string;
  youtube: null | string;
  github: null | string;
  mainLink: null | string;
};

export type UserProfile = {
  aboutMe: string;
  contacts: Contacts;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number;
  Photos: Photos;
};
