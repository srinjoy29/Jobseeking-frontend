import React, { useContext } from 'react'
import {Context} from "../../main"
import {Link} from "react-router-dom"
import { FaGithub , FaLinkedin} from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";
import { RiInstagramFill} from "react-icons/ri"
function Footer() {
  const {isAuthorized}  = useContext(Context)
  return (
    <footer className= {isAuthorized ? "footerShow" : "footerHide"}>
<div>&copy; All Rights Reserved by Srinjoy Das.</div>
<div>
  <Link to={'https://github.com/srinjoy29'} target='github'><FaGithub></FaGithub></Link>
  <Link to={'https://leetcode.com/u/srinjoydas0212/'} target='leetcode'><SiLeetcode></SiLeetcode></Link>
  <Link to={'linkedin.com/in/srinjoy-das-589a95206/'} target='linkedin'><FaLinkedin></FaLinkedin></Link>
  <Link to={'https://www.instagram.com/srinjoyhere/'} target='instagram'><RiInstagramFill></RiInstagramFill></Link>
</div>
      
    </footer>
  )
}

export default Footer