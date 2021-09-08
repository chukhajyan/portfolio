import './Section_Three.scss';

function SectionTwo() {
  return (
    <div className="section-three-wrapper" id="projects">
      {/* <h1>PROJECTS</h1> */}

      <div className="projects-wrapper">
        <a href="http://dapp-swarm.com/" target="_blank" className="project-wrapper">
        <h2 id="project-title">DappSwarm</h2>
          
          <div className="details">
            <p>Product Development</p>
            <p>Product Management</p>
          </div>

          <div className="project-wrapper-image project-wrapper-dappswarm"></div>
        </a>

        <a href="https://altop-research.com/" target="_blank" className="project-wrapper">
          <h2 id="project-title">Altop Research</h2>
          
          <div className="details">
            <p>Product Development</p>
            <p>Product Management</p>
          </div>

          <div className="project-wrapper-image project-wrapper-altop"></div>
        </a>

        <a href="https://www.inkin.com/" target="_blank" className="project-wrapper">
          <h2 id="project-title">inKin</h2>
          
          <div className="details">
            <p>Front-End Development</p>
            <p>Mobile Development</p>
          </div>

          <div className="project-wrapper-image project-wrapper-inkin"></div>
        </a>


        <a className="project-wrapper">
          
        </a>

        <a className="project-wrapper">
          
        </a>
      </div>
    </div>
  );
}

export default SectionTwo;
