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
  Select,
  Button,
  useToast,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import useWeapons from "src/lib/utils/swr/hooks/useWeapons";
import { entityFieldAtom } from "src/lib/utils/atomDeclarations";
import { useAtom } from "jotai";
import { useRef, useState, useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";

export default function Creature() {
  const [weaponList, setWeaponList] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { weapons } = useWeapons();
  const toast = useToast();
  const btnRef = useRef(null);
  const entityRef = useRef(null);
  const [entityField, setEntityField] = useAtom(entityFieldAtom);
  function concatRace() {
    toast({
      title: `${entityRef.current.value.toUpperCase()} added.`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });

    setEntityField((entityField) => {
      return {
        ...entityField,
        creature: entityField.creature.concat(
          entityRef.current.value.toUpperCase()
        ),
      };
    });
    entityRef.current.value = "";
  }
  function changeCodeName(e) {
    setEntityField((entityField) => {
      return { ...entityField, entityCode: e.target.value };
    });
  }

  function changeDescritpion(e) {
    setEntityField((entityField) => {
      return { ...entityField, description: e.target.value };
    });
  }

  function changeName(e) {
    setEntityField((entityField) => {
      return { ...entityField, name: e.target.value };
    });
  }
  function changeNamePlural(e) {
    setEntityField((entityField) => {
      return { ...entityField, nameMultiple: e.target.value };
    });
  }
  function changeNameDescription(e) {
    setEntityField((entityField) => {
      return { ...entityField, nameDescription: e.target.value };
    });
  }
  function changeStandardMats(e) {
    setEntityField((entityField) => {
      return { ...entityField, isStandard: !entityField.isStandard };
    });
  }
  function addWeapons() {
    setEntityField((entityField) => {
      return { ...entityField, weapons: weaponList };
    });
    console.log(entityField.weapons);
  }
  return (
    <Flex width="100vw" className="row-to-column-flex" marginBottom="3rem">
      <Flex
        width="45%"
        marginLeft="15vw"
        minHeight="25vh"
        direction="column"
        justifyContent="space-evenly"
      >
        <Text fontSize="2xl">Entity Title Code</Text>
        <Input width="20vw" onChange={changeCodeName} />
        <Text fontSize="2xl">Race/Races</Text>
        <Flex>
          <Input ref={entityRef} onChange={changeDescritpion} />{" "}
          <Button
            marginLeft="1rem"
            padding="0"
            colorScheme="none"
            onClick={() => {
              concatRace();
            }}
          >
            <Flex alignItems="center" justifyContent="center">
              <Text color="#0BC5EA" padding="0" margin="0" fontSize="2xl">
                <FaPlusCircle />
              </Text>
            </Flex>
          </Button>
        </Flex>
        <Text fontSize="2xl">Language</Text>
        <Select>
          <option value="DWARF">DWARF</option>
          <option value="GOBLIN">GOBLIN</option>
          <option value="HUMAN">HUMAN</option>
          <option value="ELF">ELF</option>
        </Select>
        <>
          <Button
            ref={btnRef}
            colorScheme="cyan"
            color="white"
            marginTop="2rem"
            marginBottom="2rem"
            width="fit-content"
            onClick={onOpen}
          >
            Add Weapons
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay>
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>list of weapons</DrawerHeader>

                <DrawerBody>
                  {weapons?.map((weapon) => {
                    return (
                      <Box>
                        <Checkbox
                          isChecked={weaponList.some(item => item.name === weapon.name)}
                          onChange={() => {
                            if(weaponList.some(item => item.name !== weapon.name) || weaponList.length < 1){
                              setWeaponList(weaponList => weaponList.concat(weapon))
                            }
                          }}
                        >
                          {weapon.name}
                        </Checkbox>
                      </Box>
                    );
                  })}
                </DrawerBody>

                <DrawerFooter>
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="blue" onClick={() => addWeapons()}>
                    Save
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </>
        <Text fontSize="2xl">Name Multiple ex: dwarves</Text>
        <Input width="20vw" onChange={changeNamePlural} />
        <Text fontSize="2xl">Name Description ex: dwarven</Text>
        <Input width="20vw" onChange={changeNameDescription} />
        <Text fontSize="2xl">Body type</Text>
        <RadioGroup defaultValue="biped">
          <Stack spacing={4} direction="row">
            <Radio value="biped">Biped</Radio>
            <Radio value="quadriped">Quadriped</Radio>
          </Stack>
        </RadioGroup>
        <Text fontSize="2xl">Options</Text>
        <CheckboxGroup>
          <Checkbox>Play as This entity</Checkbox>
          <Checkbox>can learn</Checkbox>
          <Checkbox>can speak</Checkbox>
          <Checkbox>utterances</Checkbox>
          <Checkbox>opens doors</Checkbox>
          <Checkbox>benign</Checkbox>
          <Checkbox>good</Checkbox>
          <Checkbox>evil</Checkbox>
          <Checkbox defaultIsChecked={true}>eats</Checkbox>
          <Checkbox defaultIsChecked={true}>drinks</Checkbox>
          <Checkbox>carnivore</Checkbox>
          <Checkbox>eats bones</Checkbox>
          <Checkbox>picks locks</Checkbox>
          <Checkbox>avoids traps</Checkbox>
          <Checkbox>flees fast</Checkbox>
          <Checkbox>slow learner</Checkbox>
        </CheckboxGroup>
      </Flex>
      <Flex minHeight="25vh" direction="column" justifyContent="space-evenly">
        <Text fontSize="2xl">Tissue</Text>
        <Stack spacing={4} direction="row">
          <Checkbox defaultIsChecked={true} onChange={changeStandardMats}>
            {/* go through detail plan*/}
            standard mats
          </Checkbox>
        </Stack>
        <CheckboxGroup>
          <Checkbox>skin</Checkbox>
          <Checkbox>scales</Checkbox>
          <Checkbox>chitin</Checkbox>
        </CheckboxGroup>
        <Text fontSize="2xl">Body</Text>
        <CheckboxGroup>
          <Checkbox defaultIsChecked={true} onChange={changeStandardMats}>
            {/* go through detail plan*/}
            standard body
          </Checkbox>
          <Checkbox>tenticles</Checkbox>
          <Checkbox>shell</Checkbox>
          <Checkbox>1 horn</Checkbox>
          <Checkbox>2 horns</Checkbox>
          <Checkbox>bill</Checkbox>
          <Checkbox>4 eyes</Checkbox>
          <Checkbox>claws</Checkbox>
          <Checkbox>4 arms</Checkbox>
          <Checkbox>6 arms</Checkbox>
          <Checkbox>2heads</Checkbox>
          <Checkbox>Tusks</Checkbox>
          <Checkbox>wings</Checkbox>
          <Checkbox>Beak</Checkbox>
          <Checkbox>Mandible</Checkbox>
          <Checkbox>hooves</Checkbox>
          <Checkbox>pincer</Checkbox>
          <Checkbox>rear legs</Checkbox>
        </CheckboxGroup>
        <Text fontSize="2xl">Interatctions</Text>
        <CheckboxGroup>
          <Checkbox>spits</Checkbox>
          <Checkbox>pets animal</Checkbox>
          <Checkbox>breathes fire</Checkbox>
        </CheckboxGroup>
      </Flex>
    </Flex>
  );
                }
  