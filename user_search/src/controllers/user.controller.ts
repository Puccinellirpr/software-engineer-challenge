import { Request, Response } from "express"
import { findUserByName } from "../services/user/findByName"
import { findUserByUserName } from "../services/user/findByUserName"

class UserController {

    public async findByName( request : Request, response: Response) {
        try {
            const { page } = request.params
            const { count, name } = request.body
            const users = await findUserByName(name,page,count)
            return response.status(200).send({
                data:{
                    result : users.result,
                    pagination:{
                        page: Number(page),
                        total: users.count,
                    }
                },
                errors: []
            })
        } catch (error) {
            return response.status(400).send({data: {},errors: [error.message]})
        }
    }

    public async findByUsername( request : Request, response: Response) {
        try {
            const { page } = request.params
            const { count, username } = request.body
            const users = await findUserByUserName(username,page,count)
            return response.status(200).send({
                data:{
                    result : users.result,
                    pagination:{
                        page: Number(page),
                        total: users.count,
                    }
                },
                errors: []
            })
        } catch (error) {
            return response.status(400).send({data:{},errors: [error.message]})
        }
    }
}

export default new UserController()