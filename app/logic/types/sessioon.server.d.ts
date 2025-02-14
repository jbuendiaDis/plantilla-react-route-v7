export type UserInfo = {
    id: string;
    email: string;
    name: string;
    role: string;
  };

  export type LoginResponse = {
    token: string;
    user: UserInfo;
  };
