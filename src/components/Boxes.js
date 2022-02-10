import React from 'react';



function Boxes() {
  return <div>
      
      <div className='boxWork'>
            <div className='workText'>
                <h1 className='thicc'>Game</h1>
                <p className='marg2'>Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Etiam molestie hendrerit odio id lobortis.</p>
                <img className='boxImg marg1' src='./img/game.jpg' alt='games' />
                <button className='boxButton marg1'>In Progress</button>
            </div>
        </div> 
        <div className='boxWork'>
            <div className='workText'>
                <h1 className='thicc'>Art</h1>
                <p className='marg2'> Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Etiam molestie hendrerit odio id lobortis.</p>
                <img className='boxImg marg1' src='./img/art.jpg' alt='art' />
                <button className='boxButton marg1'>In Progress</button>
            </div>
        </div> 
        <div className='boxWork'>
            <div className='workText'>
                <h1 className='thicc'>Web</h1>
                <p className='marg2'>Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Etiam molestie hendrerit odio id lobortis.</p>
                <img className='boxImg marg1' src='./img/web.jpg' alt='web' />
                <button className='boxButton marg1'>In Progress</button>
            </div>
        </div>   
         
      
  </div>;
}

export default Boxes;
