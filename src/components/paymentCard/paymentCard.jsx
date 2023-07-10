import React from 'react'
import SimpleButton from '@/components/Buttons/SimpleButton'
function PaymentCard({cardIcon,cardType,endingNumber,isPrimary = false}) {
  return (
    <>
        <div className="flex gap-x-2">
            <div className="cardIcon">{cardIcon}</div>
            <div className="cardEndingNumber">{cardType} ending in {endingNumber}</div>
        </div>
        <div className="flex gap-x-3 justify-end">
            <SimpleButton
                text={"Edit"}
                className={"border-r"}
            />
            {isPrimary && <SimpleButton
                text={"Set as primary"}
                className={"border-r"}
            />}
            <SimpleButton
                text={"Remove"}
                className={"text-red-300"}
            />
            
        </div>
    </>
  )
}

export default PaymentCard