import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Client } from "./client.entity";
import { v4 as uuid } from "uuid";

@Entity("contact")
class Contact {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 60 })
  name: string;

  @Column({ length: 60, unique: true })
  email: string;

  @Column({ length: 14, unique: true })
  telephone: string;

  @Column()
  registration_date: Date;

  @Column()
  clientId: string;

  @ManyToOne(() => Client, (client) => client.contacts, {
    onDelete: "CASCADE",
  })
  client: Client;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Contact };
