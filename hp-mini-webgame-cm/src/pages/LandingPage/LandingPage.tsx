import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>

<span className="logo"><Link to="/notice" ><img className="flex flex-col justiyfy-center max-w-[750px] m-auto z-50" id="logo" src="/PROSOTERIA.svg" width="100%"  alt="logo" /></Link></span>


  <p className="text-sm"  id="introText">랜딩 페이지 완성 (위에 링크까지 뜨나 확인). </p>
  

  
  </div>


  );
}

export default LandingPage