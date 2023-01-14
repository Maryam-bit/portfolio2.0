import React, {useRef} from 'react'
import { Link } from "react-router-dom"
import NavbarBottomStyles from './NavbarBottom.module.scss'


const NavigationBar = ({ setDarkTheme, darkTheme }) => {
  const navItem1 = useRef(null)
  const navItem2 = useRef(null)
  const navItem3 = useRef(null)
  const navItem4 = useRef(null)
  const navItem5 = useRef(null)
  const navItem6 = useRef(null)
  const navItem7 = useRef(null)
  const hovering = (id) => {
    // navItem1.current.style.transform = 'scale(2)'
     // for left side
     let initialScale = 2
     let marginX = 30
     let marginB = 27;
    for(let i=id; i>=1; i--){
      if(initialScale>1) {
        eval(`navItem${i}`).current.style.transform = `scale(${initialScale})`
        eval(`navItem${i}`).current.style.bottom =`${marginB}px`
        if(id !== i) {
          eval(`navItem${i}`).current.style.margin =`0 ${marginX}px 0 ${marginX}px`
        }
      }
      else eval(`navItem${i}`).current.style.transform = `scale(1)`
      initialScale-=0.36
      marginX -= 11
      marginB -= 10
    }

    // for right side
    let initialRightScale = 2
    let marginRightX = 30;
    let marginRightB = 27;
    for(let i=id; i<=7; i++){
      if(initialRightScale>1) {
      eval(`navItem${i}`).current.style.transform = `scale(${initialRightScale})`
      eval(`navItem${i}`).current.style.bottom =`${marginRightB}px`
      eval(`navItem${i}`).current.style.margin =`0 ${marginRightX}px 0 ${marginRightX}px`
      }
      initialRightScale-=0.36
      marginRightX -= 11
      marginRightB -= 10
    }
  }

  const hoverOut = (id) => {
    for(let i=1; i<=7; i++){
      // console.log(i)
      eval(`navItem${i}`).current.style.transform = `scale(1.7)`
      eval(`navItem${i}`).current.style.transform = `scale(1.3)`
      eval(`navItem${i}`).current.style.transform = `scale(1)`
      eval(`navItem${i}`).current.style.bottom ='0px'
      eval(`navItem${i}`).current.style.margin ='8px 4px'

      // eval(`navItem${i}`).current.style.margin = '8px'
    }
  }
  return (
    <div className={NavbarBottomStyles.navigation_bar}>
      <div className={`${NavbarBottomStyles.navbar_child} app-navbar`}>
        <Link to="/">
          <i ref={navItem1} onMouseOver={() => hovering(1)} onMouseOut={() => hoverOut(1)} className={`${NavbarBottomStyles.icon_3d} fa fa-house-damage icon_3d`}></i>
        </Link>
        <Link  to="projects">
          <i ref={navItem2} onMouseOver={() => hovering(2)} onMouseOut={() => hoverOut(2)} className={`${NavbarBottomStyles.icon_3d} fa fa-lightbulb icon_3d`}></i>
        </Link>
        <Link to="services">
          <i  ref={navItem3} onMouseOver={() => hovering(3)} onMouseOut={() => hoverOut(3)} className={`${NavbarBottomStyles.icon_3d} fas fa-hand-holding icon_3d`}></i>
        </Link>
        <a href="https://github.com/Maryam-bit" target="_blank">
          <i ref={navItem4} onMouseOver={() => hovering(4)} onMouseOut={() => hoverOut(4)} className={`${NavbarBottomStyles.icon_3d} fab fa-github icon_3d`}></i>
        </a>
        <a href="https://www.linkedin.com/in/maryam-noor-/" target="_blank">
          <i ref={navItem5} onMouseOver={() => hovering(5)} onMouseOut={() => hoverOut(5)} className={`${NavbarBottomStyles.icon_3d} fab fa-linkedin icon_3d`}></i>
        </a>
        {
          darkTheme == false ?
            <i ref={navItem6} onMouseOver={() => hovering(6)} onMouseOut={() => hoverOut(6)} className={`${NavbarBottomStyles.icon_3d} fas fa-sun icon_3d`} onClick={() => { setDarkTheme(true) }}></i>
            :
            <i ref={navItem6} onMouseOver={() => hovering(6)} onMouseOut={() => hoverOut(6)} className={`${NavbarBottomStyles.icon_3d} fad fa-moon-stars icon_3d`} onClick={() => { setDarkTheme(false) }}></i>
        }
        <Link to="/blogs">
          <i ref={navItem7} onMouseOver={() => hovering(7)} onMouseOut={() => hoverOut(7)} className={`${NavbarBottomStyles.icon_3d} fad fa-pencil icon_3d`} ></i>
        </Link>
        {/* <i className="fad fa-volume icon-3d"></i> */}
        {/* <i className="fad fa-box-full icon-3d"></i> */}
        {/* <i className="fad fa-brackets-curly icon-3d"></i> */}
        {/* <i className="fas fa-chess-queen icon-3d"></i> */}
      </div>
    </div>
  )
}

export default NavigationBar