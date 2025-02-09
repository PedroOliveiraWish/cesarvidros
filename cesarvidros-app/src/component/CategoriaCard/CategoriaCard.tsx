import React from "react";
import { Card } from "antd";

import '../../styles/CategoriaCard/CategoriaCard.css'

interface Props {
  id_categoria: number;
  nome: string;
  imagem_url: string;
  descricao: string;
}

export const CategoriaCard: React.FC<Props> = (categorias) => {
  return (
    <Card
      key={categorias.id_categoria}
      title={categorias.nome}
      cover={<img alt={categorias.nome} src={categorias.imagem_url} />}
      className="categoria-card-solo"
    >
      <Card.Meta description={categorias.descricao} />
    </Card>
  );
};
