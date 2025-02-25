import { ReactElement, useEffect, useRef } from 'react'

const Parchment = ({ classNames, children }: {
  classNames?: string
  children: ReactElement
}) => {
  const parchmentRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        // setHeight(contentRef.current.offsetHeight)
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
      <svg width="0" height="0">
        <filter id="wavy2" color-interpolation-filters="sRGB">
          <feTurbulence x="0" y="0" baseFrequency="0.015" numOctaves="6" seed="1" result="turbulence" />
          <feDisplacementMap in2="turbulence" scale="15" />
        </filter>
      </svg>

      <div className="wavy-parchment" ref={parchmentRef}>
        <div className="wavy-bg "></div>
        <div ref={contentRef} className={`content `}>{children}</div>
      </div>
    </div>
  )
}

export default Parchment
