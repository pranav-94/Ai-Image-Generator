import {z} from 'zod'

const userInfo = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(8)
})

export default userInfo