import { Request, Response } from "express"
import bcrypt from "bcryptjs"
import "dotenv"
import jwt from "jsonwebtoken"
import { handleFailRequest, handleSuccessRequest } from "../utils/utils"

class AuthController {
    public login(request:Request,response:Response){
        const { username, password } = request.body
        
        const valid = bcrypt.compareSync(password,process.env.MOCK_PASSWORD)
        if(valid && username === process.env.MOCK_USERNAME){
            const token = jwt.sign({username}, process.env.JWT_SECRET,{
                expiresIn: '1d'
            })
            response.status(200).send(handleSuccessRequest({token}))
        }else{
            response.status(400).send(handleFailRequest(["Verifique as informações digitadas"]))
        }
    }
}

export default new AuthController()