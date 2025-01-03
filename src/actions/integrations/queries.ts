"use server"

import { client } from "@/lib/prisma"

export const updateIntegraion = async (id: string, token: string, expire: Date) => {
       return await client.integrations.update({
        where: {id},
        data: {
            token,
            expiresAt: expire
        }
       })
}