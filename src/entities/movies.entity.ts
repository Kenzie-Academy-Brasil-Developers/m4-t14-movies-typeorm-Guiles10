import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Check } from "typeorm";

@Entity('movies')
export class Movie {

    @PrimaryGeneratedColumn('increment')
    id: number 

    @Column({type: 'varchar', length: 50, unique: true})
    name: string

    @Column({type: 'text', nullable: true})
    description?: string | null | undefined

    @Column({type: 'integer'}) 
    duration: number

    @Column({type: 'integer'})
    price: number
}