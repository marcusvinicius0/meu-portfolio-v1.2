import React, {useState} from 'react';


import {
  Nav, Menu, Intro, Ul, Li, Aa, A, H1, Job, Resume, GHlogo, Universe, Galaxy,
  AboutMe, H2, Info, Projetos, FirstLine, H3, Container, SecondLine,
  FirstProject, PrintFirstProject, Strong, P, GHlogo1, SecondProject, PrintSecondProject,
  ThirdProject, PrintThirdProject, FourthProject, PrintFourthProject, FifthProject,
  PrintFifthProject, SixthProject, PrintSixthProject, SeventhProject, PrintSeventhProject,
  EigthProject, PrintEigthProject, NinthProject, PrintNinthProject, ThirdLine, Skills, H4, Time,
  ReactImg, JavaScriptImg, CssImg, HtmlImg,
  GitImg, Hab, ReactXP, JSXP, CSSXP, HTMLXP, GITXP, LinhaSeparação,
  Contato, H5, LinkedinLink, WPPLink, GMAILLink, LINK, Contact, FifthLine,
  Developer,


} from './style.js'

import Curriculo from './assets/curriculo.pdf'
import PortfolioLogo from './assets/nano-tecnologia (1).png'
import GitHubLogo from './assets/githublogo.png'
import Man from './assets/Looper BG.svg'
import ConvertorProjectPrint from './assets/print-convertor.png'
import MyPortfolioProjectPrint from './assets/portfolioprint.png'
import RegisterProject from './assets/cadastroprojeto.png'
import PS5Project from './assets/ps5lpage.png'
import NikeProject from './assets/nikelandingpage.png'
import JordanLandingProject from './assets/landpgprint.png'
import BurguerOrder from './assets/pedidolanches.png'
import LoginProject from './assets/loginprojectprint.png'
import FormularyProject from './assets/sfor.png'
import ReactLogo from './assets/atom.png'
import JavaScriptLogo from './assets/js.png'
import CssLogo from './assets/css3.png'
import HtmlLogo from './assets/html5.png'
import GitLogo from './assets/git.png'
import In from './assets/in.png'
import WhatsAppLogo from './assets/whatsapplogo.png'
import GmailLogo from './assets/gmaillogo.png'
import MenuImage from './assets/menu-aberto.png'



