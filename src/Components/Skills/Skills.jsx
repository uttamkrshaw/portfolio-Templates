import React from 'react'
import { Techstacks } from './Techstacks'
import GithubStats from "./GithubStats"
import {Github} from "./Github"
import { Toolstack } from './Toolstack'

export const Skills = () => {
  return (
    <div>
        <section id='#skills'>
        <Techstacks/>
        <Toolstack />
        <Github />
        <GithubStats />
        </section>
    </div>
  )
}
