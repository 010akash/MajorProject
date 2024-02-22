import React from 'react'
import "../App.css"

const Card = () => {
  return (
    <div className="card-container">
        <div className="card">
            <div className="front-content">
                <p>Hover me</p>
            </div>
            <div className="content">
                <p className="heading">Card Hover</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipii
                    voluptas ten mollitia pariatur odit, ab
                    minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                    necessitatibus dignissimos molestias.
                </p>
            </div>
        </div>
    </div>

  )
}

export default Card;
