import {cn} from '@/lib/utils'
import {cell, styles} from '##/index/Grid'

import Heading from '@/components/UI/Heading'
import Button from '@/components/UI/Button'

export default function ShowCell() {
  return (
    <div className={cn('relative overflow-hidden', [cell.showcase, styles])}>
      <div className="relative z-20 flex flex-col justify-between h-full sm:h-[40vh]">
        <div className="flex items-center self-center h-full gap-4 -mt-10 justify-self-center">
          <Button href="/showcase" className="px-20">
            К витрине
          </Button>
        </div>

        <Heading type="h2" className="absolute bottom-0 text-center m-7 sm:m-5">
          витрина веб-плакатов с&nbsp;фильтрами
        </Heading>
      </div>

      <div className="absolute z-10 bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/15 via-black/10 to-[#25252501]"></div>
    </div>
  )
}
