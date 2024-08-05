import {cn} from '@/lib/utils'
import {cell, styles} from '##/index/Grid'

import Heading from '@/components/UI/Heading'

import GithubImage from '%/images/index/github-logo.svg'
import FigmaImage from '%/images/index/figma-logo.svg'
import LinksGridImage from '%/images/index/links-grid.svg'

const linksData = {
  github: {
    link: 'http://github.com/bozzhik',
    icon: GithubImage,
  },
  figma: {
    link: 'http://github.com/bozzhik',
    icon: FigmaImage,
  },
}

export default function LinksCell() {
  return (
    <div className={cn('relative overflow-hidden', [cell.links, styles])}>
      <div className="relative z-20 flex flex-col justify-between h-full sm:h-[40vh]">
        <div className="flex items-center self-center h-full gap-4 -mt-12 justify-self-center">
          {Object.entries(linksData).map(([key, {link, icon}]) => (
            <a className="hover:scale-105 hover:saturate-0 duration-300 bg-neutral-950/40 p-5 xl:p-4 rounded-[14px] s-fit" href={link} target="_blank" key={key}>
              <img className="s-24 xl:s-16 sm:s-20" src={icon.src} />
            </a>
          ))}
        </div>

        <Heading type="h2" className="absolute bottom-0 text-center m-7 sm:m-5">
          мы собрали материалы для старта проекта
        </Heading>
      </div>

      <img className="absolute top-0 object-cover w-full h-full rotate-180" src={LinksGridImage.src} />
      <div className="absolute z-10 bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/15 via-black/10 to-[#25252501]"></div>
    </div>
  )
}
