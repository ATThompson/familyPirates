import { ReactElement, useEffect, useRef, useState } from 'react'

const Parchment = ({ classNames, children }: {
  classNames?: string
  children: ReactElement
}) => {
  const parchmentRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        setHeight(contentRef.current.offsetHeight)
      }
    }

    // Met à jour au chargement initial
    updateHeight()

    // Observe les changements dans le contenu
    const observer = new MutationObserver(() => {
      updateHeight()
    })

    if (contentRef.current) {
      observer.observe(contentRef.current, { childList: true, subtree: true, characterData: true })
    }

    // Écoute aussi le redimensionnement de la fenêtre
    window.addEventListener('resize', updateHeight)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updateHeight)
    }
  }, [])

  return (
    <div className={`wavy-container ${classNames}`}>
      <svg className="hidden">
        <filter id="wavy2">
          <feTurbulence x="0" y="0" baseFrequency="0.01 0.015" numOctaves="6" seed="1" result="turbulence" />
          <feTurbulence x="0" y="0" baseFrequency="0.0005" numOctaves="2" seed="1" result="turbulence" />
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="15" />
        </filter>
      </svg>

      <div className="wavy-parchment" ref={parchmentRef} style={{ height, transition: 'height 0.3s ease-in-out' }}>
        <div className="wavy-bg "></div>
        <div ref={contentRef} className={`content `}>{children}</div>
      </div>
    </div>
  )
}

export default Parchment
