
import styled from "styled-components"


export const Menu = styled.img`
width: 25px;
margin-left: 73vw;
margin-top: 1vw;
position: relative;
z-index: 1;
cursor: pointer;
display: none;

@media (max-width: 699px){
    display: block;
    margin-top: -15vw;
    margin-left: 400px;
    width: 8vw;
    position: fixed;
}
`

export const Nav = styled.div`
    display: flex;
    z-index: 1;
    position: fixed;
   margin-top: 1vw;
   margin-left: -2.3vw;
`
export const Aa = styled.img`
color: #0F98AF;
width: 7vw;
height: 6vh;
padding-left: 3vw;

@media (min-width: 950px) and (max-width: 1115px){
    width: 8vw;
}

@media (min-width: 900px) and (max-width: 949px){
    width: 8.2vw;
}

@media (min-width: 850px) and (max-width: 899px){
    width: 8.2vw;
}

@media (min-width: 800px) and (max-width: 849px){
    width: 8.6vw;
}

@media (min-width: 750px) and (max-width: 799px){
    width: 8.6vw;
}

@media (min-width: 600px) and (max-width: 749px){
    width: 10vw;
}

@media (min-width: 550px) and (max-width: 599px){
    width: 10vw;
}

@media (min-width: 500px) and (max-width: 549px){
    width: 12vw;
}

@media (max-width: 499px){
    width: 14vw;
    height: 6vh ;
    margin-top: -17vw;
    margin-left: 1vw;
}
`

export const Ul = styled.ul`
display: flex;
flex-direction: row;
gap: 30px;
margin-left: 73vw;
padding-top: 16px;

@media (min-width: 1050px) and (max-width: 1115px){
margin-left: 67vw;
}

@media (min-width: 950px) and (max-width: 1049px){
    margin-left: 65vw;
}

@media (min-width: 900px) and (max-width: 949px){
    margin-left: 60vw;
}

@media(min-width: 850px) and (max-width: 899px){
    margin-left: 60vw;
}

@media(min-width: 800px) and (max-width: 849px){
    margin-left: 59vw;
}

@media (min-width: 700px) and (max-width: 799px){
    margin-left: 50vw;
}

@media (max-width: 699px){
    display: none;
}
`

export const Li = styled.li`
    list-style-type: none;
`

export const A = styled.a`
font-size: 19px;
color: whitesmoke;
cursor: pointer;
text-decoration: none;
    &:hover {
    transition: color 0.2s;
    color: #0F98AF;
}
`;

export const Intro = styled.div`
@media(min-width: 1050px) and (max-width:1115px){
  margin-left: -8vw;
  }

@media(min-width: 950px) and (max-width: 1049px){
    margin-left: -8vw;
}

@media(min-width: 900px) and (max-width: 949px){
    margin-left: -7vw;
}

@media(min-width: 850px) and (max-width: 899px){
    margin-left: -6vw;
}

@media (min-width: 800px) and (max-width: 849px){
    margin-left: -6vw;
}

@media (min-width: 600px) and (max-width: 799px){
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin-left: -15vw;
}

@media (min-width: 550px) and (max-width: 599px){
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin-left: -15vw;
}

@media (min-width: 500px) and (max-width: 549px){
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin-left: -15vw;
}

@media (max-width: 499px){
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin-left: -15vw;
    margin-top: 20vw;
}
`

export const H1 = styled.h1`
padding-top: 17vw;
padding-left: 10vw;
font-size: 36px;
font-style: normal;
color: #F9F9F9;
`

export const Job = styled.p`
color: white;
font-size: 18px;
font-weight: 500;
margin-left: 137px;
margin-top: 18px;

 @media (min-width: 900px) and (max-width: 1115px){
     margin-left: 10vw;
 }

 @media (min-width: 850px) and (max-width: 899px){
     margin-left: 10vw;
}

@media (min-width: 800px) and (max-width: 849px){
    margin-left: 10vw;
}

@media (max-width: 499px){
    margin-left: 13vw;
}
`

