// // import React, { useEffect, useState } from 'react';
// // import { useParams } from 'react-router-dom';

// // import axiosInstance from '@/utils/axios';
// // import ReviewForm from '../components/ReviewForm';
// // import ReviewList from '../components/ReviewList';
// // import Spinner from '@/components/ui/Spinner';
// // import AddressLink from '@/components/ui/AddressLink';
// // import BookingWidget from '@/components/ui/BookingWidget';
// // import PlaceGallery from '@/components/ui/PlaceGallery';
// // import PerksWidget from '@/components/ui/PerksWidget';

// // const PlacePage = () => {
// //   const { id } = useParams();
// //   const [place, setPlace] = useState(null);
// //   const [loading, setLoading] = useState(false);

// //   useEffect(() => {
// //     if (!id) {
// //       return '';
// //     }

// //     setLoading(true);

// //     const getPlace = async () => {
// //       const { data } = await axiosInstance.get(`/places/${id}`);
// //       setPlace(data.place);
// //       setLoading(false);
// //     };
// //     getPlace();
// //   }, [id]);

// //   if (loading) {
// //     return <Spinner />;
// //   }

// //   if (!place) {
// //     return;
// //   }

// //   return (
// //     <div className="mt-4 overflow-x-hidden px-8 pt-20 ">
// //       <h1 className="text-3xl">{place.title}</h1>

// //       <AddressLink placeAddress={place.address} />
// //       <PlaceGallery place={place} />

// //       <div className="mt-8 mb-8 grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr]">
// //         <div className="">
// //           <div className="my-4 ">
// //             <h2 className="text-2xl font-semibold">Description</h2>
// //             {place.description}
// //           </div>
// //           Max number of guests: {place.maxGuests}
// //           <PerksWidget perks={place?.perks} />
// //         </div>
// //         <div>
// //           <BookingWidget place={place} />
// //         </div>
// //       </div>
// //       <div className="-mx-8 border-t bg-white px-8 py-8">
// //         <div>
// //           <h2 className="mt-4 text-2xl font-semibold">Extra Info</h2>
// //         </div>
// //         <div className="mb-4 mt-2 text-sm leading-5 text-gray-700">
// //           {place.extraInfo}
// //         </div>
// //          {/* 🔥 Reviews */}
// //       <ReviewForm placeId={id} onReviewAdded={() => window.location.reload()} />
// //       <ReviewList placeId={id} />
// //     </div>

// //       </div>
  
// //   );
// // };

// // export default PlacePage;
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// import axiosInstance from '@/utils/axios';
// import ReviewForm from '../components/ReviewForm';
// import ReviewList from '../components/ReviewList';
// import Spinner from '@/components/ui/Spinner';
// import AddressLink from '@/components/ui/AddressLink';
// import BookingWidget from '@/components/ui/BookingWidget';
// import PlaceGallery from '@/components/ui/PlaceGallery';
// import PerksWidget from '@/components/ui/PerksWidget';

// import Payment from "@/components/ui/Payment"; // If Payment.jsx is inside components folder


// const PlacePage = () => {
//   const { id } = useParams();
//   const [place, setPlace] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [showPayment, setShowPayment] = useState(false); // Track if payment component should be shown

//   useEffect(() => {
//     if (!id) {
//       return '';
//     }

//     setLoading(true);

//     const getPlace = async () => {
//       const { data } = await axiosInstance.get(`/places/${id}`);
//       setPlace(data.place);
//       setLoading(false);
//     };
//     getPlace();
//   }, [id]);

//   const handlePaymentSuccess = () => {
//     // Logic when payment is successful (e.g., navigate, show success message)
//     alert('Thank you for your booking!');
//   };

//   const handleBookNowClick = () => {
//     setShowPayment(true); // Show the Payment component when the user clicks "Book Now"
//   };

//   if (loading) {
//     return <Spinner />;
//   }

//   if (!place) {
//     return <div>Place not found</div>;
//   }

//   return (
//     <div className="mt-4 overflow-x-hidden px-8 pt-20 ">
//       <h1 className="text-3xl">{place.title}</h1>

