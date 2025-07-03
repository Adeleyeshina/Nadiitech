import React, { useEffect } from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useProductStore } from '../../stores/useProductStore';
import LoadingSpinner from '../LoadingSpinner';
import ProductPageCta from './ProductPageCta';
import { FaArrowLeft, FaCircleCheck } from 'react-icons/fa6';
import { useUserStore } from '../../stores/useUserStore';
import { useCartStore } from '../../stores/useCartStore';
import ImageGallery from 'react-image-gallery';
import { toast } from 'react-hot-toast'
import "react-image-gallery/styles/css/image-gallery.css";
import { MdBlock } from 'react-icons/md';

const ShowProductDetail = () => {
  const { addToCart } = useCartStore();
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProductDetails, productDetails, loading, recommendedProduct, getRecommendedProduct } = useProductStore();

  useEffect(() => {
    getProductDetails(id, navigate);
    getRecommendedProduct();
  }, [id]);

  const { user } = useUserStore();

  const handleAddToCart = () => {
    if (!user) {
      navigate("/login");
    } else {
      if (productDetails.soldOut) {
        return toast.error('Out of stock')
      } else {
        addToCart(productDetails);
      }
    }
  };

  const galleryItems = productDetails?.images?.map((img) => ({
    original: img,
    thumbnail: img,
  })) || [];

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <NavBar />

      <section className="">
        <span
          onClick={() => navigate("/products")}
          className="flex gap-2 text-primary text-lg items-center font-normal mb-5 cursor-pointer"
        >
          <FaArrowLeft size={25} />
          Back to Products
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className='shadow-sm rounded-lg'>
            {galleryItems.length > 0 && (
              <ImageGallery
                items={galleryItems}
                showPlayButton={false}
                showFullscreenButton={true}
                showIndex={true}
                additionalClass="w-full"
                renderItem={(item) => (
                  <div className="w-full h-full">
                    <img
                      src={item.original}
                      alt=""
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                )}
              />
            )}
          </div>

          <div>
            <h2 className="text-xl md:text-4xl font-bold">{productDetails?.name}</h2>
            <p className="font-bold mt-3 text-3xl">₦{productDetails?.price.toLocaleString()}</p>
            {
              productDetails?.soldOut ? (
                <p className="mt-3 text-red-700 font-medium text-lg flex gap-2 items-center">
                  <MdBlock size={24} /> Out of stock
                </p>
              ) :
                (
                  <p className="mt-3 text-green-500 font-medium text-lg flex gap-2 items-center">
                    <FaCircleCheck size={24} /> In stock
                  </p>
                )
            }
            <div className="mt-5">
              <h5 className="font-bold text-lg">Description</h5>
              <p className="font-normal text-lg">{productDetails?.description}</p>
            </div>

            <button
              className="flex mt-5 item-center justify-center rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:cursor-pointer focus:outline-none focus:ring-4 focus:ring-secondary"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>
        </div>

        {/* Recommended products */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-7">
            {recommendedProduct.map((product) => {
              if (product._id !== id) {
                return (
                  <div key={product._id} className="rounded-lg shadow-lg">
                    <Link to={`/products/details/${product._id}`}>
                      <div>
                        <img
                          src={product?.featuredImage}
                          alt={product.name}
                          className="h-[200px] overflow-hidden object-cover w-full rounded-t-lg"
                        />
                        <div className="px-5">
                          <h3 className="font-bold text-[1.2rem]">{product.name}</h3>
                        </div>
                      </div>
                      <div className="px-5 pb-7 flex justify-between">
                        <p className="font-semibold mb-3 text-2xl">
                          ₦{product.price.toLocaleString()}
                        </p>
                        <button className="flex item-center justify-center rounded-lg bg-primary p-3 text-center text-sm font-medium text-white hover:cursor-pointer focus:outline-none focus:ring-4 focus:ring-secondary">
                          View
                        </button>
                      </div>
                    </Link>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </section>

      <ProductPageCta />
      <Footer />
    </div>
  );
};

export default ShowProductDetail;
