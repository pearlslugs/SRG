import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { weaponFieldAtom } from "src/lib/utils/atomDeclarations";
import { useAtom } from "jotai";
import { ImCross } from "react-icons/im";

export default function Weapon() {
  const [weaponField, setWeaponField] = useAtom(weaponFieldAtom);
  function removeAttack(id) {
    const newAttacks = weaponField?.attacks.filter((attack) => attack.id != id);
    setWeaponField((weaponField) => {
      return { ...weaponField, attacks: newAttacks };
    });
  }
  function removeAmmoAttack(id) {
    const newAttacks = weaponField?.attacks.filter((attack) => attack.id != id);
    setWeaponField((weaponField) => {
      return { ...weaponField, ammoAttacks: newAttacks };
    });
  } //TODO: use refs to copy text
  return (
    <Flex
      direction="column"
      width="75vw"
      margin="auto"
      padding="2rem"
      border="2px lightgrey solid"
    >
      <Text>
        [ITEM_WEAPON:ITEM_WEAPON_
        {weaponField.itemCode.split(" ").join("_").toUpperCase()}]
      </Text>
      <Text>
        [NAME: {weaponField.name.toLowerCase()}:
        {weaponField.namePlural.toLowerCase()}]
      </Text>
      <Text>[SIZE:{weaponField.size}]</Text>
      <Text>[SKILL:{weaponField.skill.toUpperCase()}]</Text>
      {weaponField.ranged ? (
        <Text>
          [RANGED:{weaponField.rangedskill}:{weaponField.ammoClass}]
        </Text>
      ) : null}
      <Text>[TWO_HANDED:{weaponField.twoHanded}]</Text>
      <Text>[MINIMUM_SIZE:{weaponField.minSize}]</Text>
      <Text>[MATERIAL_SIZE:{weaponField.matSize}]</Text>
      {weaponField?.attacks?.map((attack) => {
        return (
          <Flex key={attack.id} direction="row" width="75vw" margin="auto">
            <Flex direction="column" minWidth="60%">
              <Text>
                [ATTACK:{attack.type}:{attack.size}:{attack.penetration}:
                {attack.attackName}:{attack.attackNamePlural}:NO_SUB:
                {attack.velocityMultiplier}]
              </Text>
              <Text marginLeft="3rem">
                [ATTACK_PREPARE_AND_RECOVER:{attack.attackprepareAndRecover}]
              </Text>
            </Flex>
            <Button
              width="1rem"
              colorScheme="red"
              onClick={() => removeAttack(attack.id)}
            >
              <Text marginTop="-1rem" color="red">
                <ImCross />
              </Text>
            </Button>
          </Flex>
        );
      })}

      {weaponField.ranged ? (
        <Flex margin="auto" marginTop="3rem" direction="column" width="75vw">
          <Text marginBottom="3rem" fontSize="2xl">
            Ammo for your launcher
          </Text>
          <Text>
            [ITEM_AMMO:ITEM_AMMO_
            {weaponField.ammoCode.split(" ").join("_").toUpperCase()}]
          </Text>
          <Text>
            [NAME: {weaponField.ammoName.toLowerCase()}:
            {weaponField.ammoNamePlural.toLowerCase()}]
          </Text>
          <Text>[CLASS:{weaponField.ammoClass}]</Text>
          <Text>[SIZE:{weaponField.ammoSize}]</Text>
        </Flex>
      ) : null}
      {weaponField?.ammoAttacks?.map((attack) => {
        return (
          <Flex key={attack.id} direction="row" width="75vw" margin="auto">
            <Flex direction="column" minWidth="60%">
              <Text>
                [ATTACK:{attack.type}:{attack.size}:{attack.penetration}:
                {attack.attackName}:{attack.attackNamePlural}:NO_SUB:
                {attack.velocityMultiplier}]
              </Text>
              <Text marginLeft="3rem">
                [ATTACK_PREPARE_AND_RECOVER:{attack.attackprepareAndRecover}]
              </Text>
            </Flex>
            <Button
              width="1rem"
              colorScheme="red"
              onClick={() => removeAmmoAttack(attack.id)}
            >
              <Text marginTop="-1rem" color="red">
                <ImCross />
              </Text>
            </Button>
          </Flex>
        );
      })}
    </Flex>
  );
}
