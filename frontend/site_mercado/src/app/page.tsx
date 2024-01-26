"use client";

import { api } from "@/services/api";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  preco: number;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  async function carregarProdutos() {
    try {
      const response = await api.get("products");
      setProducts(response.data);

    } catch(error) {
      console.log(error);
    }
  }

  async function adicionarProdutos() {
    try {
      const response = await api.post("products", {
        name: "Laranja",
        preco: 5,
      });
      
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <main>
      <h1 className="flex justify-center font-semibold py-4">Cadastro de Produtos</h1>
      <button onClick={carregarProdutos} className="border px-4 py-2">
        Carregar produtos
      </button>

      <button onClick={adicionarProdutos} className="border px-4 py-2">
        Adicionar produto
      </button>

      <ul>
        {products.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </main>
  );
}
