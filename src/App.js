import { useEffect, useState } from "react";
import "./App.css";
import { FaArrowDown , FaArrowUp } from "react-icons/fa";

function App() {
  const [scrollPercentage, setScrollPercentage] = useState(0)
  
  
  useEffect(() => {
    window.addEventListener( "scroll", ()=>{
      const sp = (( window.scrollY) /(document.documentElement.scrollHeight - window.innerHeight)) *100;
      setScrollPercentage(sp)
    })
  }, [window.scrollY])

  const handleScroll = (val)=>{
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollToPosition = (val / 100) * scrollHeight;
    window.scrollTo({
      top:scrollToPosition
    })
  }
  
  
  return (
    <>
      <div style={{width:`${scrollPercentage}%`}} className="scroll-indicator"></div>
      <div className="container">

        <h1>Scroll indicator</h1>
        
       deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sunt facere voluptatem nemo voluptate cumque perferendis ea inventore debitis tempore  <br /> <br />  <br /> <br /> <br />  deleniti dolores laudantium officia, non sit quisquam. Voluptates quas iste molestias deleniti? Dolor nihil, quibusdam placeat quod laborum unde nisi praesentium tenetur nam modi sapiente quidem, magnam quas dolorem magni. Voluptatibus architecto odio sequi expedita vitae assumenda. Culpa eos officiis aut ab, provident <br /> <br />  <br /> <br /> <br />  alias? Corrupti molestias modi eos blanditiis doloremque aut. Sit voluptates, porro explicabo omnis laborum ducimus non fuga tempora voluptate quaerat incidunt eligendi perspiciatis quo perferendis atque facere, labore molestias nisi quae aliquid hic dolor a veniam. Voluptas?

        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, vero illo facere provident suscip\<br /> <br />  <br /> <br /> <br /> 
        consectetur adipisicing elit. Delectus, excepturi ea. Pariatur possimus corrupti harum unde aperiam, id distinctio, aut delectus exercitationem voluptas autem, cupiditate veniam sed eaque velit nesciunt neque! In illum doloribus accusantium. Quasi autem soluta enim corrupti vel dicta reprehenderit alias error laboriosam nihil saepe laborum hic nesciunt, totam provident at eveniet odit dolores repellat. Labore odit iusto nam dignissimos vero repellat atque voluptatibus. Cumque excepturi  <br /> <br />  <br /> <br /> <br /> , quos voluptates eaque tempore aliquam dolorem <br /> Quia, quaerat fugiat. Odio, similique. Provident eaque maiores natus officia minus nisi voluptates, harum nobis, libero quod aspernatur nostrum praesentium consequuntur sequi autem deserunt? Nisi iste vel aperiam illum eos rem minima eaque. Eaque vero minus, dolores aspernatur officia sed illo itaque nihil unde saepe voluptatum adipisci culpa, assumenda molestias <br /> <br />  <br /> <br /> <br />   modi! Molestias blanditiis, laborum adipisci, illo omnis facilis laudantium +<br />t voluptatibus, impedit, iste sunt cupiditate iusto saepe voluptates ducimus quae voluptatum cumque, assumenda alias
      </div>

      <button className="scrollbar down" onClick={()=>handleScroll(100)} > <FaArrowDown/> </button>
      <button className="scrollbar up" onClick={()=>handleScroll(0)} > <FaArrowUp/> </button>
      
    </>
  );
}

export default App;
