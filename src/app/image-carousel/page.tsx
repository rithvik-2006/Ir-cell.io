import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function ImageCarousel() {
  return (
    <div className="carousel-container">
    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://ir.iith.ac.in/assets/images/home/Jaykishan%20Pipaliya.jpeg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://ir.iith.ac.in/assets/images/home/Jaykishan%20Pipaliya.jpeg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://ir.iith.ac.in/assets/images/home/Jaykishan%20Pipaliya.jpeg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
  )
}
