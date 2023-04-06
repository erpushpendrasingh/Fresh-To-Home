import { Pagination, Scrollbar, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "../../img";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box, Image, Text } from "@chakra-ui/react";

function Crousel() {
     return (
          <div
               style={{
                    zIndex: "-1000",
                    width: "80%",
                    margin: "  auto",
               }}
          >
               {/* <Box> */}
               <Swiper
                    style={{ zIndex: "-1000" }}
                    modules={[Pagination, Scrollbar, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    swipeHandler={1}
                    // navigation
                    // onSwiper={(swiper)}// => console.log(swiper)}
                    // onSlideChange={() => console.log("slide change")}
                    allowSlideNext={true}
                    allowSlidePrev={true}
                    autoplay={{
                         delay: 3000,
                         disableOnInteraction: true,
                    }}
               >
                    {images?.map((img, index) => (
                         <SwiperSlide key={index}>
                              <img
                                   style={{
                                        width: "800",
                                        zIndex: "-1000",
                                   }}
                                   src={img}
                                   alt={index}
                              />
                         </SwiperSlide>
                    ))}
               </Swiper>
               {/* </Box> */}
               <Box
                    p={5}
                    display="flex"
                    alignItems={"center"}
                    justifyContent="space-between"
               >
                    <Box w="250px" display={"flex"}>
                         {" "}
                         <Image
                              src="https://static.freshtohome.com/images/icons/vip.png"
                              alt="person"
                              w="50px"
                              h="50px"
                         />{" "}
                         <Text fontSize={"11px"}>
                              Become a VIP Member and ENJOY UNLIMITED FREE HOME
                              DELIVERY, exclusive deals and more! JOIN NOW
                         </Text>
                    </Box>
                    <Box w="250px" display={"flex"}>
                         {" "}
                         <Image
                              w="50px"
                              h="50px"
                              src="https://static.freshtohome.com/images/icons/early-delivery.png"
                              alt="person"
                         />{" "}
                         <Text fontSize={"11px"}>
                              Earliest available delivery slot in most areas is
                              Friday, 17th March
                         </Text>
                    </Box>
                    <Box w="180px" display={"flex"}>
                         {" "}
                         <Image
                              w="50px"
                              h="50px"
                              src="https://static.freshtohome.com/images/icons/download-app.png"
                              alt="person"
                         />{" "}
                         <Text fontSize={"11px"}>
                              Download Mobile App <a href="/">iOS</a> or{" "}
                              <a href="/">ANDROID.</a>
                         </Text>
                    </Box>
               </Box>
          </div>
     );
}

export default Crousel;
