import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column("varchar", {length: 255})
    email: string;

    @Column("text")
    password: string;

    constructor(email, password){
        this.email = email;
        this.password = password;
    }

}
