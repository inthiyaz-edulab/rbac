// // src/components/Protected.jsx

// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";

// const Protected = ({ token }) => {
//   const isRun = useRef(false);
//   const [data, setData] = useState(null);
// console.log('data',data);

//   useEffect(() => {
//     if (isRun.current) return;
//     isRun.current = true;

//     const config = {
//       headers: {
//         authorization: `Bearer ${token}`, // Corrected template literal syntax
//       },
//     };

//     axios
//       .get("/documents", config)
//       .then((res) => setData(res.data))
//       .catch((err) => console.error(err));
//   }, [token]); // Ensure token change re-runs effect if necessary

//   return data ? (
//     <>
//       {data.map((rec, i) => (
        
//         <h3 key={i}>{rec.name || rec}</h3> // Adjust to display data properly
//       ))}
//     </>
//   ) : (
//     <div>Protected</div>
//   );
// };

// export default Protected;

// src/components/Protected.jsx

import React from "react";

const Public = () => {
  return <div>Welcome! protected content.</div>;
};

export default Public;