//       <AddressLink placeAddress={place.address} />
//       <PlaceGallery place={place} />

//       <div className="mt-8 mb-8 grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr]">
//         <div className="">
//           <div className="my-4">
//             <h2 className="text-2xl font-semibold">Description</h2>
//             {place.description}
//           </div>
//           Max number of guests: {place.maxGuests}
//           <PerksWidget perks={place?.perks} />
//         </div>
//         <div>
//           {/* Show the Payment component if the user clicks "Book Now" */}
//           {showPayment ? (
//             <Payment place={place} onPaymentSuccess={handlePaymentSuccess} />
//           ) : (
//             <BookingWidget
//               place={place}
//               onBookNow={handleBookNowClick} // Trigger the payment process when clicked
//             />
//           )}
//         </div>
//       </div>

//       <div className="-mx-8 border-t bg-white px-8 py-8">
//         <div>
//           <h2 className="mt-4 text-2xl font-semibold">Extra Info</h2>
//         </div>
//         <div className="mb-4 mt-2 text-sm leading-5 text-gray-700">
//           {place.extraInfo}
//         </div>

//         {/* Reviews */}
//         <ReviewForm placeId={id} onReviewAdded={() => window.location.reload()} />
//         <ReviewList placeId={id} />
//       </div>
//     </div>
//   );
// };

// export default PlacePage;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axiosInstance from '@/utils/axios';
import ReviewForm from '../components/ReviewForm';
import ReviewList from '../components/ReviewList';
import Spinner from '@/components/ui/Spinner';
import AddressLink from '@/components/ui/AddressLink';
import BookingWidget from '@/components/ui/BookingWidget';
import PlaceGallery from '@/components/ui/PlaceGallery';
import PerksWidget from '@/components/ui/PerksWidget';

import Payment from "@/components/ui/Payment"; // Payment component

const PlacePage = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    if (!id) {
      return '';
    }

    setLoading(true);

    const getPlace = async () => {
      const { data } = await axiosInstance.get(`/places/${id}`);
      setPlace(data.place);
      setLoading(false);
    };
    getPlace();
  }, [id]);

  const handlePaymentSuccess = (booking) => {
    // Logic when payment is successful
    setShowPayment(false);
    // Could navigate or show a success message
  };

  const handleBookNowClick = (bookingDetails) => {
    setBookingData(bookingDetails);
    setShowPayment(true); // Show the Payment component when the user clicks "Book Now"
  };

  if (loading) {
    return <Spinner />;
  }

  if (!place) {
    return <div>Place not found</div>;
  }

  return (
    <div className="mt-4 overflow-x-hidden px-8 pt-20 ">
      <h1 className="text-3xl">{place.title}</h1>

      <AddressLink placeAddress={place.address} />
      <PlaceGallery place={place} />

      <div className="mt-8 mb-8 grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr]">
        <div className="">
          <div className="my-4">
            <h2 className="text-2xl font-semibold">Description</h2>
            {place.description}
          </div>
          Max number of guests: {place.maxGuests}
          <PerksWidget perks={place?.perks} />
        </div>
        <div>
          {/* Show the Payment component if the user clicks "Book Now" */}
          {showPayment ? (
            <Payment 
              place={place} 
              bookingDetails={bookingData}
              onPaymentSuccess={handlePaymentSuccess} 
            />
          ) : (
            <BookingWidget
              place={place}
              onBookNow={handleBookNowClick} // Pass booking data to payment
            />
          )}
        </div>
      </div>

      <div className="-mx-8 border-t bg-white px-8 py-8">
        <div>
          <h2 className="mt-4 text-2xl font-semibold">Extra Info</h2>
        </div>
        <div className="mb-4 mt-2 text-sm leading-5 text-gray-700">
          {place.extraInfo}
        </div>

        {/* Reviews */}
        <ReviewForm placeId={id} onReviewAdded={() => window.location.reload()} />
        <ReviewList placeId={id} />
      </div>
    </div>
  );
};

export default PlacePage;