import React from 'react'

const Explore = () => {
  return (
    <section>
        <div>
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
    </section>
  )
}

export default Explore