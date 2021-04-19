import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react"
import {creatureFieldAtom} from 'src/lib/utils/atomDeclarations'
import { useAtom } from 'jotai'

export default function Creature () {
    const [creatureField, setCreatureField] = useAtom(creatureFieldAtom)
    return(
        <Flex direction="column" width="75vw" margin="auto" padding="2rem" border="2px lightgrey solid">
            <Text>[CREATURE: {creatureField.creatureName.split(' ').join('_').toUpperCase()}]</Text>
            <Text>[DESCRIPTION: {creatureField.description.toLowerCase()}]</Text>
            <Text>[NAME: {creatureField.name.toLowerCase()}:{creatureField.nameMultiple.toLowerCase()}:{creatureField.nameDescription.toLowerCase()}]</Text>
            {creatureField.intelligent ? <Text>[INTELLIGENT]</Text> : null}
            {creatureField.moods ? <Text>[STRAINGE_MOODS]</Text> : null}
            {creatureField.trances ? <Text>[TRANCES]</Text> : null}
            {creatureField.benign ? <Text>[BENIGN]</Text> : null}
            {creatureField.evil ? <Text>[EVIL]</Text> : null}
            {creatureField.good ? <Text>[GOOD]</Text> : null}
            {creatureField.utterances ? <Text>[UTTERANCES]</Text> : null}
            {creatureField.trapAvoid ? <Text>[TRAPAVOID]</Text> : null}
            {creatureField.bonecarn ? <Text>[BONECARN]</Text> : null}
            {creatureField.carnivore ? <Text>[CARNIVORE]</Text> : null}
            {!creatureField.eats ? <Text>[NOEAT]</Text> : null}
            {!creatureField.drinks ? <Text>[NODRINK]</Text> : null}
            {creatureField.fleequick ? <Text>[FLEEQUICK]</Text> : null}
            {creatureField.lockpicker ? <Text>[LOCKPICKER]</Text> : null}
            {creatureField.nocturnal ? <Text>[NOCTURNAL]</Text> : null}
            {creatureField.dinural ? <Text>[DINURAL]</Text> : null}
            {creatureField.canOpenDoors ? <Text>[CANOPENDOORS]</Text> : null}
            <Text>[PREFSTRING:{creatureField.perfString}]</Text>
            {creatureField.isStandardBody ? 
                    <Text>[{creatureField.standardBody}]</Text>

             : null}
            {creatureField.isStandard ? creatureField.standard.map(item => {
                return(
                    <Text>[BODY_DETAIL_PLAN:{item.toUpperCase()}]</Text>
                )
            }) : null}
            <Text>[DESCRIPTION: {creatureField.creatureName.toLowerCase()}]</Text>
            <Text>[DESCRIPTION: {creatureField.creatureName.toLowerCase()}]</Text>
            <Text>[DESCRIPTION: {creatureField.creatureName.toLowerCase()}]</Text>
            <Text>[DESCRIPTION: {creatureField.creatureName.toLowerCase()}]</Text>
        </Flex>
    )
}