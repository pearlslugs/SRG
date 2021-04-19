import { Checkbox, CheckboxGroup, Box, Flex, Radio, RadioGroup, Text, Stack, Input  } from "@chakra-ui/react"
import {creatureFieldAtom} from 'src/lib/utils/atomDeclarations'
import { useAtom } from 'jotai'

export default function Creature () {

    const [creatureField, setCreatureField] = useAtom(creatureFieldAtom)

    function changeCodeName (e) {
    setCreatureField( creatureField => {
        return { ...creatureField, creatureName: e.target.value}
    })
    }

    function changeDescritpion (e) {
        setCreatureField( creatureField => {
            return { ...creatureField, description: e.target.value}
        })
        }

    function changeName (e) {
    setCreatureField( creatureField => {
        return { ...creatureField, name: e.target.value}
    })
    }
    function changeNamePlural (e) {
        setCreatureField( creatureField => {
            return { ...creatureField, nameMultiple: e.target.value}
        })
        }
        function changeNameDescription (e) {
            setCreatureField( creatureField => {
                return { ...creatureField, nameDescription: e.target.value}
            })
            }
    function changeStandardMats (e) {
        setCreatureField( creatureField => {
            return { ...creatureField, isStandard: !creatureField.isStandard}
        })
    }
    

    return(
        <Flex width="100%" minHeight="25vh" direction="column" alignItems="center" justifyContent="space-evenly">
            <Text fontSize="3xl">Creature Title Code</Text>
            <Input width="20vw" onChange={changeCodeName} />
            <Text fontSize="3xl">Creature Description</Text>
            <Input width="40vw" onChange={changeDescritpion} />
            <Text fontSize="3xl">Name ex: dwarf</Text>
            <Input width="20vw" onChange={changeName} />
            <Text fontSize="3xl">Name Multiple ex: dwarves</Text>
            <Input width="20vw" onChange={changeNamePlural} />
            <Text fontSize="3xl">Name Description ex: dwarven</Text>
            <Input width="20vw" onChange={changeNameDescription} />
            <Text fontSize="3xl">Body type</Text>
            <RadioGroup defaultValue="biped">
            <Stack spacing={4} direction="row">
                <Radio value="biped">
                Biped
                </Radio>
                <Radio value="quadriped">Quadriped</Radio>
            </Stack>
            </RadioGroup>
            <Text fontSize="3xl">Creature Intelligence</Text>
            <CheckboxGroup>
            <Checkbox>
                    intelligent
                </Checkbox>
                <Checkbox>
                    can learn
                </Checkbox>
                <Checkbox>
                    can speak
                </Checkbox>
                <Checkbox>
                    utterances
                </Checkbox>
                <Checkbox>
                    opens doors
                </Checkbox>
                <Checkbox>
                    benign
                </Checkbox>
                <Checkbox>
                    good
                </Checkbox>
                <Checkbox>
                    evil
                </Checkbox>
                <Checkbox defaultIsChecked={true}>
                    eats
                </Checkbox> 
                <Checkbox defaultIsChecked={true}>
                    drinks
                </Checkbox>
                <Checkbox>
                    carnivore
                </Checkbox>
                <Checkbox>
                    eats bones
                </Checkbox>
                <Checkbox>
                    picks locks
                </Checkbox>
                <Checkbox>
                    avoids traps
                </Checkbox>
                <Checkbox>
                    flees fast
                </Checkbox>
                <Checkbox>
                    slow learner
                </Checkbox>
            </CheckboxGroup>
            <Text fontSize="3xl">Tissue</Text>
            <Stack spacing={4} direction="row">
                <Checkbox defaultIsChecked={true} onChange={changeStandardMats}>{/* go through detail plan*/}
                    standard mats
                </Checkbox>
            </Stack>
            <CheckboxGroup>
                <Checkbox>
                    skin
                </Checkbox>
                <Checkbox>
                    scales
                </Checkbox>
                <Checkbox>
                    chitin
                </Checkbox>
            </CheckboxGroup>
            <Text fontSize="3xl">Body</Text>
            <CheckboxGroup>
            <Checkbox defaultIsChecked={true} onChange={changeStandardMats}>{/* go through detail plan*/}
                    standard body
                </Checkbox>
                <Checkbox>
                    tenticles
                </Checkbox>
                <Checkbox>
                    shell
                </Checkbox>
                <Checkbox>
                    1 horn
                </Checkbox>
                <Checkbox>
                    2 horns
                </Checkbox>
                <Checkbox>
                    bill
                </Checkbox>
                <Checkbox>
                    4 eyes
                </Checkbox>
                <Checkbox>
                    claws
                </Checkbox>
                <Checkbox>
                    4 arms
                </Checkbox>
                <Checkbox>
                    6 arms
                </Checkbox>
                <Checkbox>
                    2heads
                </Checkbox>
                <Checkbox>
                    Tusks
                </Checkbox>
                <Checkbox>
                    wings
                </Checkbox>
                <Checkbox>
                    Beak
                </Checkbox>
                <Checkbox>
                    Mandible
                </Checkbox>
                <Checkbox>
                    hooves
                </Checkbox>
                <Checkbox>
                    pincer
                </Checkbox>
                <Checkbox>
                    rear legs
                </Checkbox>
            </CheckboxGroup>
            <Text>Interatctions</Text>
            <CheckboxGroup>
                <Checkbox>
                    spits
                </Checkbox>
                <Checkbox>
                    pets animal
                </Checkbox>
                <Checkbox>
                    breathes fire
                </Checkbox>
            </CheckboxGroup>
        </Flex>
    )
}