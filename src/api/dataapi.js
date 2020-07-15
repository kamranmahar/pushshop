import Axios from 'axios';

export function getShoesData(){
    return shoes;
}

 const shoes = { 
  "items" : {
  "air-jordan-3-valor-blue": {
      name: "VALOUR BLUE",
      desc:"The Air Jordan 3 remains an all-time favourite silhouette worldwide. While the design has hit shelves in an astonishing range of materials and colours, some iterations are tougher to track down than others. Such is the case for most players-exclusive (PE) releases, which are bestowed upon athletes at a handful of brand-sponsored universities. Nodding to a special edition created for athletes at MJ's alma mater, this release comes dressed in white with accents of Valour Blue. Elephant print and a stitched tag on the insole pay homage to MJ for paving the way.",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
  
    "jordan-mars-270-london": {
      name: "JORDAN MARS 270 LONDON",
  desc:"The Air Jordan 3 remains an all-time favourite silhouette worldwide. While the design has hit shelves in an astonishing range of materials and colours, some iterations are tougher to track down than others. Such is the case for most players-exclusive (PE) releases, which are bestowed upon athletes at a handful of brand-sponsored universities. Nodding to a special edition created for athletes at MJ's alma mater, this release comes dressed in white with accents of Valour Blue. Elephant print and a stitched tag on the insole pay homage to MJ for paving the way.",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "air-jordan-1-zoom-racer-blue": {
      name: "RACER BLUE",
  desc:"The Air Jordan 3 remains an all-time favourite silhouette worldwide. While the design has hit shelves in an astonishing range of materials and colours, some iterations are tougher to track down than others. Such is the case for most players-exclusive (PE) releases, which are bestowed upon athletes at a handful of brand-sponsored universities. Nodding to a special edition created for athletes at MJ's alma mater, this release comes dressed in white with accents of Valour Blue. Elephant print and a stitched tag on the insole pay homage to MJ for paving the way.",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "zoom-Vaporfly-next": {
      name: "Nike ZoomX Vaporfly NEXT%",
  desc:"The Nike ZoomX Vaporfly NEXT% clears your path to record-breaking speed with a lighter design and faster feel than before. With more cushioning underfoot and reduced weight up top, the result is unprecedented energy return and comfort..",
      img:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/de75d752-80ed-474d-8237-ba0d87a41e25/zoomx-vaporfly-next-running-shoe-BPqDMN.jpg"
    },
    "air-zoom-pegasus": {
      name: "Nike Air Zoom Pegasus 37 FlyEase",
  desc:"37 years and millions of miles later, the legend lives on in the Nike Air Zoom Pegasus 37 FlyEase. Our most trusted running shoe flies into the future with Zoom Air specially tuned to your needs, and a FlyEase entry system that gets you in quickly and easily.",
      img:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8dd95c55-5aae-4616-a217-6a38e4735846/air-zoom-pegasus-37-flyease-running-shoe-bX39Rb.jpg"
    }
  }
  };


export const AllCountries = async() => {
  try {
      //const apiresponse = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL");
      const { data: {countryitems} } = await Axios.get("https://api.thevirustracker.com/free-api?countryTotals=ALL");
      console.log(countryitems);
          let countriesdata  =[];
        Object.entries(countryitems[0]).map((item) => {
              let country={code:item[1].code,title:item[1].title,data:item[1]}
              countriesdata.push(country);
              return 1;
          });
      
      return countriesdata;
      } catch(error) {
              console.log(error);
  }
}