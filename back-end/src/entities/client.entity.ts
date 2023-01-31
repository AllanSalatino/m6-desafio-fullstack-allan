import { Exclude } from "class-transformer";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity("client")
class Client {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 60 })
  name: string;

  @Column({ length: 60, unique: true })
  email: string;

  @Column({ length: 120 })
  @Exclude()
  password: string;

  @Column({ nullable: true })
  telephone: string;

  @Column()
  registration_date: Date;

  //@OneToMany((type) => Project, (projects) => projects.user, {
  //  eager: true,
  //})
  //project: Project;
}

export { Client };