function App() {
  
  const [menu, setMenu] = useState([]);

  

  const data = new Date();
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();

  const dataAtual = dia + '/' + mes + '/' + ano;


  function MenuList() {
 
    setMenu([menu])
   console.log("oii")
  }


  return (
    <div>
      <Nav>

        <Aa src={PortfolioLogo}></Aa>

        <Ul>
          <Li><A id='inicio' href='#home'>Início</A></Li>
          <Li><A id='aboutme' href='#projetos'>Projetos</A></Li>
          <Li><A id='skills' href='#habilidades'>Habilidades</A></Li>
        </Ul>
      </Nav>


      <Menu src={MenuImage} onClick={MenuList}></Menu>


      <Intro>

        <H1 id="home">Olá, eu sou o<br /> Marcus!</H1>
        <Job>Desenvolvedor Front-end Jr ▪ React | JavaScript </Job>
        <Resume href={Curriculo} download><strong>Download CV</strong></Resume>
        <div>
          <a href="https://github.com/marcusvinicius0" target="_blank"><GHlogo src={GitHubLogo} alt="github-icon" /></a>
        </div>
      </Intro>

      <Universe>
        <Galaxy src={Man} />
      </Universe>

      <AboutMe>
        <H2>Sobre mim</H2>
        <Info>Tenho 22 anos e sou um cara que é apaixonado por esse universo incrível do desenvolvimento.
           Foco em fazer projetos que são mais próximos da realidade do mercado de trabalho, como:
          landing pages, formulários, interfaces de login, cadastro de usuários. Faço parte do bootcamp
          de programação chamado DevClub, onde aprendemos tanto o lado do cliente quanto o do servidor.  No front-end passamos por HTML5, CSS3, JavaScript e React.js. Já no back-end
          passamos por node.js, API's e Sequelize. </Info>
        <FirstLine></FirstLine>
      </AboutMe>

      <Projetos id='projetos'>
        <H3>Projetos</H3>
        <Container>
          <SecondLine></SecondLine>
          <FirstProject>
            <a href='https://github.com/marcusvinicius0/Cadastro-de-Usuarios-FRONTEND' target="_blank" rel="noreferrer"> <PrintFirstProject src={RegisterProject}>
            </PrintFirstProject></a> <P>Projeto Cadastro de Usuários, <br /> <Strong>desenvolvido com React e node.js.</Strong></P>
            <a href='https://github.com/marcusvinicius0/Cadastro-de-Usuarios-FRONTEND' target="_blank" rel="noreferrer"><GHlogo1 src={GitHubLogo} alt="github-icon" /></a>
          </FirstProject>

          <SecondProject><a href='https://meuportfoliov3.netlify.app/' target="_blank" rel="noreferrer"><PrintSecondProject src={MyPortfolioProjectPrint}></PrintSecondProject></a>
            <P> Projeto Meu Portfolio, <br /> <Strong>desenvolvido com React.</Strong></P>
            <a href='https://github.com/marcusvinicius0/Meu-Portfolio-v1.2' target="_blank" rel="noreferrer"><GHlogo1 src={GitHubLogo} alt="github-icon" /></a></SecondProject>

          <ThirdProject><a href='https://github.com/marcusvinicius0/Pedido-de-lanches' target="_blank" rel="noreferrer"><PrintThirdProject src={BurguerOrder}></PrintThirdProject></a>
            <P> Projeto Pedido de lanches, <br />
              <Strong>desenvolvido
                com React e node.js.</Strong></P>
            <a href='https://github.com/marcusvinicius0/Pedido-de-lanches' target="_blank" rel="noreferrer"><GHlogo1 src={GitHubLogo} alt="github-icon" /></a></ThirdProject>

          <FourthProject><a href='https://marcusvinicius0.github.io/playstation-project/' target="_blank" rel="noreferrer"><PrintFourthProject src={PS5Project}></PrintFourthProject></a>
            <P> Projeto Landing Page DualShock, <br /> <Strong>desenvolvido com HTML, CSS e JS.</Strong></P>
            <a href='https://github.com/marcusvinicius0/playstation-project' target="_blank" rel="noreferrer"><GHlogo1 src={GitHubLogo} alt="github-icon" /></a></FourthProject>

          <FifthProject><a href='https://marcusvinicius0.github.io/Landing-Page-Nike/' target="_blank" rel="noreferrer"><PrintFifthProject src={NikeProject}></PrintFifthProject></a>
            <P> Projeto Landing Page Nike, <br /> <Strong>desenvolvido com HTML, CSS e JS.</Strong></P>
            <a href='https://github.com/marcusvinicius0/Landing-Page-Nike' target="_blank" rel="noreferrer"><GHlogo1 src={GitHubLogo} alt="github-icon" /></a></FifthProject>

          <SixthProject><a href='https://marcusvinicius0.github.io/Landing-Page-Jordan/' target="_blank" rel="noreferrer"><PrintSixthProject src={JordanLandingProject}></PrintSixthProject></a>
            <P> Projeto Landing Page Jordan, <br /> <Strong>desenvolvido com HTML e CSS.</Strong></P>
            <a href='https://github.com/marcusvinicius0/Landing-Page-Jordan' target="_blank" rel="noreferrer"><GHlogo1 src={GitHubLogo} alt="github-icon" /></a></SixthProject>

          <SeventhProject><a href='https://marcusvinicius0.github.io/convertor-money-API/' target="_blank" rel="noreferrer"><PrintSeventhProject src={ConvertorProjectPrint}></PrintSeventhProject></a>
            <P>Projeto Conversor consumindo API, <br /> <Strong>desenvolvido com JS, CSS e HTML.</Strong></P>
            <a href='https://github.com/marcusvinicius0/convertor-money-API' target="_blank" rel="noreferrer"><GHlogo1 src={GitHubLogo} alt="github-icon" /></a></SeventhProject>

          <EigthProject><a href='https://marcusvinicius0.github.io/Login-Interface-project/' target="_blank" rel="noreferrer"><PrintEigthProject src={LoginProject}></PrintEigthProject></a>
            <P>Projeto Interface de Login, <br /> <Strong>desenvolvido com HTML e CSS.</Strong></P>
            <a href='https://github.com/marcusvinicius0/Login-Interface-project' target="_blank" rel="noreferrer"><GHlogo1 src={GitHubLogo} alt="github-icon" /></a></EigthProject>

          <NinthProject><a href='https://marcusvinicius0.github.io/Formulario-de-pesquisa/' target="_blank" rel="noreferrer"><PrintNinthProject src={FormularyProject}></PrintNinthProject></a>
            <P> Projeto Formulário de pesquisa, <br /> <Strong>desenvolvido com HTML e CSS.</Strong></P>
            <a href='https://github.com/marcusvinicius0/Formulario-de-pesquisa' target="_blank" rel="noreferrer"><GHlogo1 src={GitHubLogo} alt="github-icon" /></a></NinthProject>
        </Container>
        <ThirdLine></ThirdLine>
      </Projetos>

      <Skills id='habilidades'>
        <H4>Skills</H4>
        <Time>Tempo de experiência:</Time>
      </Skills>
      <Hab>

        <div className='first-skill'>
          <ReactImg src={ReactLogo}></ReactImg><ReactXP>03 semanas experiência ({dataAtual});</ReactXP>
        </div>
        <div className='second-skill'>
          <JavaScriptImg src={JavaScriptLogo}></JavaScriptImg><JSXP>03 meses experiência ({dataAtual});</JSXP>
        </div>
        <div className='third-skill'>
          <CssImg src={CssLogo}></CssImg><CSSXP>04 meses experiência ({dataAtual});</CSSXP>
        </div>
        <div className='fourth-skill'>
          <HtmlImg src={HtmlLogo}></HtmlImg><HTMLXP>04 meses experiência ({dataAtual});</HTMLXP>
        </div>
        <div className='fifth-skill'>
          <GitImg src={GitLogo}></GitImg><GITXP>03 meses experiência ({dataAtual});</GITXP>
        </div>
      </Hab>

      <LinhaSeparação>
      </LinhaSeparação>

      <Contato>
        <H5 id='contato'>Contato</H5>
        <Contact>
          <LinkedinLink src={In}></LinkedinLink><LINK href='https://www.linkedin.com/in/marcusviniciusbeghelisantos/' target="_blank">www.linkedin.com/in/marcusviniciusbeghelisantos</LINK>
          <WPPLink src={WhatsAppLogo}></WPPLink><LINK href="https://wa.me/5534988685919" target='_blank'>34 98868-5919</LINK>
          <GMAILLink src={GmailLogo}></GMAILLink><LINK href="mailto:marcusvbegheli@gmail.com" target="_blank">marcusvbegheli@gmail.com</LINK>
        </Contact>
      </Contato>

      <footer>
        <FifthLine></FifthLine>
        <Developer>Desenvolvido por Marcus Vinícius | 2022.</Developer>
      </footer>



    </div>
  );
}

export default App;