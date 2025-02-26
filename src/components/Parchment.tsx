import { ReactElement } from 'react'

const Parchment = ({ classNames, children }: {
  classNames?: string
  children: ReactElement
}) => {
  return (
    <div className={`wavy-container ${classNames}`}>
      <svg width="0" height="0">
        <filter id="wavy2">
          <feTurbulence x="0" y="0" baseFrequency="0.015" numOctaves="6" seed="1" result="turbulence" />
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="15" />
        </filter>
      </svg>

      <div className="wavy-parchment">
        <div className="wavy-bg"></div>
        <div className={`content`}>{children}</div>
      </div>
    </div>
  )
}

export default Parchment
