import React from 'react'
import HeroCarousel from '../component/Hero'
import { FeaturedCategories } from '../component/FeaturedCategories'
import { ProductGrid }  from '../component/BestSeller'
import  Testimonials  from '../component/Testimonials'
import  WhyChooseUs  from '../component/WhyChooseUs'

const Home = () => {
  return (
    <>
    <HeroCarousel />
    <FeaturedCategories />
    <ProductGrid />
    <Testimonials />
    <WhyChooseUs />
    </>
  )
}

export default Home