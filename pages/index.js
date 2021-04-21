import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import Creature from "src/components/rawDisplay/Creature";
import CreatureOptions from "src/components/options/CreatureOptions";
import Weapon from "src/components/rawDisplay/Weapon";
import WeaponOptions from "src/components/options/WeaponOptions";
import SignUpModal from 'src/components/modals/SignUpModal'

export default function Home() {
  const [creatingCreature, setCreatingCreature] = useState(false);
  const [creatingEntity, setCreatingEntity] = useState(false);
  const [creatingMetal, setCreatingMetal] = useState(false);
  const [creatingWeapon, setCreatingWeapon] = useState(false);
  return (
    <Flex direction="column" width="100vw">
      <Flex
        backgroundColor="#cbffcb"
        alignItems="center"
        justifyContent="center"
        minHeight="14vh"
        width="100VW"
        direction="column"
      >
        <Heading marginTop="2rem">Spleggoths Raw GUI</Heading>
        <Flex width="95vw" margin="auto" alignItems="flex-end" justifyContent="flex-end">
          <SignUpModal />
        </Flex>
      </Flex>

      <Flex
        position="relative"
        justifyContent="space-evenly"
        alignItems="center"
        width="100vw"
        height="12vh"
      >
        <Flex>
          <Button
            onClick={() => {
              setCreatingCreature(!creatingCreature);
            }}
            colorScheme={creatingCreature ? "green" : "gray"}
          >
            Creature
          </Button>
          <Text position="relative" top="-1.5rem" left="-0.5rem" color="red">
            WIP!
          </Text>
        </Flex>
        <Button
          onClick={() => {
            setCreatingEntity(!creatingEntity);
          }}
          colorScheme={creatingEntity ? "cyan" : "gray"}
        >
          Entity
        </Button>
        <Button
          onClick={() => {
            setCreatingMetal(!creatingMetal);
          }}
          colorScheme={creatingMetal ? "red" : "gray"}
        >
          Metal
        </Button>
        <Button
          onClick={() => {
            setCreatingWeapon(!creatingWeapon);
          }}
          colorScheme={creatingWeapon ? "purple" : "gray"}
        >
          Weapons
        </Button>
      </Flex>
      {creatingCreature ? (
        <Flex direction="column">
          <CreatureOptions />
          <Creature />
        </Flex>
      ) : null}
      {creatingEntity ? (
        <Flex
          paddingTop="2rem"
          marginTop="2rem"
          width="100vw"
          borderTop={creatingCreature ? "2px solid lightgrey" : null}
        ></Flex>
      ) : null}
      {creatingMetal ? (
        <Flex
          paddingTop="2rem"
          marginTop="2rem"
          width="100vw"
          borderTop={
            creatingCreature || creatingEntity ? "2px solid lightgrey" : null
          }
        ></Flex>
      ) : null}
      {creatingWeapon ? (
        <Flex
          paddingTop="2rem"
          direction="column"
          marginTop="2rem"
          width="100vw"
          borderTop={
            creatingCreature || creatingEntity || creatingMetal
              ? "2px solid lightgrey"
              : null
          }
        >
          <WeaponOptions />
          <Weapon />
        </Flex>
      ) : null}
    </Flex>
  );
}
