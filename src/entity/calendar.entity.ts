import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Calendar {
    @PrimaryColumn('uuid')
    id: number;

    @Column({length: 200})
    title: string;

    @Column('text')
    description: string;

    @Column('date')
    date: string;

    @Column('time')
    start_date: string;

    @Column('time')
    end_date: string;

    @CreateDateColumn()
    created_at: string;

    @Column('boolean')
    active: boolean;
}