import React from 'react'
import { Link } from 'react-router-dom'
const Explore = () => {
  return (
    <section>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '115vh', boxShadow: '1 4px 8px rgba(1, 0, 0, 0.5)', borderRadius: '8px' }}>
            <div>
                <select name="By Place" id="">
                    <option value="1">maharastra</option>
                    <option value="2">Gujarat</option>
                    <option value="3">Himachal</option>
                    <option value="4">kashmir</option>
                    <option value="5">jammu</option>
                    <option value="6"></option>
                    <option value="7"></option>
                    <option value="8"></option>
                    <option value="9"></option>
                </select>
            </div>
            <div>
            <select name="By Catagory" id="">
                    <option value="1">Historical</option>
                    <option value="2">Thriller</option>
                    <option value="3">Romantic</option>
                    <option value="4">Calmer</option>
                    <option value="5">jammu</option>
                    <option value="6"></option>
                    <option value="7"></option>
                    <option value="8"></option>
                    <option value="9"></option>
                </select>
            </div>
        </div>
        <Link to='/explore'><button className='text-[25px] w-[10rem] h-[2.9rem] rounded-xl bg-[black] text-[white] hover:text-[green] duration-[0.4s]' type="button">Explore</button></Link>
    </section>
  )
}

export default Explore