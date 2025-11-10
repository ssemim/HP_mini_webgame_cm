import { Link } from 'react-router-dom'

const NoticePage = () => {
  return (
    <div>

  
<span className="logo"><Link to="/notice" ><img className="flex flex-col justiyfy-center max-w-[750px] m-auto z-50" id="logo" src="/PROSOTERIA.svg" width="100%"  alt="logo" /></Link></span>


  <p className="text-sm"  id="introText"> 공지사항 페이지 (위에 링크까지 뜨나 확인). </p>
  

  
  </div>


  );
}

export default NoticePage