// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//Logos
import CBS from "../../assets/logo/cbs.png";
import MessariLogo from "../../assets/logo/messariLogo.png";
import TechCrunch from "../../assets/logo/techcrunch.png";
import Yahoo from "../../assets/logo/yahoo.png";

export default function Slider() {
  const mediaList = [
    {
      id: 1,
      image: TechCrunch,
      title: "TechCrunch",
      color: "#0A9E01",
      description:
        "Daomerge Protocol raises $10M from Pantera Capital, Mark Cuban for its 'DeFi Robinhood'",
    },
    {
      id: 2,
      image: MessariLogo,
      title: "Messari",
      color: "#00000",
      description:
        "Daomerge : An Interoperable Exchange Infrastructure Protocol for DeFi Markets",
    },
    {
      id: 3,
      image: Yahoo,
      title: "Yahoo",
      color: "#6001D1",
      description:
        "Daomerge Pro Launches the First-Ever Bored Ape NFT Floor Price Perpetuals",
    },
    {
      id: 4,
      image: CBS,
      title: "CBS",
      color: "0674C9",
      description:
        "Blockchain company buys and burns Banksy artwork to turn it into a digital original",
    },
  ];
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        grabCursor={true}
        loop={true}
        className="hidden lg:block"
      >
        {mediaList.map((x) => {
          return (
            <SwiperSlide>
              <div className="flex flex-col space-y-5">
                <div
                  className="p-5 w-[15rem] h-[15rem] py-12 rounded-md flex items-center justify-center"
                  style={{ backgroundColor: `${x.color}` }}
                >
                  <img src={x.image} alt="" />
                </div>
                <div className="text-[1.5rem] font-semibold">{x.title}</div>
                <div>{x.description}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        grabCursor={true}
        loop={true}
        className="hidden md:block lg:hidden"
      >
        {mediaList.map((x) => {
          return (
            <SwiperSlide>
              <div className="flex flex-col space-y-5">
                <div
                  className="p-5 w-[15rem] h-[15rem] py-12 rounded-md flex items-center justify-center"
                  style={{ backgroundColor: `${x.color}` }}
                >
                  <img src={x.image} alt="" />
                </div>
                <div className="text-[1.5rem] font-semibold">{x.title}</div>
                <div>{x.description}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        grabCursor={true}
        loop={true}
        className="md:hidden"
      >
        {mediaList.map((x) => {
          return (
            <SwiperSlide>
              <div className="flex flex-col space-y-5">
                <div
                  className="p-5 h-[15rem] py-12 rounded-md flex items-center justify-center"
                  style={{ backgroundColor: `${x.color}` }}
                >
                  <img src={x.image} alt="" />
                </div>
                <div className="text-[1.5rem] font-semibold">{x.title}</div>
                <div>{x.description}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
