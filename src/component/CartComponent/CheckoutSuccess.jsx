import React, { useEffect, useState } from 'react';
import axios from '../../lib/axios';
import { useLocation, useNavigate } from 'react-router-dom'; 
import { toast } from 'react-hot-toast';
import { useCartStore } from '../../stores/useCartStore';

const CheckoutSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyPayment = async () => {
      const params = new URLSearchParams(location.search);
      const reference = params.get("reference");

      if (!reference) {
        toast.error("No reference found");
        navigate("/");
        return;
      }

      try {
        const res = await axios.get(`/payments/verify/${reference}`);
        if (res.data.status === "success") {
          toast.success("Payment successful! Order placed.");
          navigate("/account/order"); // or any success page
        } else {
          toast.error("Payment was not successful.");
          navigate("/cart");
        }
      } catch (err) {
        toast.error("Verification failed");
        navigate("/cart");
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, [location, navigate]);

  return (
    <div className="p-6 text-center">
      <h2 className="text-xl font-semibold">
        {loading ? "Verifying Payment..." : "Redirecting..."}
      </h2>
    </div>
  );
};

export default CheckoutSuccess;
