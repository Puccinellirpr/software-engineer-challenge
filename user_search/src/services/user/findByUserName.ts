import { getRepository, Like } from "typeorm"
import { Users } from "../../entities/users.entity"

const findUserByUserName = async (username: string="",page:string="1",usersPerPage:number=15) => {
    const repository = getRepository(Users)
    
    const [result, count] = await repository.createQueryBuilder("user")
    .leftJoinAndSelect("relevance_1","r1","r1.id = user.id")
    .leftJoinAndSelect("relevance_2","r2","r2.id = user.id")
    .where({
        username: Like(`%${username}%`)
    })
    .take(usersPerPage)
    .skip((Number(page) - 1 ) * usersPerPage)
    .orderBy("r1.id")
    .addOrderBy("r2.id")
    .addOrderBy("user.id")
    .getManyAndCount()

    return { result, count }
}

export {findUserByUserName}