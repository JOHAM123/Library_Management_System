import  { Model, Table, AutoIncrement, PrimaryKey, Column, AllowNull, NotEmpty } from "sequelize-typescript";
import * as sequelize from 'sequelize';
export interface BooksI {
    id?: number
    author: string
    title: string
}

@Table(
    {
        tableName: "books",
        timestamps: true
    }
)
export default class Books extends Model implements BooksI {

    @AutoIncrement
    @PrimaryKey
    @Column
    id?: number

    @AllowNull(false)
    @NotEmpty
    @Column
    author!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    title!: string;

}