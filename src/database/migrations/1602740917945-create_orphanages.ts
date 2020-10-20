import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602740917945 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // REALIZAR ALTERAÇÕES NO BANCO DE DADOS
        //CRIAR TABELA, CRIAR UM NOVO CAMPO, DELETAR ALGUM CAMPO
        await queryRunner.createTable(new Table({
        name:'orphanages',
        columns: [
                    {
                        name: 'id',
                        type:'integer',
                        unsigned:true,
                        isPrimary:true,
                        isGenerated:true,
                        generationStrategy:'increment',
                    },
                    {
                        name:'name',
                        type:'varchar',
                    },
                    {
                        name: 'latitude',
                        type:'varchar',
                    },
                    {
                        name: 'longitude',
                        type:'varchar',
                    },
                    {
                        name:'about',
                        type:'text',
                    },
                    {
                        name:'instructions',
                        type:'text',
                    },
                    {
                        name: "opening_hours",
                        type:"varchar",
                    },
                    {
                        name:'open_on_weekends',
                        type:'boolean',
                        default:false,
                    },
                ],
        }
        ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //ROWBACK DO BANCO
        //DESFAZ O QUE FOI FEITO
        await queryRunner.dropTable('orphanages');
    }

}
