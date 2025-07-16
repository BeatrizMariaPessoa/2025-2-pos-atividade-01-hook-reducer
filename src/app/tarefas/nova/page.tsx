"use client";
import Header from "@/components/header";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"


function NovaTarefa() {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");



    const handleSubmit = () => {

      if (!nome.trim()) {
        alert("Nome da tarefa é obrigatório!");
        return;
      }

      
      const tarefas = JSON.parse(localStorage.getItem("tarefas") || "[]");
      const novoId = tarefas.length + 1;


      
      const novaTarefa = {
        id: novoId,
        nome: nome.trim(),
        descricao: descricao.trim(),
        concluida: false,
      };



      tarefas.push(novaTarefa);
      localStorage.setItem("tarefas", JSON.stringify(tarefas));

      setNome("");
      setDescricao("");

      alert("Tarefa salva com sucesso!");
      console.log("Tarefa salva:", novaTarefa);
    };



    return (
        <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 m-3">
            <h1 className="text-2xl font-bold mb-4">Nova Tarefa</h1>
            <form onSubmit={handleSubmit}>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                    Nome da Tarefa
                </label>
                <Input
                    type="text"
                    placeholder="Digite o nome da tarefa"
                    className="w-80 mb-2"
                    onChange={(e) => setNome(e.target.value)}
                />
                <label className="block mb-2 text-sm font-medium text-gray-500">
                    Descrição da Tarefa
                </label>
                <Textarea
                    placeholder="Digite a descrição da tarefa"
                    className="mb-2 h-40 resize-none"
                    rows={6}
                    onChange={(e) => setDescricao(e.target.value)}
                />
                <div className="flex justify-between items-center">
                    <Button type="submit" className="w-32">
                        Salvar
                    </Button>
                    <Button type="button" variant="destructive" className="w-32">
                        <Link href="/tarefas" className="flex items-center gap-2">
                            <span>Cancelar</span>
                        </Link>
                    </Button>
                </div>
            </form>
        </main>
        <footer className="bg-gray-100 py-4 px-6 text-center text-sm text-gray-600">
            <p>
            GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007
            <br />
            <a href="https://fsf.org/" className="hover:text-gray-800 underline">
                Copyright (C) 2007 Free Software Foundation, Inc.
            </a>
            </p>
        </footer>
        </div>
    );
}

export default NovaTarefa;