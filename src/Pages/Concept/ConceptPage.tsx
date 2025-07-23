import type React from "react";
import { Values } from "../../Components/values";
import { Concept } from "../../Components/concept";
import { About } from "../../Components/about";
import './concept-page.css'

export const ConceptPage: React.FC = () => {
  return (
    <>
    <div className="concept-page">
      <Concept />
      <About />
    </div>
    <div className="values">
      <Values />
    </div>
    </>
  );
}