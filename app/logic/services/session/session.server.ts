import { createCookieSessionStorage, redirect } from "react-router";

import type { UserInfo } from "~/logic/types/sessioon.server.d";

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    secrets: [process.env.SESSION_SECRET || "fallback_secret"],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
});

export const { commitSession, destroySession } = sessionStorage;

const getUserSession = async (request: Request) => {
  return await sessionStorage.getSession(request.headers.get("Cookie"));
};

export async function logout(request: Request) {
  const session = await getUserSession(request);
  return redirect("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
}

const TOKEN_KEY = "token";
const USER_INFO_KEY = "userInfo";

export async function getToken(request?: Request): Promise<string | undefined> {
  if (!request) return undefined;
  const session = await getUserSession(request);
  return session.get(TOKEN_KEY);
}

export async function getUserInfo(request: Request): Promise<UserInfo | undefined> {
  const session = await getUserSession(request);
  return session.get(USER_INFO_KEY);
}

export async function getUserId(request: Request): Promise<string | undefined> {
  const userInfo = await getUserInfo(request);
  return userInfo?.id;
}

export async function createUserSession({
  request,
  token,
  userInfo,
  remember = true,
  redirectUrl,
}: {
  request: Request;
  token: string;
  userInfo: UserInfo;
  remember: boolean;
  redirectUrl?: string;
}) {
  const session = await getUserSession(request);
  session.set(TOKEN_KEY, token);
  session.set(USER_INFO_KEY, userInfo);

  return redirect(redirectUrl || "/", {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: remember
          ? 60 * 60 * 24 * 7 // 7 days
          : undefined,
      }),
    },
  });
}