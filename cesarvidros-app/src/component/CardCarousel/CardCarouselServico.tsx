import React from "react";
import { Carousel, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { ServicoCard } from "../ServiceCard/ServiceCard";
import { useServico } from "../../hooks/useServico";

export const CarouselCardServico: React.FC = () => {
  const servicos = useServico();

  // Divida os serviços em grupos para o carrossel
  const chunkArray = (arr: any[], chunkSize: number) => {
    const result: any[] = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };

  // Defina quantos cartões por slide
  const cardsPerSlide = 1; // Você pode ajustar isso conforme necessário
  const groupedServicos = chunkArray(servicos, cardsPerSlide);

  return (
    <Carousel autoplay={true} autoplaySpeed={2000}>
      {groupedServicos.map((group, index) => (
        <div key={index}>
          <Row gutter={[16, 16]} justify="center">
            {group.map((servico: any) => (
              <Col xs={24} sm={24} md={12} key={servico.id_servico}>
                <Link to={"/projetos"}>
                  <ServicoCard nome={servico.servico_nome} {...servico} />
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Carousel>
  );
};