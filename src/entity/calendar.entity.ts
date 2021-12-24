import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Calendar {
    @PrimaryColumn('uuid')
    id: string;

    @Column({length: 200})
    title: string;

    @Column('text')
    description: string;

    @Column('date')
    date: string;

    @Column()
    start_time: number;

    @Column()
    end_time: number;

    @Column()
    created_at: string;

    @Column('boolean')
    active: boolean;
}