import { Exclude } from "class-transformer";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Contact } from "./contact.entity";
import { v4 as uuid } from "uuid";

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

  @Column({ length: 14, unique: true })
  telephone: string;

  @Column()
  registration_date: Date;

  @OneToMany(() => Contact, (contacts) => contacts.client, {
    cascade: true,
  })
  contacts: Contact[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Client };
