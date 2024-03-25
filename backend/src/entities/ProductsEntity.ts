import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
}
