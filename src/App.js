import React from 'react';

import logo from './logo.svg';
import alanRails from './images/alan-rails.jpeg'
import beardedLady from './images/bearded-lady.jpeg'
import './App.css';

const CHARACTER_ENDPOINT = "https://rickandmortyapi.com/api/character";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCharacters : []
    }
  }


  generateRandomNumber(max) {
    return Math.floor(Math.random() * max)
  }
  componentDidMount() {
    fetch(CHARACTER_ENDPOINT).then(res => res.json()).then(formattedRes => {
      const {results} = formattedRes;
      let firstIndex = this.generateRandomNumber(results.length);
      let secondIndex = this.generateRandomNumber(results.length);

      let firstElement = results[firstIndex];
      let secondElement = results[secondIndex];
      let newSelectedCharacters = [firstElement, secondElement]
      this.setState({
        selectedCharacters: newSelectedCharacters
      }, () => console.log(this.state))
    })
  }

  render() {
    return (
        <div className = "outer-container">

          {
            this.state.selectedCharacters.map(({name, image, status, species, gender, origin: {name: OriginName}, location: {name: locationName}}) => (
                <article>
                  <div>
                    <img src={image}/>
                   <h5>{name}</h5>
                  </div>

                  <div className ="attribute-container">
                    <div className="attribute-row-container">
                      <div>Status</div>
                      <div>{status}</div>
                    </div>
                    <div className="attribute-row-container">
                      <div>Species</div>
                      <div>{species}</div>
                    </div>
                    <div className="attribute-row-container">
                      <div>Gender</div>
                      <div>{gender}</div>
                    </div>
                    <div className="attribute-row-container">
                      <div>Origin</div>
                      <div>{OriginName}</div>
                    </div>
                    <div className="attribute-row-container">
                      <div>Last Location</div>
                      <div>{locationName}</div>
                    </div>
                  </div>
                </article>
            ))
          }
          {/*<article>*/}
          {/*  <div>*/}
          {/*    <img src={alanRails}/>*/}
          {/*    <h5>Alan Rails</h5>*/}
          {/*  </div>*/}
          {/*  <div className ="attribute-container">*/}
          {/*    <div className="attribute-row-container">*/}
          {/*      <div>STATUS</div>*/}
          {/*      <div>Dead</div>*/}
          {/*    </div>*/}
          {/*    <div className="attribute-row-container">*/}
          {/*      <div>SPECIES</div>*/}
          {/*      <div>Human, Superhuman (Ghost trains summoner)</div>*/}
          {/*    </div>*/}
          {/*    <div className="attribute-row-container">*/}
          {/*      <div>GENDER</div>*/}
          {/*      <div>Male</div>*/}
          {/*    </div>*/}
          {/*    <div className="attribute-row-container">*/}
          {/*      <div>ORIGIN</div>*/}
          {/*      <div>unknown</div>*/}
          {/*    </div>*/}
          {/*    <div className="attribute-row-container">*/}
          {/*      <div>LAST LOCATION</div>*/}
          {/*      <div>Worldender's lair</div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</article>*/}
          {/*<article>*/}
          {/*  <div>*/}
          {/*    <img src="images/bearded-lady.jpeg" alt="Bearded Lady"/>*/}
          {/*    <h5>Bearded Lady</h5>*/}
          {/*  </div>*/}
          {/*  <div>*/}
          {/*    <div>*/}
          {/*      <div>STATUS</div>*/}
          {/*      <div>Dead</div>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <div>SPECIES</div>*/}
          {/*      <div>Alien, Parasite</div>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <div>GENDER</div>*/}
          {/*      <div>Female</div>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <div>ORIGIN</div>*/}
          {/*      <div>unknown</div>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <div>LAST LOCATION</div>*/}
          {/*      <div>Earth (Replacement Dimension)</div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</article>*/}
          {/*<article>*/}
          {/*  <div>*/}
          {/*    <img src="images/doofus-rick.jpeg" alt="Doofus Rick"/>*/}
          {/*    <h5>Doofus Rick</h5>*/}
          {/*  </div>*/}
          {/*  <div>*/}
          {/*    <div>*/}
          {/*      <div>STATUS</div>*/}
          {/*      <div>unknown</div>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <div>SPECIES</div>*/}
          {/*      <div>Human</div>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <div>GENDER</div>*/}
          {/*      <div>Male</div>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <div>ORIGIN</div>*/}
          {/*      <div>Earth (J19ζ7)</div>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <div>LAST LOCATION</div>*/}
          {/*      <div>Earth (Replacement Dimension)</div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</article>*/}
          {/*<article>*/}
          {/*  <div>*/}
          {/*    <img src="images/greasy-grandma.jpeg" alt="Greasy Grandma"/>*/}
          {/*    <h5>Greasy Grandma</h5>*/}
          {/*  </div>*/}
          {/*  <div>*/}
          {/*    <div>*/}
          {/*      <div>STATUS</div>*/}
          {/*      <div>Alive</div>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <div>SPECIES</div>*/}
          {/*      <div>Human, Grandma</div>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <div>GENDER</div>*/}
          {/*      <div>Female</div>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <div>ORIGIN</div>*/}
          {/*      <div>Greasy Grandma World</div>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <div>LAST LOCATION</div>*/}
          {/*      <div>Greasy Grandma World</div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</article>*/}
          {/*<article>*/}
          {/*  <div>*/}
          {/*    <img src="images/seal-team-rick.jpeg" alt="SEAL Team Rick"/>*/}
          {/*    <h5>SEAL Team Rick</h5>*/}
          {/*  </div>*/}
          {/*  <div>*/}
          {/*    <div>*/}
          {/*      <div>STATUS</div>*/}
          {/*      <div>Dead</div>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <div>SPECIES</div>*/}
          {/*      <div>Human</div>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <div>GENDER</div>*/}
          {/*      <div>Male</div>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <div>ORIGIN</div>*/}
          {/*      <div>unknown</div>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <div>LAST LOCATION</div>*/}
          {/*      <div>Citadel of Ricks</div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</article>*/}
          {/*<article>*/}
          {/*  <div>*/}
          {/*    <img src="images/morphizer-xe-customer-support.jpeg" alt="Morphizer-XE Customer Support"/>*/}
          {/*    <h5>Morphizer-XE Customer Support</h5>*/}
          {/*  </div>*/}
          {/*  <div>*/}
          {/*    <div>*/}
          {/*      <div>STATUS</div>*/}
          {/*      <div>unknown</div>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <div>SPECIES</div>*/}
          {/*      <div>Alien</div>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <div>GENDER</div>*/}
          {/*      <div>Male</div>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <div>ORIGIN</div>*/}
          {/*      <div>unknown</div>*/}
          {/*    </div>*/}
          {/*    <div>*/}
          {/*      <div>LAST LOCATION</div>*/}
          {/*      <div>Earth (Replacement Dimension)</div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</article>*/}
        </div>
    );
  }

}

export default App;