export const Resume = styled.a `
background-color:#0F98AF;
width: 143px;
height: 42px;
color: white;
font-size: 14px;
position: absolute;
text-decoration: none;
cursor: pointer;
margin-top: 3vw;
margin-left: 10vw;
padding: 12px;
text-align: center;
border-radius: 10vw;

@media (min-width: 700px) and (max-width: 799px){
    margin-top: 36vw;
}

@media (min-width: 650px) and (max-width: 699px){
    margin-top: 39vw;
}

@media (min-width: 600px) and (max-width: 649px){
    margin-top: 38vw;
}

@media (min-width: 550px) and (max-width: 599px){
    margin-top: 40vw;
}

@media (min-width: 500px) and (max-width: 549px){
    margin-top: 47.5vw;
}

@media (max-width: 499px){
    margin-top: 51.5vw;
    margin-left: -9vw;
}
`

export const GHlogo = styled.img`
width: 46px;
height: 40px;
margin-left: 22vw;
margin-top: 3.2vw;

@media (min-width: 950px) and (max-width: 1115px){
     margin-left: 27vw;
 }

@media (min-width: 900px) and (max-width: 949px){
    margin-left: 30vw;
}

@media (min-width: 850px) and (max-width: 899px){
    margin-left: 30vw;
}

@media (min-width: 800px) and (max-width: 849px){
    margin-left: 30vw;
}

@media (min-width: 750px) and (max-width:799px){
    margin-left: 40vw;
}

@media (min-width: 700px) and (max-width: 749px){
    margin-left: 48vw;
    margin-top: 25px;
}

@media (min-width:650px) and (max-width: 699px){
    margin-left: 43vw;
    margin-top: 30px;
}

@media (min-width: 600px) and (max-width: 649px){
    margin-left: 43vw;
}

@media (min-width: 550px) and (max-width: 599px){
    margin-left: 46vw;
}

@media (min-width: 500px) and (max-width: 549px){
    margin-left: 54vw;
    margin-top: 30px;
}

@media (max-width: 499px){
    margin-left: 58vw;
    margin-top: 27px;
}
`

export const Universe = styled.div`
display: flex;
justify-content: flex-end;
`

export const Galaxy = styled.img `
margin-top: -40vw;
opacity: 0.7;
width: 80vw;
z-index: -1;

@media (min-width: 600px) and (max-width: 800px){
height: 1600px;
width: 900px;
margin-top: -100vw;
opacity: 0.4;
}

@media (min-width: 550px) and (max-width: 599px){
height: 1300px;
width: 900px;
margin-top: -90vw;
opacity: 0.4;
}

@media (min-width: 500px) and (max-width: 549px){
height: 1200px;
width: 800px;
margin-top: -90vw;
opacity: 0.4;
}

@media  (max-width: 499px){
height: 1200px;
width: 800px;
margin-top: -135vw;
opacity: 0.3;
}
`

export const AboutMe = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1vw;
    margin-left: 5vw;

    @media (min-width: 600px) and (max-width: 800px){
        margin-top: -55vw;
        margin-left: 2vw;
    }

    @media (min-width: 550px) and (max-width: 599px){
        margin-top: -55vw;
        margin-left: 2vw;
    }
`

export const H2 = styled.h2`
font-size: 45px;
color:#0F98AF;

@media (min-width: 600px) and (max-width: 799px){
    text-align: center;
}

@media (min-width: 550px) and (max-width: 599px){
    text-align: center;
    margin-top: 150px;
}

@media (min-width: 500px) and (max-width: 549px){
    text-align: center;
    margin-top: -150px;
}

@media (max-width: 499px){
    text-align: center;
    margin-top: -230px;
    margin-left: -6vw;
}
`

export const Info = styled.p`
color: #ffffff; 
font-size: 18px;
font-weight: 500;
padding-top: 20px;

@media (min-width: 700px) and (max-width: 800px){
    font-size: 16px;
    text-align:left;
}

@media (min-width: 650px) and (max-width: 699px){
    font-size: 16px;
    text-align:left;
}

@media (min-width: 600px) and (max-width: 649px){
    font-size: 16px;
    text-align:left;
}


@media (min-width: 550px) and (max-width: 599px){
    font-size: 16px;
    text-align:left;
}

