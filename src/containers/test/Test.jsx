import React from 'react'
import './test.css';

const Test = () => {
  return (
    // <div>
    //     <h1>Responsive Flexbox</h1>
    //     <p>The "flex-direction: row;" stacks the flex items horizontally (from left to right).</p>
    //     <p>The "flex-direction: column;" stacks the flex items vertically (from top to bottom).</p>
    //     <p><b>Resize the browser window to see that the direction changes when the 
    //     screen size is 800px wide or smaller.</b></p>
    //     <div className="flex-container">
    //         <div className="flex-item-left">1</div>
    //         <div className="flex-item-middle">2</div>
    //         <div className="flex-item-right">3</div>
    //     </div>
    // </div>
    <div className="flex-header">
        <div className="flex-header-content">
            <h1>Earn a degree or certificate online  with a schedule that works for you.</h1>
            <p>Study anywhere with online courses and no-cost digital course materials.</p>
            <div className="flex-header-content_input">
                <button type="button">Apply</button>
            </div>
        </div>
        <div className="flex-header-queryBox"></div>
    </div>

  )
}

export default Test