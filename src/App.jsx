import React, { useState } from "react";

import Header from "./components/Header/Header";
import AboutSetion from "./components/About/AboutSection/AboutSetion";
import ServicesSection from "./components/Services/ServicesSection";

import "./App.css";
import TabSection from "./components/TabSection/TabSection";
import FeedbackSection from "./components/Feedback/FeedbackSection";
import EffectSection from "./components/Effects/EffectSection";

export default function App() {
  const [tab, setTab] = useState('effect')

  return (
    <>
      <Header />
      <main>
        <TabSection active={tab} onChange={(current) => setTab(current)} />

        {tab === 'main' && (
          <>
            <ServicesSection />
            <AboutSetion />
          </>
        )}

        {tab === 'feedback' && <FeedbackSection />}

        {tab === 'effect' && <EffectSection />}

      </main>
    </>
  );
}

// export default function App() {
//   // const stateArray = useState('Нажми на таб')
//   // const content = stateArray[0]
//   // const setContent = stateArray[1]

//   const [contentType, setContentType] = useState(null);

//   // console.log('App Component Render')

//   const handleClick = (type) => {
//     // console.log('button clicked', type)
//     setContentType(type);
//   };

//   // let tabContent = null

//   // if(contentType) {
//   //   tabContent = <div className="services__content">{services[contentType]}</div>
//   // } else {
//   //   tabContent = <div>Нажми на таб</div>
//   // }

//   const handleClick2 = () => {
//     console.log("button clicked");
//   };

//   return (
//     <>
//       <Header />
//       <main>
//         <section className="section services">
//           <div className="container">
//             <div className="services__container">
//               <h2 className="services__title title">Услуги</h2>
//               <div className="services__tabs">
//                 <div className="services__nav">
//                   <Button isActive={contentType=="services1"} onClick={() => handleClick("services1")}>
//                     Услуга 1
//                   </Button>
//                   <Button isActive={contentType=="services2"} onClick={() => handleClick("services2")}>
//                     Услуга 2
//                   </Button>
//                   <Button isActive={contentType=="services3"} onClick={() => handleClick("services3")}>
//                     Услуга 3
//                   </Button>
//                 </div>

//                 {/* { contentType ? (
//                   <div className="services__content">
//                     {services[contentType]}
//                   </div>
//                 ) : (
//                   <div>Нажми на таб</div>
//                 ) } */}

//                 {/* {!contentType ? <div>Нажми на таб</div> : null }
//                 {contentType ? <div className="services__content">{services[contentType]}</div> : null } */}

//                 {!contentType && <div>Нажми на таб</div>}
//                 {contentType && <div className="services__content">{services[contentType]}</div>} 

//                 {/* {tabContent} */}

//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="section about">
//           <div className="container">
//             <div className="about__container">
//               <h1 className="about__title title">О компании</h1>
//               <div className="about__desc desc">
//                 <p>
//                   Мы молодая и динамично развивающуюся компанию,
//                   специализирующуюся в области международной логистики. Наш
//                   коллектив объединяет высококвалифицированных профессионалов,
//                   стремящихся обеспечивать клиентам непревзойденный уровень
//                   сервиса на каждом этапе сотрудничества. Основной спектр наших
//                   услуг охватывает комплексные транспортно-логистические решения
//                   с применением стратегии «от двери до двери».
//                 </p>
//               </div>
//               <div className="about__cards">
//                 {/* <About title={aboutCards[0].title} />
//                 <About title={aboutCards[1].title} />
//                 <About title={aboutCards[2].title} /> */}

//                 {/* <About {...aboutCards[0]} />
//                 <About {...aboutCards[1]} />
//                 <About {...aboutCards[2]} /> */}

//                 {aboutCards.map((card, index) => (
//                   <About key={index} {...card} />
//                 ))}
//               </div>
//               <Button onClick={handleClick2}>Оставить заявку</Button>
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }
