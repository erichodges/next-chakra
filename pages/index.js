// import Head from 'next/head'
// import Image from 'next/image'
import {Button} from '@chakra-ui/react'
import { DarkModeSwitch } from '../src/components/DarkModeSwitch'

export default function Home() {
  return (
    <div>
      <DarkModeSwitch/>
      <div variant="solid">
        <Button color='blue.100' bgColor='darkgray' size='lg'>yodle de</Button>
      </div>
    </div>
  )
}
