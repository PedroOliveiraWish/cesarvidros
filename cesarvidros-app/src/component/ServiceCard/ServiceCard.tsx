import React, { useState, useEffect } from "react";
import { Card } from "antd";

import "../../styles/ServicoCard/ServicoCard.css";

interface Props {
  id_servico: number;
  nome: string;
  imagem_url: string;
  descricao: string;
  categoria_nome: string;
  sub_categoria_nome: string | null;
}

export const ServicoCard: React.FC<Props> = (servicos) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsExpanded(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Overlay when expanded */}
      {isExpanded && <div className="overlay" onClick={() => setIsExpanded(false)}></div>}

      <div className={`servico-card ${isExpanded ? "expanded" : ""}`} onClick={() => setIsExpanded(true)}>
        <Card
          title={servicos.nome}
          cover={<img alt={servicos.nome} src={servicos.imagem_url} />}
          extra={servicos.categoria_nome}
          className="card-content"
        >
          <Card.Meta description={servicos.descricao} className="ant-card-meta-description" />
        </Card>
      </div>
    </>
  );
};
