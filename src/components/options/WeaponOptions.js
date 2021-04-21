import {
  Checkbox,
  CheckboxGroup,
  Box,
  Flex,
  Radio,
  RadioGroup,
  Text,
  Stack,
  Input,
} from "@chakra-ui/react";
import { weaponFieldAtom } from "src/lib/utils/atomDeclarations";
import { useAtom } from "jotai";
import AttackModal from "src/components/modals/AttackModal";
import AmmoAttackModal from "src/components/modals/AmmoAttackModal"

export default function Weapon() {
  const [weaponField, setWeaponField] = useAtom(weaponFieldAtom);

  function changeCodeName(e) {
    setWeaponField((weaponField) => {
      return { ...weaponField, itemCode: e.target.value };
    });
  }
  function changeAmmoCodeName(e) {
    setWeaponField((weaponField) => {
      return { ...weaponField, ammoCode: e.target.value };
    });
  }
  function changeRangedSkill(e) {
    setWeaponField((weaponField) => {
      return { ...weaponField, rangedskill: e.target.value };
    });
  }
  function changeName(e) {
    setWeaponField((weaponField) => {
      return { ...weaponField, name: e.target.value };
    });
  }
  function changeAmmoName(e) {
    setWeaponField((weaponField) => {
      return { ...weaponField, ammoName: e.target.value };
    });
  }
  function changeNamePlural(e) {
    setWeaponField((weaponField) => {
      return { ...weaponField, namePlural: e.target.value };
    });
  }
  function changeAmmoNamePlural(e) {
    setWeaponField((weaponField) => {
      return { ...weaponField, ammoNamePlural: e.target.value };
    });
  }
  function changeSize(e) {
    setWeaponField((weaponField) => {
      return { ...weaponField, size: e.target.value };
    });
  }
  function changeAmmoSize(e) {
    setWeaponField((weaponField) => {
      return { ...weaponField, ammoSize: e.target.value };
    });
  }
  function changeAmmoClass(e) {
    setWeaponField((weaponField) => {
      return { ...weaponField, ammoClass: e.target.value };
    });
  }
  function changeSkill(e) {
    setWeaponField((weaponField) => {
      return { ...weaponField, skill: e.target.value };
    });
  }
  function changeTwoHandedSize(e) {
    setWeaponField((weaponField) => {
      return { ...weaponField, twoHanded: e.target.value };
    });
  }
  function changeMinSize(e) {
    setWeaponField((weaponField) => {
      return { ...weaponField, minSize: e.target.value };
    });
  }
  function changeMatSize(e) {
    setWeaponField((weaponField) => {
      return { ...weaponField, matSize: e.target.value };
    });
  }

  function switchWeaponType(value) {
    setWeaponField((weaponField) => {
      return { ...weaponField, ranged: value };
    });
  }
  return (
    <Flex width="100vw" direction="row" marginBottom="3rem">
      <Flex
        width="45%"
        marginLeft="15vw"
        minHeight="25vh"
        direction="column"
        justifyContent="space-evenly"
      >
        <Text fontSize="2xl">Weapon Name Code</Text>
        <Input width="20vw" onChange={changeCodeName} />
        <Text fontSize="2xl">Weapon Type</Text>
        <RadioGroup defaultValue="melee">
          <Radio marginRight="2rem" value="melee" onChange={() => switchWeaponType(false)}>
            melee
          </Radio>
          <Radio value="ranged" onChange={() => switchWeaponType(true)}>
            ranged
          </Radio>
        </RadioGroup>
        <Text fontSize="2xl">Name ex: sword</Text>
        <Input width="20vw" onChange={changeName} />
        <Text fontSize="2xl">Name Multiple ex: swords</Text>
        <Input width="20vw" onChange={changeNamePlural} />
        <Text fontSize="2xl">Size</Text>
        <Input width="20vw" onChange={changeSize} />
        <Text fontSize="2xl">Skill</Text>
        <Input width="20vw" onChange={changeSkill} />
        <Text fontSize="2xl">Size Required To Weild With One Hand</Text>
        <Input width="20vw" onChange={changeTwoHandedSize} />
        <Text fontSize="2xl">Size Required To Wield</Text>
        <Input width="20vw" onChange={changeMinSize} />
        <Text fontSize="2xl">How Many Bars To Create</Text>
        <Input width="20vw" onChange={changeMatSize} />
        {weaponField.ranged ? <>
          <Text fontSize="2xl">ranged skill(must be BOW or CROSSBOW)</Text>
          <Input width="20vw" onChange={changeRangedSkill} />
        </> : null}
        <AttackModal />
        </Flex>
        {weaponField.ranged ? 
        <Flex
        width="45%"
        minHeight="25vh"
        direction="column"
        justifyContent="space-evenly"
      >
        <Text fontSize="2xl">Ammo Name Code</Text>
        <Input width="20vw" onChange={changeAmmoCodeName} />
        <Text fontSize="2xl">Name ex: arrow</Text>
        <Input width="20vw" onChange={changeAmmoName} />
        <Text fontSize="2xl">Name Multiple ex: arrows</Text>
        <Input width="20vw" onChange={changeAmmoNamePlural} />
        <Text fontSize="2xl">Ammo Class ex: BOLT</Text>
        <Input width="20vw" onChange={changeAmmoClass} />
        <Text fontSize="2xl">Size</Text>
        <Input width="20vw" onChange={changeAmmoSize} />
        <AmmoAttackModal /> </Flex> : null}
      </Flex>
  );
}
