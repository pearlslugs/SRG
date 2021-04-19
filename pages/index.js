import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react"
import {useState} from 'react'
import Creature from 'src/components/rawDisplay/Creature'
import CreatureOptions from 'src/components/options/CreatureOptions'


export default function Home() {
  const [creatingCreature, setCreatingCreature] = useState(false)
  const [creatingEntity, setCreatingEntity] = useState(false)
  const [creatingMetal, setCreatingMetal] = useState(false)
  const [creatingWeapon, setCreatingWeapon] = useState(false)
  return (
    <Flex direction="column" width="100vw">
      <Flex backgroundColor="#cbffcb" alignItems="center" justifyContent="center" height="12vh" width="100VW">
        <Heading>Spleggoths Raw GUI</Heading>
      </Flex>
      <Flex justifyContent="space-evenly" alignItems="center" width="100vw" height="12vh">
        <Button onClick={() => {setCreatingCreature(!creatingCreature)}} colorScheme={creatingCreature ? "green" : "gray"}>
          Creature
        </Button>
        <Button onClick={() => {setCreatingEntity(!creatingEntity)}} colorScheme={creatingEntity ? "cyan" : "gray"}>
          Entity
        </Button>
        <Button onClick={() => {setCreatingMetal(!creatingMetal)}} colorScheme={creatingMetal ? "red" : "gray"}>
          Metal
        </Button>
        <Button onClick={() => {setCreatingWeapon(!creatingWeapon)}} colorScheme={creatingWeapon ? "purple" : "gray"}>
          Weapon
        </Button>
      </Flex>
      {creatingCreature ? 
      <Flex direction="column">
        <CreatureOptions />
        <Creature/>
        </Flex>
        : null}
         {creatingEntity ? 
      <Flex>
        
        </Flex>
        : null}
         {creatingMetal ? 
      <Flex>
        
        </Flex>
        : null}
         {creatingWeapon ? 
      <Flex>
        
        </Flex>
        : null}
    </Flex>
  )
}
