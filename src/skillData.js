import react from 'simple-icons/icons/react.svg'
import next from 'simple-icons/icons/nextdotjs.svg'
import html from 'simple-icons/icons/html5.svg'
import css from 'simple-icons/icons/css.svg'
import javascript from 'simple-icons/icons/javascript.svg'
import node from 'simple-icons/icons/nodedotjs.svg'
import express from 'simple-icons/icons/express.svg'
import mongodb from 'simple-icons/icons/mongodb.svg'
import openapi from 'simple-icons/icons/openapiinitiative.svg'
import typescript from 'simple-icons/icons/typescript.svg'
import figma from 'simple-icons/icons/figma.svg'
import github from 'simple-icons/icons/github.svg'
import vscodium from 'simple-icons/icons/vscodium.svg'
import notion from 'simple-icons/icons/notion.svg'
import git from 'simple-icons/icons/git.svg'

export const skills = {
  Frontend: [
    { name: 'React', icon: react }, { name: 'Next.js', icon: next }, { name: 'HTML', icon: html },
    { name: 'CSS', icon: css }, { name: 'JavaScript', icon: javascript },
  ],
  Backend: [
    { name: 'Node.js', icon: node }, { name: 'Express', icon: express },
   { name: 'MongoDB', icon: mongodb }, { name: 'REST API', icon: openapi },
  ],
  Languages: [
    { name: 'JavaScript', icon: javascript },{ name: 'TypeScript', icon: typescript }, 
    
  ],      
  'Design & Editing': [
    { name: 'Figma', icon: figma }, 
  ],
  'Tools & AI': [
    { name: 'GitHub', icon: github }, { name: 'VS Code', icon: vscodium }, { name: 'Notion', icon: notion },
    { name: 'AI Tools', kind: 'ai' }, { name: 'GitHub', icon: git }, { name: 'Terminal', kind: 'terminal' },
  ],
}
