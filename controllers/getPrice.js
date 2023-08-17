// import { PriceDigiflazz } from "../digiflazz/getDataPrice.js"

// export const getPrice = async () => {
//     const responseData = await PriceDigiflazz()
//     const kategoriBrandObj = {};

//     // Mengelompokkan data berdasarkan kategori dan brand
//     responseData.forEach(item => {
//       const kategori = item.category;
//       const brand = item.brand;
      
//       if (!kategoriBrandObj[kategori]) {
//         kategoriBrandObj[kategori] = {};
//       }
      
//       if (!kategoriBrandObj[kategori][brand]) {
//         kategoriBrandObj[kategori][brand] = [];
//       }
      
//       kategoriBrandObj[kategori][brand].push(item);})
//       for (const kategori in kategoriBrandObj) {
//         console.log(`Kategori: ${kategori}`);
//         for (const brand in kategoriBrandObj[kategori]) {
//           console.log(`- Brand: ${brand}`);
//           console.table(kategoriBrandObj[kategori][brand]);
//         }
//         console.log('---');
//       }
//     }