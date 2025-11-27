import "./App.css";
import reactimg from './assets/umbrella.png'
import reactimg2 from './assets/99design.png'

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="left">
            <div className="tag">it's me</div>

            <h1 className="title">Kenedy Jackson</h1>

            <p className="subtitle">
              Senior Creative <span>Designer</span> and <br /> Content <span style={{color:"grey"}}>Developer</span>
            </p>

            <a href="#" className="btn">Hire Me</a>

            
          </div>

          <div className="right">
            
          </div>
        </div>
        <div className="right">
            <img src="pro.jpg" alt="" />
        </div>
      </section>

      <div className="brands">
         <img src="forbes.png"  />
          <img src={reactimg}  />
         <img src={reactimg2}  />
          <img src="colorlib.png"  />
          <img src="awwwards.png"  />
</div>


    </>
  );
}

export default Hero;
