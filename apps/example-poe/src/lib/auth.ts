import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextApiRequest, NextApiResponse } from "next";
import { NextAuthOptions, getServerSession } from "next-auth";
import { getServerSession as getServerSessionNext } from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

import db from "./db";
import { env } from "@/env.mjs";

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(db),
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		GoogleProvider({
			clientId: env.GOOGLE_CLIENT_ID,
			clientSecret: env.GOOGLE_CLIENT_SECRET,
		}),
	],
	callbacks: {
		session({ session, user, token }) {
			if (session.user) {
				session.user.id = user.id;
			}
			return session;
		},
		redirect: async ({ url, baseUrl }) => {
			const suffix = url.endsWith("?auth-redirect=true")
				? ""
				: "?auth-redirect=true";
			// Allows relative callback URLs
			if (url.startsWith("/")) return `${baseUrl}${url}${suffix}`;
			// Allows callback URLs on the same origin
			else if (new URL(url).origin === baseUrl) return `${url}${suffix}`;
			return `${baseUrl}${suffix}`;
		},
	},
	cookies: {
		csrfToken: {
			name: "next-auth.csrf-token",
			options: {
				httpOnly: true,
				sameSite: "none",
				path: "/",
				secure: true,
			},
		},
		pkceCodeVerifier: {
			name: "next-auth.pkce.code_verifier",
			options: {
				httpOnly: true,
				sameSite: "none",
				path: "/",
				secure: true,
			},
		},
	},
};

export const getApiAuthSession = async ({
	req,
	res,
}: {
	req: NextApiRequest;
	res: NextApiResponse;
}) => {
	return await getServerSession(req, res, authOptions);
};

export const getServerAuthSession = async () => {
	return await getServerSessionNext(authOptions);
};

export async function getCurrentUser() {
	const session = await getServerSession(authOptions);

	return session?.user;
}
