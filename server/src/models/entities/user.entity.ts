import { Expose } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BeforeInsert} from 'typeorm';

@Entity('Users')
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    @Expose()
    id: string;
    
    @Column()
    @Expose()
    firstName: string;

    @Column({ type: 'bigint' })
    @Expose()
    user_id: number; 

    @Column({nullable: true})
    @Expose()
    lastName: string;

    @Column({nullable: true})
    @Expose()
    username: string;

    @CreateDateColumn()
    @Expose()
    createdAt: Date;

    @UpdateDateColumn()
    @Expose()
    updatedAt: string;
}