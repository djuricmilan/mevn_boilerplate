import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Hello{
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  helloMessage!: string;

  @Column()
  author!: string;
}