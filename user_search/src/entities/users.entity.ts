import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Users {
    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    username: string
}