@media (max-width: 499px){
    font-size: 14px;
    margin-left: -3.8vw;
    text-align:center ;
}
`

export const FirstLine = styled.hr`
margin-top: 1vw;
opacity: 0.9;
color: gray;
width: 90%;
border: 2px solid #0F98AF;
border-end-end-radius: 8px;
border-start-start-radius: 8px;

@media(min-width: 950px) and (max-width: 1115px){
    width: 60vw;
}

@media(min-width: 900px) and (max-width: 949px){
    width: 70vw;
}

@media(min-width: 850px) and (max-width: 899px){
    width: 75vw;
}

@media (min-width: 800px) and (max-width: 849px){
    width: 75vw;
}

@media (min-width: 600px) and (max-width: 799px){
    width: 98%;
}

@media (min-width: 550px) and (max-width: 599px){
    width: 98%;
}

@media (min-width: 500px) and (max-width: 549px){
    width: 98%;
}

@media (max-width: 499px){
    width: 98%;
}
`

export const Projetos = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

`

export const H3 = styled.h3`
    font-size: 45px;
    margin-top: 80px;
    color: #0F98AF;
    text-align: center;
`

export const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
gap: 3vw;

@media (max-width: 499px){
    gap: 10vw;
}
`

export const SecondLine = styled.hr`
margin-top: 1vw;
opacity: 0.5;
border: 1px solid #0F98AF;
width: 90vw;
`

export const FirstProject = styled.div`
width: 315px;
height: 340px;
background: black;
box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
color: white;
text-align: center;
font-size: 15px;
&:hover {
    transition: 0.2s;
}
`

export const PrintFirstProject = styled.img`
width: 315px;
height: 292px;
cursor: pointer;

`

export const P = styled.p`
    text-align: start;
    padding-top: 0.5vw;
    padding-left: 1vw;
`

export const Strong = styled.strong`
color:#0F98AF;
`

export const GHlogo1 = styled.img`
width: 3vw;
height: 5vh;
position: absolute;
margin-left: 8vw;
margin-top: -2.5vw;

&:hover {
    -webkit-transform: scale(1.1);
            transform: scale(1.1);
            transition: 0.3s
}

@media (min-width: 950px) and (max-width: 1115px){
     margin-left: 9vw;
     margin-top: -3.3vw;
     width: 3.5vw;
 }

 @media (min-width: 900px) and (max-width: 949px){
     margin-left: 12vw;
     margin-top: -3.6vw;
     width: 5vw;
 }

@media (min-width: 850px) and (max-width: 899px){
    margin-left: 13vw;
    margin-top: -3.8vw;
    width: 5vw;
}

@media (min-width: 800px) and (max-width: 849px){
    margin-left: 14vw;
    margin-top: -3.9vw;
    width: 5vw;
}

@media (min-width: 600px) and (max-width: 799px){
    margin-left: 14vw;
    margin-top: -4.3vw;
    width: 5vw;
}

@media (min-width: 550px) and (max-width: 599px){
    margin-left: 18vw;
    margin-top: -5.5vw;
    width: 5vw;
}

@media (min-width: 500px) and (max-width: 549px){
    margin-left: 22vw;
    margin-top: -6vw;
    width: 7vw;
}

@media (max-width: 499px){
    margin-left: 26vw;
    margin-top: -7.5vw;
    width: 9vw;
}
`   

export const SecondProject = styled.div`
width: 315px;
height: 340px;
background: black;

