/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth, { AuthOptions, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import bcrypt from 'bcryptjs'

const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        Credentials({
            credentials: {
                password: { label: 'Password', type: 'password' },
                email: { label: 'Email', type: 'email' },
            },
            authorize: async (credentials) => {
                try {
                    const user = await prisma.user.findUnique({
                        where: {
                            email: credentials?.email
                        }
                    });

                    if (!user) {
                        throw new Error("No user found!")
                    }

                    const isPasswordCorrect = await bcrypt.compare(
                        credentials?.password as string,
                        user.hashedPassword
                    );

                    if (!isPasswordCorrect) {
                        throw new Error('Incorrect Password!')
                    }

                    return user;
                } catch (error) {
                    throw new Error((error as Error).message);
                }
            },
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
    },
    callbacks: {
        async session({ session, token }: { session: any, token: JWT }) {
            session.user = token.user;
            return session;
        },
        async jwt({ token, user }: { token: JWT, user?: User }) {
            if (user) {
                token.user = user;
            }
            return token;
        },
    },
    debug: process.env.NODE_ENV === 'development',
};

const handler = NextAuth(authOptions as AuthOptions);
export { handler as POST, handler as GET };
