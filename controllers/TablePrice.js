import { PriceDigiflazz } from "../digiflazz/getDataPrice.js";

export const table = async (req, res) => {
    try {
  
      const responseData = await PriceDigiflazz()
  
      // Membuat objek kosong untuk mengelompokkan data berdasarkan kategori dan brand
      const kategoriBrandObj = {};
  
      // Mengelompokkan data berdasarkan kategori dan brand
      responseData.forEach(item => {
        const kategori = item.category;
        const brand = item.brand;
  
        if (!kategoriBrandObj[kategori]) {
          kategoriBrandObj[kategori] = {};
        }
  
        if (!kategoriBrandObj[kategori][brand]) {
          kategoriBrandObj[kategori][brand] = [];
        }
  
        kategoriBrandObj[kategori][brand].push(item);
      });
  
      // Membuat HTML untuk tabel
      let htmlTable = '<h1>Data Display</h1>';
  
      for (const kategori in kategoriBrandObj) {
        htmlTable += `<h2>Kategori: ${kategori}</h2>`;
  
        for (const brand in kategoriBrandObj[kategori]) {
          htmlTable += `<h3>Brand: ${brand}</h3>`;
          htmlTable += '<table>';
          htmlTable += '<tr><th>Product Name</th><th>Price</th><th>Description</th></tr>';
  
          kategoriBrandObj[kategori][brand].forEach(item => {
            htmlTable += `<tr><td>${item.product_name}</td><td>${item.price}</td><td>${item.desc}</td></tr>`;
          });
  
          htmlTable += '</table>';
        }
      }
  
      res.send(htmlTable);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('An error occurred.');
    }
  }