box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
color: white;
text-align: center;
font-size: 15px;
`

export const PrintSecondProject = styled.img`
width: 315px;
height: 292px;
cursor: pointer;
`

export const ThirdProject = styled.div`
width: 315px;
height: 340px;
background: black;
box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
color: white;
text-align: center;
font-size: 15px;
`
export const PrintThirdProject = styled.img`
width: 315px;
height: 292px;
cursor: pointer;
`

export const FourthProject = styled.div`
width: 315px;
height: 340px;
background: black;
box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
color: white;
text-align: center;
font-size: 15px;
`
export const PrintFourthProject = styled.img`
width: 315px;
height: 292px;
cursor: pointer;
`

export const FifthProject = styled.div`
width: 315px;
height: 340px;
background: black;
box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
color: white;
text-align: center;
font-size: 15px;
`

export const PrintFifthProject = styled.img`
width: 315px;
height: 292px;
cursor: pointer;
`

export const SixthProject = styled.div`
width: 315px;
height: 340px;
background: black;
box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
color: white;
text-align: center;
font-size: 15px;
`

export const PrintSixthProject = styled.img`
width: 315px;
height: 292px;
cursor: pointer;
`

export const SeventhProject = styled.div`
width: 315px;
height: 340px;
background: black;
box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
color: white;
text-align: center;
font-size: 15px;
`

export const PrintSeventhProject = styled.img`
width: 315px;
height: 292px;
cursor: pointer;
`

export const EigthProject = styled.div`
width: 315px;
height: 340px;
background: black;
box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
color: white;
text-align: center;
font-size: 15px;
`

export const PrintEigthProject = styled.img`
width: 315px;
height: 292px;
cursor: pointer;
`

export const NinthProject = styled.div`
width: 315px;
height: 340px;
background: black;
box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
color: white;
text-align: center;
font-size: 15px;
`

export const PrintNinthProject = styled.img`
width: 315px;
height: 292px;
cursor: pointer;
`

export const ThirdLine = styled.hr`
margin-top: 1vw;
opacity: 0.5;
border: 1px solid #0F98AF;
width: 90vw;
`

export const Skills = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
margin-left: 4.5vw;

@media (max-width: 849px){
    justify-content: center;
    align-items: center;
    margin-left: 2vw;
}
`

export const H4 = styled.h4`
margin-top: 6vw;
font-size: 45px;
color: #0F98AF;
`

export const Time = styled.p`
color: white;

`

export const Hab = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
gap: 3vw;
margin-top: 2vw;
margin-left: 3.9vw;

@media (min-width: 545px) and (max-width: 849px){
    justify-content: center;
    align-items: center;
    margin-top: 8vw;
    gap: 5vw;
}

@media (max-width: 544px){
    justify-content: center;
    align-items: center;
    margin-top: 8vw;
    gap: 8vw;
}
`


export const ReactImg = styled.img`
width: 4vw;
height: 6vh;
border-radius: 88px;

@media (min-width: 550px) and (max-width: 849px){
margin-left: 2.4vw;
width: 5vw;
}

@media (max-width: 549px){
    width: 7vw;
    margin-left: 3vw;
}
`

export const ReactXP = styled.p`
color: white;
margin-left: 60px;
margin-top: -29px;

@media (min-width: 550px) and (max-width: 849px){
margin-left: 9vw;
}

@media (max-width: 549px){
margin-left: 14vw;
}
`

export const JavaScriptImg = styled.img`
width: 3vw;
height: 5vh;
margin-left: 7px;

@media (min-width: 550px) and (max-width: 849px){
margin-left: 1vw;
width: 4.3vw;
}

@media (max-width: 549px){
    width: 6vw;
}
`
export const JSXP = styled.p`
color: white;
margin-left: 60px;
margin-top: -31px;
`

export const CssImg = styled.img`
width: 3.8vw;
height: 5.8vh;
margin-left: 1px;

@media (max-width: 849px){
margin-left: 1vw;
width: 4.5vw;
}

@media (max-width: 549px){
    width: 7vw;
    margin-left: 0.5vw;
}
`

export const CSSXP = styled.p`
color: white;
margin-left: 60px;
margin-top: -31px;
`

export const HtmlImg = styled.img`
width: 4.5vw;
height: 6.8vh;
margin-left: -4px;

@media (min-width: 550px) and (max-width: 849px){
margin-left: 1vw;
width: 5vw;
}

@media (max-width: 549px){
width: 9vw;
}
`

export const HTMLXP = styled.p`
color: white;
margin-left: 60px;
margin-top: -31px;
`


export const GitImg = styled.img`
width: 3.5vw;
height: 5.5vh;
border-radius: 88px;

@media (min-width: 550px) and (max-width: 849px){
margin-left: 1vw;
width: 4.5vw;
}

