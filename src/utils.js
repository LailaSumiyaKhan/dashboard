export const colors = {
   royalBlue: '#00539C',
   peach: '#EEA47F',
   blue: '#2F3C7E',
   pink: '#FBEAEB',
   charcoal: '#101820',
   yellow: '#FEE715',
   coral: '#F96167',
   limeGreen: ' #CCF381',
   electricBlue: '#4831D4',
   lavender: '#E2D1F9',
   teal: '#317773',
   cherryRed: '#990011',
   offWhite: '#FCF6F5',
   babyBlue: '#8AAAE5',
   white: '#FFFFFF',
   hotPink: '#FF69B4',
   neonBlue: '#00FFFF',
   burntOrange: '#EE4E34',
   lightBlue: '#ADD8E6',
   darkBlue: '#00008B',
   skyBlue: '#89ABE3',
   bubblegumPink: '#EA738D',
   beige: '#DDC3A5',
   tan: '#E0A96D',
   aliceBlue: '#F0F8FF',
   black: '#040D12',
   muiBlue: '#1976d2',
   colomBiaBlue: '#B9D9EB',
   lightSkyBlue: '#87CEFA'
}

export const urls = {
   homeData: "data/homeData.json",
   inventory: "data/inventoryTable.json",
}

const categories = ["Men", "Women", "Children", "Sports", "Graphic"];
const sizes = ["S", "M", "L", "XL", "XXL"];

const monthNames = [
   "Jan", "Feb", "Mar", "Apr", "May", "Jun",
   "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export function getLastSixMonthsSalesData() {
   let months = [];
   let sales = [];
   const currentMonth = new Date().getMonth();
   const currentYear = new Date().getFullYear();

   for (let i = 0; i < 6; i++) {
      const month = monthNames[(currentMonth - i + 12) % 12];
      const year = currentMonth - i < 0 ? currentYear - 1 : currentYear;

      const dateString = `${month} ${year.toString().slice(2)}`;
      const randomSales = Math.floor(Math.random() * 7000) + 5000;
      months.push(dateString);
      sales.push(randomSales);
   }
   const data = {
      months,
      sales
   }
   return data;
}

export function getLastSixMonthsOrdersData() {
   const months = [];
   const orders = [];
   const currentMonth = new Date().getMonth();
   const currentYear = new Date().getFullYear();

   for (let i = 0; i < 6; i++) {
      const month = monthNames[(currentMonth - i + 12) % 12];
      const year = currentMonth - i < 0 ? currentYear - 1 : currentYear;

      const dateString = `${month} ${year.toString().slice(2)}`;
      const randomOrders = Math.floor(Math.random() * 300) + 200;
      months.push(dateString);
      orders.push(randomOrders);
   }
   const data = {
      months,
      orders
   };
   return data;
}

export function getLastSixMonthsRevenueData() {
   const months = [];
   const revenue = [];
   const currentMonth = new Date().getMonth();
   const currentYear = new Date().getFullYear();

   for (let i = 0; i < 6; i++) {
      const month = monthNames[(currentMonth - i + 12) % 12];
      const year = currentMonth - i < 0 ? currentYear - 1 : currentYear;

      const dateString = `${month} ${year.toString().slice(2)}`;
      const randomOrders = Math.floor(Math.random() * 20000) + 200;
      months.push(dateString);
      revenue.push(randomOrders);
   }
   const data = {
      months,
      revenue
   };
   return data;
}

export function generateStockData() {
   const categories = ["Men", "Women", "Children", "Sports", "Graphic"];

   const rows = [];
   let id = 1;
   let total = 0;

   categories.forEach((category) => {
      let stock = Math.floor(Math.random() * 100);
      total += stock;
      let status = "OK";
      if (stock < 20) { status = "LOW" }
      rows.push({
         id: id++,
         category: `${category}`,
         stock,
         status
      });
   });

   return { total, rows };
}

export function prepareRevenueData(data) {
   let preparedDate = [];
   const first = [
      "Element",
      "revenue",
      { role: "style" },
      {
         sourceColumn: 0,
         role: "annotation",
         type: "string",
         calc: "stringify",
      },
   ];
   preparedDate.push(first);

   const color = "#1e90ff";
   for (let i = 0; i < data.length; ++i) {
      const item = data[i];
      const preparedItem = [item.category, item.revenue, color, null];
      preparedDate.push(preparedItem);
   }
   return preparedDate;
}

function generateNMonthsSells(n) {
   const sells = [];
   for (let i = 0; i < 12; i++) {
      const sell = Math.floor(Math.random() * (n + 1));
      sells.push(sell);
   }
   return sells;
}

export function generateInventoryTableData() {
   const colors = ["Red", "Blue", "Yellow", "Black", "White"];
   const rows = [];
   let idCounter = 1;
   let total = 0;

   categories.forEach((category) => {
      sizes.forEach((size) => {
         colors.forEach((color) => {
            const stock = Math.floor(Math.random() * 50);
            const sells = generateNMonthsSells(stock);
            const totalSells = sells.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            total += stock;
            let status = "OK"
            if (stock < 5) { status = "LOW"; }
            else if (stock < 15) { status = "MEDIUM" }
            const item = {
               id: idCounter++,
               category,
               size,
               color,
               stock,
               status,
               sells,
               totalSells
            };
            rows.push(item);
         });
      });
   });
   downloadObjectAsJson({ total, rows }, "inventoryTable")
   return { total, rows };
}

export function convertInventoryDataForTable(inventoryData) {

}

export function downloadObjectAsJson(obj, filename) {
   const json = JSON.stringify(obj);
   const blob = new Blob([json], { type: 'application/json' });
   const url = URL.createObjectURL(blob);

   const a = document.createElement('a');
   a.style.display = 'none';
   a.href = url;
   a.download = filename + '.json';
   a.click();
   URL.revokeObjectURL(url);
}

export function getInventorySummary(rows) {
   let summaryRows = [];

   categories.forEach(category => {
      let stock = 0;
      rows.forEach(item => {
         if (item.category === category) {
            stock += item.stock;
         }
      });
      const row = { id: category, category, sizes: "S, M, L, XL, XXL", colors: "Red, Blue, Black...", stock };
      summaryRows.push(row);
   });
   return summaryRows;
}

export function getPopUpProduct(rows, selectedRow) {
   return rows.find(row => row.id === selectedRow);
}

export function getLastNMonths(n) {

   const currentDate = new Date();
   const currentYear = currentDate.getFullYear() % 100; // Get last two digits of the year

   const result = [];
   for (let i = 0; i < n; i++) {
      const monthIndex = (currentDate.getMonth() - i + 12) % 12; // Calculate month index going back n months
      const monthYearString = `${monthNames[monthIndex]} ${currentYear}`;
      result.push(monthYearString);
   }

   return result.reverse(); // Reverse the array to get the months in ascending order
}

//https://webflow.com/blog/best-color-combinations