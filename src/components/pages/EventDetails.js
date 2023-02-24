import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const EventDetails = () => {
  const { eventId } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/v/project_view/${eventId}`);
      const jsonData = await response.json();
      if (response.ok) {
        setData(jsonData);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [eventId]);

  return (
    <>
      <div>{!isLoading && <></>}</div>
    </>
  );
};

export default EventDetails;
