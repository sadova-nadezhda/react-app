import React from 'react'

import About from "../AboutCard/AboutCard";
import Button from "../../Button/Button";

import { aboutCards } from "../../../utils/about";

export default function AboutSetion() {
  const handleClick2 = () => {
    console.log("button clicked");
  };

  return (
    <section className="section about">
    <div className="container">
      <div className="about__container">
        <h1 className="about__title title">О компании</h1>
        <div className="about__desc desc">
          <p>
            Мы молодая и динамично развивающуюся компанию,
            специализирующуюся в области международной логистики. Наш
            коллектив объединяет высококвалифицированных профессионалов,
            стремящихся обеспечивать клиентам непревзойденный уровень
            сервиса на каждом этапе сотрудничества. Основной спектр наших
            услуг охватывает комплексные транспортно-логистические решения
            с применением стратегии «от двери до двери».
          </p>
        </div>
        <div className="about__cards">
          {aboutCards.map((card, index) => (
            <About key={index} {...card} />
          ))}
        </div>
        <Button onClick={handleClick2}>Оставить заявку</Button>
      </div>
    </div>
  </section>
  )
}
