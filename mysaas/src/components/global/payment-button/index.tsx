import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {}

const PaymentButton = (props: Props) => {
  return (
    <Button className='bg-gradient-to-br text-white rounded-full from-[#9685db] via-[#9434e6] font-bold to-[#cc3bd4] '>Upgrade</Button>
  )
}

export default PaymentButton