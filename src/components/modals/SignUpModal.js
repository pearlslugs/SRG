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
export default function SignU()  {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Button width="auto" onClick={onOpen}>sign up</Button>
  
        <Modal width="75vw" height="60vh" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent minWidth="75vw" minHeight="60vh">
            <ModalHeader>Sign Up</ModalHeader>
            <ModalCloseButton />
            <ModalBody width="75vw" height="60vh">
            <Flex direction="column">
                <Flex direction="row">
                <Text>
                    Username:
                </Text><Input />
                </Flex>
                <Flex direction="row">
                <Text type="password">Password</Text><Input />
                </Flex></Flex>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="gray" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button type="submit" colorScheme="purple">Finish Attack</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
    }
  