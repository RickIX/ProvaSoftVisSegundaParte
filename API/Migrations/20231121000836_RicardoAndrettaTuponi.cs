﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class RicardoAndrettaTuponi : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Categorias",
                columns: table => new
                {
                    CategoriaId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nome = table.Column<string>(type: "TEXT", nullable: true),
                    CriadoEm = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categorias", x => x.CategoriaId);
                });

            migrationBuilder.CreateTable(
                name: "Tarefas",
                columns: table => new
                {
                    TarefaId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Titulo = table.Column<string>(type: "TEXT", nullable: true),
                    Descricao = table.Column<string>(type: "TEXT", nullable: true),
                    CriadoEm = table.Column<DateTime>(type: "TEXT", nullable: false),
                    CategoriaId = table.Column<int>(type: "INTEGER", nullable: false),
                    Status = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tarefas", x => x.TarefaId);
                    table.ForeignKey(
                        name: "FK_Tarefas_Categorias_CategoriaId",
                        column: x => x.CategoriaId,
                        principalTable: "Categorias",
                        principalColumn: "CategoriaId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Categorias",
                columns: new[] { "CategoriaId", "CriadoEm", "Nome" },
                values: new object[] { 1, new DateTime(2023, 11, 21, 21, 8, 36, 818, DateTimeKind.Local).AddTicks(8172), "Trabalho" });

            migrationBuilder.InsertData(
                table: "Categorias",
                columns: new[] { "CategoriaId", "CriadoEm", "Nome" },
                values: new object[] { 2, new DateTime(2023, 11, 22, 21, 8, 36, 818, DateTimeKind.Local).AddTicks(8176), "Estudos" });

            migrationBuilder.InsertData(
                table: "Categorias",
                columns: new[] { "CategoriaId", "CriadoEm", "Nome" },
                values: new object[] { 3, new DateTime(2023, 11, 23, 21, 8, 36, 818, DateTimeKind.Local).AddTicks(8177), "Lazer" });

            migrationBuilder.InsertData(
                table: "Tarefas",
                columns: new[] { "TarefaId", "CategoriaId", "CriadoEm", "Descricao", "Status", "Titulo" },
                values: new object[] { 1, 1, new DateTime(2023, 11, 27, 21, 8, 36, 818, DateTimeKind.Local).AddTicks(8246), "Terminar relatório para reunião", "Não iniciada", "Concluir relatório" });

            migrationBuilder.InsertData(
                table: "Tarefas",
                columns: new[] { "TarefaId", "CategoriaId", "CriadoEm", "Descricao", "Status", "Titulo" },
                values: new object[] { 2, 2, new DateTime(2023, 11, 23, 21, 8, 36, 818, DateTimeKind.Local).AddTicks(8248), "Preparar-se para a aula de Angular", "Não iniciada", "Estudar Angular" });

            migrationBuilder.InsertData(
                table: "Tarefas",
                columns: new[] { "TarefaId", "CategoriaId", "CriadoEm", "Descricao", "Status", "Titulo" },
                values: new object[] { 3, 3, new DateTime(2023, 12, 4, 21, 8, 36, 818, DateTimeKind.Local).AddTicks(8250), "Dar um passeio relaxante no parque", "Não iniciada", "Passeio no parque" });

            migrationBuilder.CreateIndex(
                name: "IX_Tarefas_CategoriaId",
                table: "Tarefas",
                column: "CategoriaId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Tarefas");

            migrationBuilder.DropTable(
                name: "Categorias");
        }
    }
}