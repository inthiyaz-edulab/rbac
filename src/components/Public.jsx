// // src/components/Public.jsx

// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";

// const Protected = ({ token }) => {
//   const isRun = useRef(false);

//   const [data, setData] = useState(null);

//   useEffect(() => {
//     if (isRun.current) return;

//     isRun.current = true;

//     const config = {
//       headers: {
//         authorization: `Bearer ${token}`,
//       },
//     };

//     axios
//       .get("/documents", config)
//       .then((res) => setData(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   return data ? (
//     <>
//       {data.map((rec, i) => (
//         <h3 key={i}>{rec}</h3>
//       ))}
//     </>
//   ) : (
//     <div>Protected</div>
//   );
// };

// export default Protected;


// src/components/Public.jsx

import React from "react";

const Public = () => {
  return <div>Welcome! Please log in to access protected content.</div>;
};

export default Public;
