import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { RatingsEntity } from "./RatingsEntity";

@Entity("products")
export class ProductsEntity {
  constructor(data: Partial<ProductsEntity>) {
    Object.assign(this, data);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  productDescription: string;

  @Column({ type: "real" })
  price: number;

  @Column()
  imageUrl: string;

  @Column()
  categoryId: number;

  @Column()
  ratingId: number;

  @OneToOne(() => RatingsEntity, (rating) => rating.id)
  @JoinColumn()
  rating: RatingsEntity;
}
