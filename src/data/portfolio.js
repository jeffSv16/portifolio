import {
  SiAngular,
  SiReact,
  SiIonic,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiPwa,
  SiDotnet,
  SiSharp,
  SiFastapi,
  SiPostgresql,
  SiDocker,
  SiMinio,
  SiGit,
  SiJira,
  SiBitbucket,
  SiConfluence,
  SiOpenai,
  SiDevexpress,
  SiVuedotjs,
  SiNextdotjs,
  SiThreedotjs,
  SiPython,
  SiSupabase,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa6'
import { DiMsqlServer } from 'react-icons/di'
import { TbApi, TbDatabase, TbLayoutGrid, TbBrandAzure, TbBrandReactNative } from 'react-icons/tb'
import { MapPin, GraduationCap, Briefcase } from 'lucide-react'

export const profile = {
  name: 'Jeferson Vasselai',
  role: 'Desenvolvedor de Software',
  roles: [
    'Desenvolvedor de Software',
    'Front-end com React',
    'Back-end com .NET',
    'APIs REST & Dapper',
  ],
  summary:
    '5 anos desenvolvendo sistemas corporativos e ERP — com experiência em soluções financeiras e fundo de investimento. Front-end com Angular, React e Ionic; backend com .NET, APIs REST e Dapper.',
  photo: `${import.meta.env.BASE_URL}assets/profile.png`,
  email: 'jefersonvasselai156@gmail.com',
  phone: '(47) 98802-8942',
  phoneHref: '+5547988028942',
  linkedin: 'https://www.linkedin.com/in/jefersonvs/',
  github: 'https://github.com/jeffSv16',
}

export const aboutParagraphs = [
  'Desenvolvedor de software com 5 anos de experiência no desenvolvimento de sistemas corporativos, atuando principalmente em soluções voltadas à área financeira em fundo de investimento.',
  'Experiência no desenvolvimento front-end com Angular, React e Ionic, além de atuação no backend com .NET (C#), construção e integração de APIs REST e acesso a dados com Dapper.',
  'Possuo conhecimento em bancos de dados PostgreSQL e SQL Server, além de experiência com Docker, Azure e monitoramento de aplicações com Seq. Participei da migração de Angular para React e da integração de soluções com Inteligência Artificial.',
  'Atuo com foco em performance, organização de código, arquitetura e melhoria contínua da experiência do usuário.',
]

export const infoCards = [
  { icon: MapPin, title: 'Localização', text: 'Brusque, Santa Catarina — Brasil' },
  { icon: GraduationCap, title: 'Formação', text: 'Sistemas de Informação — Unifebe' },
  { icon: Briefcase, title: 'Área de atuação', text: 'Sistemas financeiros & ERP' },
]

export const languages = [
  { name: 'Português', level: 'Nativo', progress: 100 },
  { name: 'Espanhol', level: 'Intermediário', progress: 65 },
  { name: 'Inglês', level: 'Básico', progress: 35 },
]

export const stackCategories = [
  {
    id: 'frontend',
    label: 'Front-end',
    items: [
      { name: 'Angular', Icon: SiAngular },
      { name: 'React', Icon: SiReact },
      { name: 'React Native', Icon: TbBrandReactNative },
      { name: 'Vue', Icon: SiVuedotjs },
      { name: 'Next.js', Icon: SiNextdotjs },
      { name: 'Three.js', Icon: SiThreedotjs },
      { name: 'Ionic', Icon: SiIonic },
      { name: 'TypeScript', Icon: SiTypescript },
      { name: 'JS', Icon: SiJavascript },
      { name: 'HTML', Icon: SiHtml5 },
      { name: 'CSS', Icon: SiCss },
      { name: 'PWA', Icon: SiPwa },
    ],
  },
  {
    id: 'backend',
    label: 'Back-end',
    items: [
      { name: '.NET', Icon: SiDotnet },
      { name: 'C#', Icon: SiSharp },
      { name: 'Java', Icon: FaJava },
      { name: 'Python', Icon: SiPython },
      { name: 'APIs REST', Icon: SiFastapi },
      { name: 'Dapper', Icon: TbDatabase },
    ],
  },
  {
    id: 'database',
    label: 'Banco de Dados',
    items: [
      { name: 'PostgreSQL', Icon: SiPostgresql },
      { name: 'SQL Server', Icon: DiMsqlServer },
      { name: 'Supabase', Icon: SiSupabase },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps & Cloud',
    items: [
      { name: 'Docker', Icon: SiDocker },
      { name: 'Azure', Icon: TbBrandAzure },
      { name: 'MinIO', Icon: SiMinio },
      { name: 'Git', Icon: SiGit },
    ],
  },
  {
    id: 'tools',
    label: 'Ferramentas & UI',
    items: [
      { name: 'Jira', Icon: SiJira },
      { name: 'Bitbucket', Icon: SiBitbucket },
      { name: 'Confluence', Icon: SiConfluence },
      { name: 'Seq', Icon: TbApi },
      { name: 'Syncfusion', Icon: TbLayoutGrid },
      { name: 'DevExpress', Icon: SiDevexpress },
      { name: 'Inteligência Artificial', Icon: SiOpenai },
    ],
  },
]

export const experiences = [
  {
    id: 'evoplan',
    date: 'Jan 2026 — Abr 2026',
    role: 'Desenvolvedor Front-end',
    company: 'Evoplan · Brusque, SC',
    highlights: [
      'Desenvolvimento de interfaces web com foco em usabilidade e performance',
      'Implementação de componentes reutilizáveis e boas práticas de front-end',
    ],
  },
  {
    id: 'turris',
    date: 'Dez 2021 — Dez 2025',
    role: 'Desenvolvedor Full Stack',
    company: 'Turris · Itajaí, SC',
    highlights: [
      'Sistemas internos para fundo de investimento — gestão financeira e operacional',
      'Interfaces com React, Angular e Ionic; APIs REST com .NET e Dapper',
      'Docker, MinIO, PWA, Syncfusion e DevExpress',
      'PostgreSQL, SQL Server, Azure, Seq e integração com IA',
      'Migração de Angular para React e arquitetura de software',
    ],
  },
]

export const education = [
  {
    id: 'unifebe',
    badge: 'Cursando',
    status: 'active',
    title: 'Bacharelado em Sistemas de Informação',
    institution: 'Unifebe · Brusque',
    date: 'Fev 2023 — Dez 2026',
  },
  {
    id: 'senai',
    badge: 'Formado',
    status: 'done',
    title: 'Técnico em Desenvolvimento de Sistemas',
    institution: 'Senai · Brusque',
    date: 'Abr 2021 — Ago 2022',
  },
  {
    id: 'visual',
    badge: 'Concluído',
    status: 'done',
    title: 'Operador de Tecnologia',
    institution: 'Visual Treinamentos · Brusque',
    date: 'Mar 2018 — Mai 2019',
  },
]

export const navLinks = [
  { id: 'about', label: 'Sobre' },
  { id: 'stacks', label: 'Stacks' },
  { id: 'experience', label: 'Experiência' },
  { id: 'education', label: 'Formação' },
  { id: 'contact', label: 'Contato' },
]
