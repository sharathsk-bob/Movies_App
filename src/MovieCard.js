import React from 'react'
import './MovieCard.css'

function MovieCard(props) {
const API_IMAGE="https://image.tmdb.org/t/p/w500"
  return (
    <div className='card'>
        <div className='poster'>
            <img src={props.poster_path? API_IMAGE+props.poster_path:"https://images.unsplash.com/photo-1597575732103-9f6d068cfa9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV0ZmxpeHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"} alt="cardImage"/>
        </div>
        <div className='info'>
            <p className='title'>{props.title}</p>
            <p className='vote'>{props.vote_average}</p>
        </div>
        <div className='overview'>
          <h2 className='title_overview'>OverView</h2>
          <h3 className='overview_info'>{props.overview}</h3>
        </div>
    </div>
  )
}

export default MovieCard
