import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { entityFieldAtom } from "src/lib/utils/atomDeclarations";
import { useAtom } from "jotai";

import { ImCross } from "react-icons/im";
export default function Creature() {
  const [entityField, setEntityField] = useAtom(entityFieldAtom);
  function removeRace(race) {
    const newCreatures = entityField?.creature?.filter(
      (creature) => creature != race
    );
    setEntityField((entityField) => {
      return { ...entityField, creature: newCreatures };
    });
  }
  return (
    <Flex
      direction="column"
      width="75vw"
      margin="auto"
      padding="2rem"
      border="2px lightgrey solid"
    >
      <Text>
        [ENTITY:{entityField.entityCode.split(" ").join("_").toUpperCase()}]
      </Text>
      {entityField?.creature?.map((creature) => {
        return (
          <Flex>
            <Text>[CREATURE:{creature}]</Text>{" "}
            <Button
              colorScheme="none"
              marginLeft="1rem"
              onClick={() => removeRace(creature)}
            >
              <Text marginTop="-1rem" color="red">
                <ImCross />
              </Text>
            </Button>
          </Flex>
        );
      })}
      {entityField.controllable ? (
        <>
          <Text>[SITE_CONTROLLABLE]</Text>
          <Text>[ALL_MAIN_POPS_CONTROLLABLE]</Text>
        </>
      ) : null}
      <Text>[TRANSLATION:{entityField.translation}]</Text>
      <Text>[DIGGER:ITEM_WEAPON_PICK]</Text>
      {entityField?.weapons?.map((weapon) => {
        return (
          <>
            <Text>[WEAPON:ITEM_WEAPON_{weapon.name.toUpperCase()}]</Text>
            {weapon.ranged == true ? (
              <Text marginLeft="5rem">
                [AMMO:ITEM_AMMO_{weapon.ammo.toUpperCase()}]
              </Text>
            ) : null}
          </>
        );
      })}
    </Flex>
  );
}
