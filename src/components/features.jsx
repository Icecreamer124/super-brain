import React from 'react';
import { LuListTodo } from "react-icons/lu";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { SlNote } from "react-icons/sl";
import { LuFileStack } from "react-icons/lu";

const Features = () => {
  return (
    <section className='features' >
        <div className='features-header' >
            <div className='ftb'><p>features</p></div>
            <div className='features-txt' >
                <h3><span>all</span> the productivity tools <span>you need</span></h3>
                <p>all in one place ...</p>
            </div>
        </div>
        <div class="grid-container">
            <div class="grid-item">
              <div className='item-container' >
                <div className='item-header'>
                  <LuListTodo/>
                  <h1>built in todo list</h1>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, accusantium.
                  </p>
                </div>
              </div>
            </div>
            <div class="grid-item">
              <div className='item-container' >
                <div className='item-header'>
                  <IoCalendarNumberOutline/>
                  <h1>never miss a meeting</h1>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, accusantium.
                  </p>
                </div>
              </div>
            </div>
            <div class="grid-item">
              <div className='item-container' >
                <div className='item-header'>
                  <SlNote/>
                  <h1>plan like a pro</h1>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, accusantium.
                  </p>
                </div>
              </div>
            </div>
            <div class="grid-item">
              <div className='item-container' >
                <div className='item-header'>
                  <LuFileStack/>
                  <h1>store and manage files</h1>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, accusantium.
                  </p>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
};

export default Features;