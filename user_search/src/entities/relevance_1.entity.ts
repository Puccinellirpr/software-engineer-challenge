import { Entity, OneToOne, PrimaryColumn } from "typeorm";
import { Users} from "./users.entity";

@Entity()
export class Relevance_1 {
    @PrimaryColumn()
    @OneToOne(()=>Users, user => user.id)
    id: string
}