import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
    Input,
    Flex,
    Button,
    useDisclosure,
    Select,
  } from "@chakra-ui/react";
  import { useForm } from "react-hook-form";
  import { weaponFieldAtom } from "src/lib/utils/atomDeclarations";
  import { useAtom } from "jotai";
  import {useState} from 'react'
  
  export default function AmmoAttackModal() {
    const [weaponField, setWeaponField] = useAtom(weaponFieldAtom);
    const [max, setMax] = useState(0)
    const { register, handleSubmit } = useForm();
    const onSubmitData = (data) => {
      function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }
  
      setWeaponField((weaponField) => {
        return { ...weaponField, ammoAttacks: weaponField.ammoAttacks.concat({...data, id: uuidv4()}) };
      });
      onClose()
    };
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Button width="fit-content" marginTop="2rem" onClick={onOpen}>Add Ammo Attack</Button>
  
        <Modal width="75vw" height="60vh" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <form onSubmit={handleSubmit(onSubmitData)}>
          <ModalContent minWidth="75vw" minHeight="60vh">
            <ModalHeader>Attack Creator</ModalHeader>
            <ModalCloseButton />
            <ModalBody width="75vw" height="60vh">
              
                <Flex direction="column">
                  <Text fontSize="2xl">attack type</Text>
                  <Select width="10vw" {...register("type", { required: true})}>
                    <option value="BLUNT">BLUNT</option>
                    <option value="EDGE">EDGE</option>
                  </Select>
                  <Text fontSize="2xl">size</Text>
                  <Input
                    marginTop="1rem"
                    marginBottom="1rem"
                    {...register("size", { required: true})}
                  />
                  <Text fontSize="2xl">penetration</Text>
                  <Input
                    marginTop="1rem"
                    marginBottom="1rem"
                    {...register("penetration", { required: true})}
                  />
                  <Text fontSize="2xl">Attack Name ex: slash</Text>
                  <Input
                    marginTop="1rem"
                    marginBottom="1rem"
                    {...register("attackName", { required: true})}
                  />
                  <Text fontSize="2xl">Attack Name Plural ex: slashes</Text>
                  <Input
                    marginTop="1rem"
                    marginBottom="1rem"
                    {...register("attackNamePlural", { required: true})}
                  />
                  <Text fontSize="2xl">Velocity Multiplier</Text>
                  <Input
                    marginTop="1rem"
                    marginBottom="1rem"
                    {...register("velocityMultiplier", { required: true})}
                  />
                  <Text fontSize="2xl">Attack speed. ex: 3:3 is the speed of most weapons</Text>
                  <Input
                    marginTop="1rem"
                    marginBottom="1rem"
                    {...register("attackprepareAndRecover", { required: true})}
                  />
                </Flex>
              
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="gray" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button type="submit" colorScheme="purple">Finish Attack</Button>
            </ModalFooter>
          </ModalContent>
          </form>
        </Modal>
      </>
    );
  }
  