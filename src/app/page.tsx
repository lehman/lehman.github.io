'use client'

import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Portfolio from "@/components/Portfolio/Portfolio";
import References from "@/components/References/References";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <About />
        <Portfolio />
        <References />
        <Contact />
      </Content>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 20px;
`;

const Content = styled.div`
    margin: auto;
    max-width: 1720px;
    width: 100%;
`;
