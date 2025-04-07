import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  OneToMany,
} from 'typeorm';
import { Report } from 'src/reports/report.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserting user with id: ', this.id);
  }

  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];

  @AfterUpdate()
  logUpdate() {
    console.log('Update user with id: ', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed user with id: ', this.id);
  }
}
