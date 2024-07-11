import {z} from 'zod'

const userInfo = z.object({
    username: z.string(),
    password: z.string().min(8)
})

export default userInfo