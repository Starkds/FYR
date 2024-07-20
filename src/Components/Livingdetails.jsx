import React from 'react'
import Livingplace from '../cards/Livingplace';
import { Link } from 'react-router-dom';

function Livingdetails() {

    const destinationcards = [
        { id:1,  img:"./images/Places/place-1.jpg",   name:"mumbai", description:"3bhk with balcony", price:"3000/month"},
        { id:2, img:"./images/Places/place-2.jpg",   name:"bangalore", description:"3bhk with balcony", price:"3000/month"},
        { id:3, img:"./images/Places/place-3.jpg",   name:"gwalior", description:"3bhk with balcony", price:"3000/month"},
        { id:4, img:"./images/Places/place-4.jpg",   name:"ratlam", description:"3bhk with balcony", price:"3000/month"},
        { id:5, img:"./images/Places/place-5.jpg",   name:"chennai", description:"3bhk with balcony", price:"3000/month"},
        { id:6, img:"./images/Places/place-6.jpg",   name:"mathura", description:"3bhk with balcony", price:"3000/month"},
        { id:7, img:"./images/Places/place-7.jpg",   name:"mandsaur", description:"3bhk with balcony", price:"3000/month"},
        { id:8, img:"./images/Places/place-8.jpg",   name:"mumbai", description:"3bhk with balcony", price:"3000/month"},
        { id:9, img:"./images/Places/place-9.jpg",   name:"mumbai", description:"3bhk with balcony", price:"3000/month"},
        { id:10, img:"./images/Places/place-10.jpg",   name:"mumbai", description:"3bhk with balcony", price:"3000/month"},
        { id:11, img:"./images/Places/place-10.jpg",   name:"mumbai", description:"3bhk with balcony", price:"3000/month"},
        { id:12, img:"./images/Places/place-10.jpg",   name:"mumbai", description:"3bhk with balcony", price:"3000/month"},
    ]
  return (
    
    <Link>
   



    <div className='flex flex-row  ml-80  mt-28 justify-end  w-3/4 h-fit flex-wrap gap-10'>
        {destinationcards.map(card => (
            <Livingplace key={card.id} img={card.img} name={card.name} description={card.description} price={card.price} />
        ))}
        </div>
    </Link>
    
  )
}

export default Livingdetails;