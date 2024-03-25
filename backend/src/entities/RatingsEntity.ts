import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("ratings")
export class RatingsEntity {
  constructor(data: Partial<RatingsEntity>) {
    Object.assign(this, data);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "real" })
  rate: number;

  @Column()
  count: number;
}
