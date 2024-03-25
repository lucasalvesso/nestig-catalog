import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("categories")
export class CategoriesEntity {
  constructor(data: Partial<CategoriesEntity>) {
    Object.assign(this, data);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
