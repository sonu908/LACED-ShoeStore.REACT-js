import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function MoreCard({ product }) {
  const navigate = useNavigate();

  const navigateToView = () => {
    // Use the navigate function to navigate to the desired route
    navigate(`/view/${product.id}`);
     // Reload the page after navigating to the new route
     window.location.reload();
  };

  // Scroll to the top of the page when the component is mounted or when a new route is navigated to
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex-shrink-0 sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={product.image_url}
          alt=""
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">
        {product.name}
      </h3>
      <Button variant="outlined" onClick={navigateToView}>View</Button>
    </div>
  );
}

export default MoreCard;
