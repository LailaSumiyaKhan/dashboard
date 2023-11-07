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
}

export function getLastSixMonthsSalesData() {
   const data = [["Month", "Sales"]];
   const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
   ];

   const currentMonth = new Date().getMonth();
   const currentYear = new Date().getFullYear();

   for (let i = 0; i < 6; i++) {
      const month = monthNames[(currentMonth - i + 12) % 12];
      const year = currentMonth - i < 0 ? currentYear - 1 : currentYear;

      const dateString = `${month} ${year.toString().slice(2)}`;
      const randomSales = Math.floor(Math.random() * 1000) + 500;

      data.push([dateString, randomSales]);
   }

   return data;
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

//https://webflow.com/blog/best-color-combinations