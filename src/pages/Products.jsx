import React, { useEffect } from 'react'
import LoadingSpinner from '../component/LoadingSpinner'
import { useProductStore } from '../stores/useProductStore'
import PagesHeader from '../component/PagesHeader'
import ProductBg from '../assets/images/product-bg.webp'
import AllProducts from '../component/productsPageComponent/AllProducts'
import ProductPageCta from '../component/productsPageComponent/ProductPageCta'

const Products = () => {
  const {fetchAllProducts, loading} = useProductStore()

  useEffect(() => {
    fetchAllProducts()
  }, [fetchAllProducts])
  if (loading) return <LoadingSpinner />
  return (
    <div>
      <PagesHeader  page="Products" title={"Smart Products for Smarter Living"}
        img={ProductBg}
        body={"Explore reliable and innovative electrical products designed to make your life easier."}
        ctaText={"Request installation"}
        ctaNav={"/book"}
      />
      <AllProducts />
      <ProductPageCta />
    </div>
  )
}

export default Products