@media (max-width: 549px){
width: 7vw;
}
`
export const GITXP = styled.p`
color: white;
margin-left: 58px;
margin-top: -31px;
`

export const LinhaSeparação = styled.div`
margin-top: 2vw;
opacity: 0.9;
width: 70vw;
margin-left: 4vw;
border: 2px solid #0F98AF;
border-start-start-radius: 10px;
border-end-end-radius: 10px;

@media (min-width: 900px) and (max-width: 949px){
    width: 80vw;
}

@media (min-width: 850px) and (max-width: 899px){
    width: 82vw ;
}

@media (max-width: 849px){
    width: 90vw;
    margin-top: 6vw;
}
`

export const Contato = styled.div`
display: flex;
justify-content: center;
align-items: center;

@media (min-width: 950px) and (max-width: 1115px){
margin-top: -3.3vw;
}

@media (min-width: 900px) and (max-width: 949px){
margin-top: -6.5vw;
margin-left: 20vw;
}

@media (min-width: 850px) and (max-width: 899px){
margin-top: -7.2vw;
margin-left: 20vw;
}
@media (min-width: 700px) and (max-width: 849px){
justify-content: center;
align-items: center;
margin-top: 29.5vw;
margin-left: -25vw;
}

@media (min-width: 550px) and (max-width: 699px){
justify-content: center;
align-items: center;
margin-top: 34vw;
margin-left: -23vw;
}

@media (max-width: 549px){
justify-content: center;
align-items: center;
margin-top: 26vw;
margin-left: -30vw;   
}
`

export const H5 = styled.h5`
font-size: 45px;
color: #0F98AF;
margin-left: 30vw;
margin-top: -60.4vw;

@media (max-width: 849px){
   margin-left: 49vw;
}
`

export const Contact = styled.div`
display: flex;
flex-direction: column;
gap: 3vw;
margin-left: -155px;
margin-top: -37vw;  

@media (min-width: 700px) and (max-width: 849px){
    margin-left: -26vw;
    margin-top: -15vw;
    gap: 6vw;
}

@media (min-width: 550px) and (max-width: 699px){
    margin-left: -30vw;
    margin-top: -22vw;
    gap: 6vw;
}

@media (max-width: 549px){
    margin-left: -60vw;
    margin-top: -10vw;
    gap: 9vw;
}

`

export const LinkedinLink = styled.img`
width: 3.5vw;
height: 5.5vh;

@media (min-width: 950px) and (max-width: 1115px){
    margin-top: 45px;
}

@media (min-width: 900px) and (max-width: 949px){
    margin-top: 76px;
}

@media (min-width: 850px) and (max-width: 899px){
    margin-top: 78px;
}

@media (min-width: 550px) and (max-width: 849px){
    margin-top: 75px;
    width: 5vw;
}

@media (max-width: 549px){
    margin-top: 75px;
    width: 7vw;
}
`

export const LINK = styled.a`
color: white;
text-decoration: none;
padding-left: 60px;
margin-top: -5vw;

@media (min-width: 700px) and (max-width: 849px){
    padding-top: -3vw;
    margin-top: -74px;
}

@media (max-width: 699px){
    padding-top: -3vw;
    margin-top: -70px;
}
`

export const WPPLink = styled.img`
width: 3.5vw;
height: 5.5vh;

@media (min-width: 550px) and (max-width: 849px){
    width: 5vw;
}

@media (max-width: 549px){
    width: 7vw;
}
`

export const GMAILLink = styled.img`
width: 3.5vw;
height: 5.5vh;

@media (min-width: 550px) and (max-width: 849px){
    width: 5vw;
}

@media (max-width: 549px){
    width: 7vw;
}

`

export const FifthLine = styled.hr`
margin-top: 8vw;
opacity: 0.2    ;
border: 1px solid grey;
width: 90vw;
margin-left: 4vw;

@media (min-width: 900px) and (max-width: 950px){
    margin-top: 20vw;
}

@media (min-width: 850px) and (max-width: 899px){
    margin-top: 20vw;
}

@media (max-width: 849px){
    margin-top: 20vw;
}
`

export const Developer = styled.p`
color: whitesmoke;
text-align: center;
margin-top: 3px;
margin-bottom: 10px;
font-size: 13px;
`

